import {
    CSSProperties,
    forwardRef,
    KeyboardEvent,
    MouseEvent,
    Ref,
    useCallback,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import uniqueId from 'lodash/uniqueId';
import TIcon from '../../icon/TIcon';
import {TTextFieldProps, TTextFieldRef} from './TTextField.interface';
import useValidator from '@/common/hook/UseValidator';

const TTextField = forwardRef((props: TTextFieldProps, ref: Ref<TTextFieldRef>) => {


    // region [Hooks]

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const validator = useValidator(props.noTrim ? props.value : props.value.trim(), props.rules, props.successMessage);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputUuid = uniqueId();

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef?.current?.focus();
        },
        blur() {
            inputRef?.current?.blur();
        },
        validate() {
            return validator.validate();
        },
        manualValidate(result: boolean, message?: string) {
            validator.manualValidate(result, message);
        },
        clearValidation() {
            validator.clearValidation();
        },
        getValidateResult(): boolean {
            return validator.result;
        },
        getValidateMessage(): string {
            return validator.message;
        },
    }));

    // endregion


    // region [Events]

    const onChange = useCallback((event): void => {

        const newLength = props.noTrim ? event.target.value.length : event.target.value.trim().length;

        if (props.counter) {
            if (newLength > props.counter) {
                props.onChange(event.target.value.substring(0, props.counter));
                return;
            }
        }
        props.onChange(event.target.value);
    }, [props]);
    const onFocus = useCallback((): void => {
        validator.clearValidation();
        setHasFocus(true);
    }, [validator]);

    const onBlur = useCallback((): void => {
        if (!props.noTrim && props.value !== props.value.trim()) {
            props.onChange(props.value.trim());
        }
        if (!props.lazy) {
            validator.validate();
        }
        setHasFocus(false);
        if (props.onBlur) {
            props.onBlur();
        }

    }, [props, validator]);

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter' && props.onKeyDownEnter) {
            props.onKeyDownEnter(event);
        }

        if (props.onKeyDown) {
            props.onKeyDown(event);
        }
    }, [props]);

    const onClickClear = useCallback((event: MouseEvent): void => {
        event.stopPropagation();
        if (props.onChange) { props.onChange(''); }
        if (props.onClear) { props.onClear(); }
    }, [props]);

    // endregion


    // region [Privates]

    const togglePasswordVisibility = useCallback((): void => {
        setIsPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible]);

    const inputType = useMemo((): string => {

        if (props.password && !isPasswordVisible) return 'password';
        return 'text';
    }, [props.password, isPasswordVisible]);

    const counterLength = useMemo((): number => {

        if (props.noTrim) {
            return props.value?.length;
        }
        return props.value?.trim().length;
    }, [props.noTrim, props.value]);


    // endregion


    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        if (props.disabled) { clazz.push('t-text-field--disabled'); }
        if (!validator.result) { clazz.push('t-text-field--failure'); }
        if (validator.result && validator.message) { clazz.push('t-text-field--success'); }
        if (hasFocus) { clazz.push('t-text-field--focused'); }

        clazz.push(`t-text-field--${props.type}`);

        return clazz.join(' ');
    }, [props.className, props.disabled, props.type, validator.result, validator.message, hasFocus]);

    const inputClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.disabled) clazz.push('t-text-field__container__input--disabled');

        return clazz.join(' ');
    }, [props.disabled]);

    const labelClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.required) { clazz.push('t-text-field__label--required'); }

        return clazz.join(' ');
    }, [props.required]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};
        if (props.width) style = {...style, width: props.width};

        return style;
    }, [props.style, props.width]);


    // endregion

    return (
        <div className={`t-text-field ${rootClass}`} style={rootStyle} id={props.id} data-testid={'text-field-root'}>
            {
                props.label && (
                    <label className={`t-text-field__label ${labelClass}`} htmlFor={inputUuid}>
                        {props.label}
                    </label>
                )
            }
            <div className={'t-text-field__container'}>
                <input id={inputUuid}
                       ref={inputRef}
                       type={inputType}
                       tabIndex={props.disabled ? -1 : 0}
                       className={`t-text-field__container__input ${inputClass}`}
                       disabled={props.disabled}

                       placeholder={!props.disabled ? props.placeholder : ''}
                       value={props.value}
                       onChange={onChange}
                       onKeyDown={onKeyDown}
                       onFocus={onFocus}
                       onBlur={onBlur}
                       autoComplete={props.autoComplete}
                       data-testid={'text-field-input'}
                />
                {
                    props.clearable && props.value && props.value.length > 0 && !props.disabled && (
                        <TIcon small
                               className={'t-text-field__container__action-icon'}
                               clickable
                               onClick={onClickClear}>
                            clear
                        </TIcon>
                    )
                }
                {
                    props.searchable && !props.disabled && (
                        <TIcon small
                               className={'t-text-field__container__action-icon'}
                               clickable
                               onClick={props.onClickSearch}>
                            search
                        </TIcon>
                    )
                }
                {
                    props.password && !props.disabled && (
                        <TIcon small
                               className={'t-text-field__container__action-icon'}
                               clickable
                               onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? 'visibility_off' : 'visibility'}
                        </TIcon>
                    )
                }
            </div>

            <div className={'t-text-field__details'}>
                <div className={'t-text-field__details__message'} data-testid={'text-field-message'}>
                    {validator.message || props.hint}
                </div>
                <div className={'t-text-field__details__counter'} data-testid={'text-field-counter'}>
                    {
                        props.counter && !props.disabled
                        && `${counterLength} / ${props.counter}`
                    }
                </div>
            </div>

        </div>
    );
});

TTextField.defaultProps = {
    type: 'outline',
    lazy: true,
};

TTextField.displayName = 'TTextField';


export default TTextField;
