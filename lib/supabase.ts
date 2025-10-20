import { createClient } from '@supabase/supabase-js';
import { WaitlistEmail, WaitlistStats } from './types';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
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

/**
 * Get waitlist statistics
 */
export async function getWaitlistStats(): Promise<WaitlistStats> {
    const { data, error } = await supabase
        .from('waitlist_emails')
        .select('id, created_at, status');

    if (error) {
        throw error;
    }

    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    return {
        total: data.length,
        pending: data.filter((item) => item.status === 'pending').length,
        recent: data.filter(
            (item) => new Date(item.created_at) > dayAgo
        ).length,
    };
}

