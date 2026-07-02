import type { AuthFormData } from "./types";

export function isSignupPasswordValid(data: AuthFormData): boolean {
    return data.password.length >= 8 && data.password === data.confirmPassword;
}

export function isProfileValid(data: AuthFormData): boolean {
    return data.fullName.trim().length > 1;
}

export function isBusinessValid(): boolean {
    return true;
}
