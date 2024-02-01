import {CSSProperties, forwardRef, KeyboardEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react';
import uniqueId from 'lodash/uniqueId';
import useValidator from '@/common/hook/UseValidator';
import {TNumberFieldProps, TNumberFieldRef} from './TNumberField.interface';


const TNumberField = forwardRef((props: TNumberFieldProps, ref: Ref<TNumberFieldRef>) => {


    // region [Hooks]

    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const validator = useValidator(props.value, props.rules, props.successMessage);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputUuid: string = uniqueId();
    const messageUuid: string = uniqueId();

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef?.current?.focus();
        },
        validate() {
            return validator.validate();
        },
        manualValidate(result: boolean, message?: string) {
            validator.manualValidate(result, message);
        },
    }));

    // endregion


    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.disabled) { clazz.push('t-number-field--disabled'); }
        if (!validator.result) { clazz.push('t-number-field--failure'); }
        if (validator.result && validator.message) { clazz.push('t-number-field--success'); }
        if (hasFocus) { clazz.push('t-number-field--focused'); }

        clazz.push(`t-number-field--${props.type}`);

        return clazz.join(' ');
    }, [props.className, props.disabled, props.type, validator.result, validator.message, hasFocus]);


    const inputClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.disabled) clazz.push('t-number-field__container__input--disabled');

        return clazz.join(' ');
    }, [props.disabled]);


    const incrementButtonClass: string = useMemo((): string => {

        if ((props.max !== undefined && Number.parseInt(props.value, 10) >= props.max) || props.disabled) {
            return 't-number-field__container__action-icon__increment--disabled';
        }

        return '';
    }, [props.max, props.disabled, props.value]);

    const decrementButtonClass: string = useMemo((): string => {

        if ((props.min !== undefined && Number.parseInt(props.value, 10) <= props.min) || props.disabled) {
            return 't-number-field__container__action-icon__decrement--disabled';
        }

        return '';
    }, [props.disabled, props.min, props.value]);


    const labelClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.required) { clazz.push('t-number-field__label--required'); }

        return clazz.join(' ');
    }, [props.required]);


    const rootStyle: CSSProperties = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};
        if (props.width) style = {...style, width: props.width};

        return style;
    }, [props.style, props.width]);

    // endregion

    // region [Privates]

    const adjustValue = useCallback((): void => {
        const value: number = Number.parseInt(props.value, 10);

        // Check NaN
        if (Number.isNaN(value)) {
            inputRef.current.value = '';
            props.onChange('');
            return;
        }

        // Check violating step
        const remainder: number = (value - props.min) % props.step;
        if (remainder !== 0) {
            props.onChange(`${value - remainder}`);
        }

    }, [props]);

    const inputPlaceholder: string = useMemo((): string => {
        if (props.label && !hasFocus) { return ''; }
        if (props.disabled) { return ''; }

        return props.placeholder;

    }, [props.label, hasFocus, props.disabled, props.placeholder]);


    // endregion


    // region [Events]

    const onFocus = useCallback((): void => {
        validator.clearValidation();
        setHasFocus(true);
    }, [validator]);

    const onBlur = useCallback((): void => {

        adjustValue();

        if (!props.lazy) { validator.validate(); }
        setHasFocus(false);
    }, [adjustValue, props.lazy, validator]);

    const isInputtableValue = useCallback((targetValue: string): boolean => {

        if (targetValue === '') { return true; }
        const value = Number.parseInt(targetValue, 10);


        if (Number.isNaN(value)) { return false; }

        return value <= props.max;


    }, [props.max]);

    const onChange = useCallback((e): void => {

        if (isInputtableValue(e.target.value)) {
            props.onChange(e.target.value);
        }
    }, [isInputtableValue, props]);


    const onClickStepUp = useCallback((): void => {

        inputRef.current.stepUp();
        if (props.value !== inputRef.current.value) {
            props.onChange(inputRef.current.value);
        }

    }, [props]);

    const onClickStepDown = useCallback((): void => {

        inputRef.current.stepDown();
        if (props.value !== inputRef.current.value) {
            props.onChange(inputRef.current.value);
        }
    }, [props]);

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>): void => {

        if (event.key === '-' && props.min >= -1) {
            event.preventDefault();
            props.onChange(`${props.min}`);
        }
        if (event.key === '+') {
            event.preventDefault();
        }

        if (event.key === 'Enter' && props.onKeyDownEnter) {
            props.onKeyDownEnter(event);
        }


        if (props.onKeyDown) {
            props.onKeyDown(event);
        }
    }, [props]);

    // endregion


    return (
        <div className={`t-number-field ${rootClass}`}
             style={rootStyle}
             id={props.id}
             data-testid={'number-field-root'}>
            {
                props.label && (
                    <label className={`t-number-field__label ${labelClass}`} htmlFor={inputUuid}>
                        {props.label}
                    </label>
                )
            }
            <div className={'t-number-field__container'}
                 data-testid={'number-field-root__container'}>
                <input ref={inputRef}
                       type={'number'}
                       tabIndex={props.disabled ? -1 : null}
                       title={!props.label ? `t-number-field__container__input-title-${props.id}` : null}
                       className={`t-number-field__container__input ${inputClass}`}
                       disabled={props.disabled}
                       placeholder={inputPlaceholder}
                       value={props.value}
                       min={props.min}
                       max={props.max}
                       step={props.step}
                       onChange={onChange}
                       onKeyDown={onKeyDown}
                       onFocus={onFocus}
                       onBlur={onBlur}
                       id={inputUuid}
                       aria-describedby={messageUuid}
                       data-testid={'number-field-input-root'}
                />
                {

                    <div className={'t-number-field__container__action-icon'}>
                        <div className={`t-number-field__container__action-icon__increment ${incrementButtonClass}`}
                             onClick={onClickStepUp}
                             data-testid={'number-field__increment-button'}

                        />

                        <div className={`t-number-field__container__action-icon__decrement ${decrementButtonClass}`}
                             onClick={onClickStepDown}
                             data-testid={'number-field__decrement-button'}
                        />
                    </div>
                }
            </div>
            <div className={'t-number-field__details'}>
                <div className={'t-number-field__details__message'}
                     id={messageUuid}
                     data-testid={'number-field-message'}>
                    {validator.message || props.hint}
                </div>
            </div>
        </div>
    );
});
TNumberField.defaultProps = {
    type: 'outline',
    lazy: true,
    min: -100000000000,
    max: 100000000000,
    step: 1,
};

TNumberField.displayName = 'TNumberField';


export default TNumberField;
