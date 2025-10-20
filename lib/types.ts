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

export interface WaitlistStats {
    total: number;
    pending: number;
    recent: number;
}

// Form types
export interface WaitlistFormData {
    email: string;
}

// Component props
export interface WaitlistFormProps {
    onSuccess?: () => void;
    onError?: (error: string) => void;
}

