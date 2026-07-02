export type FlowStage =
    | "email"
    | "login-password"
    | "signup-password"
    | "signup-profile"
    | "signup-business"
    | "signup-completion";

export interface AuthFormData {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    phone: string;
    companyName: string;
    website: string;
    segment: string;
}

export const INITIAL_FORM_DATA: AuthFormData = {
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    companyName: "",
    website: "",
    segment: "",
};
