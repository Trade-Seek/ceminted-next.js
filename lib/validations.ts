/**
 * Email validation utilities
 */

export function validateEmail(email: string): boolean {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

export function sanitizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

export function sanitizeInput(input: string): string {
    // Remove potentially dangerous characters
    return input.replace(/[<>]/g, '');
}

