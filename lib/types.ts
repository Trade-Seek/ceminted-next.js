// Database types
export interface WaitlistEmail {
    id: string;
    email: string;
    created_at: string;
    updated_at: string;
    status: 'pending' | 'contacted' | 'converted';
    source: string;
    metadata: {
        userAgent?: string;
        ip?: string;
        timestamp: string;
    };
}

// API Response types
export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
}

