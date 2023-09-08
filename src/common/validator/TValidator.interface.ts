
export interface TValidatorProps {
    lazy?: boolean
    rules?: ((value: any) => true | string)[],
    successMessage?: string,
}

export interface TValidatorRef {
    validate(): boolean | string,
    clearValidation(): void,
}
