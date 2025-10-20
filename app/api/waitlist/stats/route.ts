import { NextResponse } from 'next/server';
import { getWaitlistStats } from '@/lib/supabase';
import { ApiResponse, WaitlistStats } from '@/lib/types';

export async function GET() {
    try {
        const stats = await getWaitlistStats();

        return NextResponse.json<ApiResponse<{ stats: WaitlistStats }>>({
            success: true,
            data: { stats },
        });
    } catch (error) {
        console.error('Stats error:', error);

        return NextResponse.json<ApiResponse>(
            {
                success: false,
                message: 'Failed to fetch stats',
            },
            { status: 500 }
        );
    }
}

