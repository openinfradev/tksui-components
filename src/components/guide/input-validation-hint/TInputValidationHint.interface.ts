import type {Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export interface TInputValidationHintRuleVO {
    rule(string): boolean;
    description: string;
    result?: boolean;
}

export interface TInputValidationHintProps extends TBaseProps {
    value: string | number | boolean;
    rules: TInputValidationHintRuleVO[];
    description?: string;

    ref?: Ref<TInputValidationHintRef>;
}

export interface TInputValidationHintRef {
    manualValidate(): void;
}
