import { createClient } from '@supabase/supabase-js';
import { WaitlistEmail } from './types';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'placeholder-key';

// Only throw error in runtime, not during build
if (process.env.NODE_ENV !== 'production' && (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY)) {
    console.warn('Missing Supabase environment variables - using placeholder values for build');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Add email to waitlist
 */
export async function addToWaitlist(
    email: string,
    metadata: Record<string, any> = {}
): Promise<WaitlistEmail> {
    // Check if email already exists
    const { data: existingEmail, error: checkError } = await supabase
        .from('waitlist_emails')
        .select('email')
        .eq('email', email.toLowerCase())
        .single();

    if (existingEmail) {
        throw new Error('This email is already on our waitlist!');
    }

    // Insert new email
    const { data, error } = await supabase
        .from('waitlist_emails')
        .insert([
            {
                email: email.toLowerCase(),
                source: 'website',
                status: 'pending',
                metadata: {
                    ...metadata,
                    timestamp: new Date().toISOString(),
                },
            },
        ])
        .select()
        .single();

    if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to add email to waitlist');
    }

    return data as WaitlistEmail;
}

