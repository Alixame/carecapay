 "use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SplitAuthShell } from "./SplitAuthShell";
import { WizardShell } from "./WizardShell";
import { WizardFooter } from "./WizardFooter";
import { EmailStep } from "./steps/EmailStep";
import { LoginPasswordStep } from "./steps/LoginPasswordStep";
import { SignupPasswordStep } from "./steps/SignupPasswordStep";
import { ProfileStep } from "./steps/ProfileStep";
import { BusinessStep } from "./steps/BusinessStep";
import { CompletionStep } from "./steps/CompletionStep";
import { INITIAL_FORM_DATA, type AuthFormData, type FlowStage } from "./types";
import {
    isBusinessValid,
    isProfileValid,
    isSignupPasswordValid,
} from "./validation";

const SIGNUP_STEP_NUMBER: Record<FlowStage, number> = {
    email: 1,
    "login-password": 1,
    "signup-password": 2,
    "signup-profile": 3,
    "signup-business": 4,
    "signup-completion": 5,
};

const SIGNUP_MASCOT: Record<FlowStage, string> = {
    email: "/assets/careca-hero.png",
    "login-password": "/assets/careca-hero.png",
    "signup-password": "/assets/careca-develop.png",
    "signup-profile": "/assets/careca-develop.png",
    "signup-business": "/assets/careca-business.png",
    "signup-completion": "/assets/careca-final-cta.png",
};

export function AuthFlow() {
    const router = useRouter();
    const [stage, setStage] = useState<FlowStage>("email");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<AuthFormData>(INITIAL_FORM_DATA);

    function updateField<K extends keyof AuthFormData>(
        field: K,
        value: AuthFormData[K],
    ) {
        setFormData((current) => ({ ...current, [field]: value }));
    }

    function resetToEmail() {
        setStage("email");
        setFormData(INITIAL_FORM_DATA);
    }

    function handleEmailSubmit() {
        setLoading(true);
        setTimeout(() => {
            const hasAccount = Math.random() < 0.5;
            setStage(hasAccount ? "login-password" : "signup-password");
            setLoading(false);
        }, 800);
    }

    function handleLoginSubmit() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push("/dashboard");
        }, 600);
    }

    if (stage === "email" || stage === "login-password") {
        return (
            <SplitAuthShell>
                {stage === "email" ? (
                    <EmailStep
                        email={formData.email}
                        onChange={(email) => updateField("email", email)}
                        onSubmit={handleEmailSubmit}
                        loading={loading}
                    />
                ) : (
                    <LoginPasswordStep
                        email={formData.email}
                        password={formData.password}
                        onChange={(password) => updateField("password", password)}
                        onSubmit={handleLoginSubmit}
                        onBack={resetToEmail}
                        loading={loading}
                    />
                )}
            </SplitAuthShell>
        );
    }

    const currentStep = SIGNUP_STEP_NUMBER[stage];
    const mascot = SIGNUP_MASCOT[stage];

    const stepValidity: Record<FlowStage, boolean> = {
        email: true,
        "login-password": true,
        "signup-password": isSignupPasswordValid(formData),
        "signup-profile": isProfileValid(formData),
        "signup-business": isBusinessValid(),
        "signup-completion": true,
    };

    function goToNextSignupStep() {
        if (stage === "signup-password") setStage("signup-profile");
        else if (stage === "signup-profile") setStage("signup-business");
        else if (stage === "signup-business") setStage("signup-completion");
    }

    const footer =
        stage === "signup-completion" ? null : (
            <WizardFooter
                currentStep={currentStep}
                totalSteps={5}
                onCancel={resetToEmail}
                onContinue={goToNextSignupStep}
                continueDisabled={!stepValidity[stage]}
            />
        );

    return (
        <WizardShell currentStep={currentStep} mascot={mascot} footer={footer}>
            {stage === "signup-password" ? (
                <SignupPasswordStep
                    data={formData}
                    onChange={(field, value) => updateField(field, value)}
                />
            ) : null}
            {stage === "signup-profile" ? (
                <ProfileStep
                    data={formData}
                    onChange={(field, value) => updateField(field, value)}
                />
            ) : null}
            {stage === "signup-business" ? (
                <BusinessStep
                    data={formData}
                    onChange={(field, value) => updateField(field, value)}
                />
            ) : null}
            {stage === "signup-completion" ? (
                <CompletionStep onFinish={() => router.push("/dashboard")} />
            ) : null}
        </WizardShell>
    );
}
