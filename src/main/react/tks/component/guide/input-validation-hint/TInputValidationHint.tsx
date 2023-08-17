import {CSSProperties, forwardRef, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useState} from 'react';
import {
    TInputValidationHintProps, TInputValidationHintRef,
    TInputValidationHintRuleVO,
} from '~/tks/component/guide/input-validation-hint/TInputValidationHint.interface';


const TInputValidationHint = forwardRef((props: TInputValidationHintProps, ref: Ref<TInputValidationHintRef>) => {

    // region [Hooks]

    const [validationResult, setValidationResult] = useState<TInputValidationHintRuleVO[]>([]);


    useImperativeHandle(ref, () => ({
        manualValidate() {
            validate();
        },
    }));


    // endregion


    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const ruleItemClass = useCallback((result: boolean): string => {
        if (result) {
            return 't-input-validation-hint__rules__item--valid';
        }
        return 't-input-validation-hint__rules__item--invalid';

    }, []);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }

        return style;
    }, [props.style]);

    const validate = useCallback(() => {
        const result: TInputValidationHintRuleVO[] = props.rules.reduce((previous, current) => {
            return [
                ...previous,
                {...current, result: current.rule(props.value)},
            ];
        }, []);

        setValidationResult(result);
    }, [props.rules, props.value]);


    // endregion


    // region [Effect]

    useEffect(() => {
        validate();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value]);

    // endregion

    return (
        <div className={`t-input-validation-hint ${rootClass}`}
             style={rootStyle}
        >

            {
                props.description && (
                    <div className={'t-input-validation-hint__description'}>
                        {props.description}
                    </div>
                )
            }

            <ul className={'t-input-validation-hint__rules'}>
                {
                    validationResult.map((rule, index) => {
                        return (
                            <div key={index}
                                 className={`t-input-validation-hint__rules__item ${ruleItemClass(rule.result)}`}>
                                {rule.description} ({rule.result ? 'O' : 'X'})
                            </div>
                        );
                    })
                }
            </ul>

        </div>
    );
});

TInputValidationHint.displayName = 'TInputValidationHint';

export default TInputValidationHint;
