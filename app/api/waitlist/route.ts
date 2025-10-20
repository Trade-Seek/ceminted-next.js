import { NextRequest, NextResponse } from 'next/server';
import { addToWaitlist } from '@/lib/supabase';
import { validateEmail, sanitizeEmail } from '@/lib/validations';
import { ApiResponse } from '@/lib/types';

// Rate limiting map (in-memory, consider Redis for production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const limit = rateLimitMap.get(ip);

    if (!limit || now > limit.resetTime) {
        // Reset or create new limit
        rateLimitMap.set(ip, {
            count: 1,
            resetTime: now + 3600000, // 1 hour
        });
        return true;
    }

    if (limit.count >= 5) {
        return false;
    }

    limit.count++;
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json<ApiResponse>(
                {
                    success: false,
                    message: 'Too many requests. Please try again later.',
                },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { email } = body;

        // Validate email
        if (!email || !validateEmail(email)) {
            return NextResponse.json<ApiResponse>(
                {
                    success: false,
                    message: 'Please provide a valid email address',
                },
                { status: 400 }
            );
        }

        // Sanitize and add to waitlist
        const sanitizedEmail = sanitizeEmail(email);
        const userAgent = request.headers.get('user-agent') || 'unknown';

        const data = await addToWaitlist(sanitizedEmail, {
            userAgent,
            ip,
        });

        console.log('New waitlist signup:', data);

        return NextResponse.json<ApiResponse>({
            success: true,
            message: 'Successfully added to waitlist!',
            data: {
                id: data.id,
                email: data.email,
                createdAt: data.created_at,
            },
        });
    } catch (error: any) {
        console.error('Waitlist error:', error);

        // Check if it's a duplicate email error
        if (error.message.includes('already on our waitlist')) {
            return NextResponse.json<ApiResponse>(
                {
                    success: false,
                    message: error.message,
                },
                { status: 409 }
            );
        }

        return NextResponse.json<ApiResponse>(
            {
                success: false,
                message: 'Failed to add email to waitlist. Please try again.',
            },
            { status: 500 }
        );
    }
}

