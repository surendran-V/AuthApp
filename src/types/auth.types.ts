// src/types/auth.types.ts
export interface SignUpFormValues {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
  }

  export interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
  }
