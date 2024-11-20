'use client';

import {
    CSSProperties,
    forwardRef,
    KeyboardEvent, memo,
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
import {TTextFieldProps, TTextFieldRef} from '@/components';
import useValidator from '@/common/hook/UseValidator';
import themeToken from '~style/designToken/ThemeToken.module.scss';


const TTextField = forwardRef(({
    lazy = true,
    rows = 1,
    onClear,
    onBlur,
    onFocus,
    onKeyDown,
    onChange,
    onKeyDownEnter,
    onClickSearch,
    ...restProps
}: TTextFieldProps, ref: Ref<TTextFieldRef>) => {


    // region [Hooks]

    const props: TTextFieldProps = {lazy, rows, onClear, onBlur, onFocus, onKeyDown, onChange, onKeyDownEnter, onClickSearch, ...restProps};

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [hasFocus, setHasFocus] = useState<boolean>(false);
    const validator = useValidator(props.noTrim ? props.value : props.value?.toString().trim(), props.rules, props.successMessage);
    const inputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const inputUuid = uniqueId();

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef?.current?.focus();
            textareaRef?.current?.focus();
        },
        scrollToComponent(options: ScrollIntoViewOptions = {behavior: 'smooth', block: 'center'}) {
            inputRef?.current?.scrollIntoView(options);
            textareaRef?.current?.scrollIntoView(options);
        },
        blur() {
            inputRef?.current?.blur();
            textareaRef?.current?.blur();
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

    const onChangeInput = useCallback((event): void => {

        const newLength = props.noTrim ? event.target.value.length : event.target.value.trim().length;

        if (props.counter) {
            if (newLength > props.counter) {
                onChange(event.target.value.substring(0, props.counter));
                return;
            }
        }
        onChange(event.target.value);
    }, [onChange, props.counter, props.noTrim]);
    const onFocusInput = useCallback((): void => {
        validator.clearValidation();
        setHasFocus(true);

        if (onFocus) {
            onFocus();
        }
    }, [onFocus, validator]);

    const onBlurInput = useCallback((): void => {
        if (!props.noTrim && props.value !== props.value.trim()) {
            onChange(props.value.trim());
        }
        if (!props.lazy) {
            validator.validate();
        }
        setHasFocus(false);
        if (onBlur) {
            onBlur();
        }

    }, [onBlur, onChange, props.lazy, props.noTrim, props.value, validator]);

    const onKeyDownInput = useCallback((event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

        if (event.nativeEvent.isComposing) { return; }

        if (event.key === 'Enter' && onKeyDownEnter) {
            onKeyDownEnter(event);
        }

        if (onKeyDown) {
            onKeyDown(event);
        }
    }, [onKeyDown, onKeyDownEnter]);

    const onClickClear = useCallback((event: MouseEvent): void => {
        event?.stopPropagation();
        if (onChange) { onChange(''); }
        if (onClear) { onClear(); }
    }, [onChange, onClear]);

    // endregion


    // region [Privates]

    const togglePasswordVisibility = useCallback((): void => {
        setIsPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible]);

    const inputType = useMemo((): string => {

        if (props.password && !isPasswordVisible) { return 'password'; }
        return 'text';
    }, [props.password, isPasswordVisible]);

    const counterLength = useMemo((): number => {

        if (props.noTrim) {
            return props.value?.length;
        }
        return props.value?.toString().trim().length;
    }, [props.noTrim, props.value]);


    // endregion


    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        if (props.multiline) { clazz.push('t-text-field__multiline'); }
        if (props.disabled) { clazz.push('t-text-field--disabled'); }
        if (props.readOnly) { clazz.push('t-text-field--read-only'); }
        if (props.dense) { clazz.push('t-text-field--dense'); }
        if (!validator.result) { clazz.push('t-text-field--failure'); }
        if (validator.result && validator.message) { clazz.push('t-text-field--success'); }
        if (hasFocus) { clazz.push('t-text-field--focused'); }

        return clazz.join(' ');
    }, [props.className, props.multiline, props.disabled, props.readOnly, props.dense, validator.result, validator.message, hasFocus]);

    const inputClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.disabled) { clazz.push('t-text-field__container__input--disabled'); }
        if (props.readOnly) { clazz.push('t-text-field__container__input--read-only'); }

        return clazz.join(' ');
    }, [props.disabled, props.readOnly]);

    const labelClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.required) { clazz.push('t-text-field__label--required'); }

        return clazz.join(' ');
    }, [props.required]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }
        if (props.width) { style = {...style, width: props.width}; }

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
                {
                    !props.multiline
                        ? <input id={inputUuid}
                                 ref={inputRef}
                                 type={inputType}
                                 tabIndex={(props.disabled || props.readOnly) ? -1 : 0}
                                 className={`t-text-field__container__input ${inputClass}`}
                                 disabled={props.disabled || props.readOnly}
                                 placeholder={(props.disabled || props.readOnly) ? '' : props.placeholder}
                                 value={props.value}
                                 onChange={onChangeInput}
                                 onKeyDown={onKeyDownInput}
                                 onFocus={onFocusInput}
                                 onBlur={onBlurInput}
                                 autoComplete={props.autoComplete}
                                 data-testid={'text-field-input'}
                        />
                        : <textarea
                            id={inputUuid}
                            ref={textareaRef}
                            tabIndex={(props.disabled || props.readOnly) ? -1 : 0}
                            className={`t-text-field__container__text-area ${inputClass}`}
                            disabled={props.disabled || props.readOnly}
                            placeholder={(props.disabled || props.readOnly) ? '' : props.placeholder}
                            value={props.value}
                            onChange={onChangeInput}
                            onKeyDown={onKeyDownInput}
                            onFocus={onFocusInput}
                            onBlur={onBlurInput}
                            autoComplete={props.autoComplete}
                            data-testid={'text-field-text-area'}
                            rows={props.rows}
                        />
                }

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
                               color={props.value ? themeToken.tGrayColor6 : themeToken.tGrayColor5}
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
                {
                    props.customAction && (
                        <div className={'t-text-field__container__custom-action-icon'}>{props.customAction}</div>
                    )
                }
                {
                    (props.counter && !props.disabled && !props.multiline && (hasFocus || validator.message)) && (
                        <div className={'t-text-field__container__counter'} data-testid={'text-field-counter'}>
                            <span className={'t-text-field__container__counter__counted'}>
                                {counterLength}
                            </span>
                            <span>{`/${props.counter}`}</span>
                        </div>
                    )
                }
            </div>

            <div className={'t-text-field__details'}>
                <div className={'t-text-field__details__message'} data-testid={'text-field-message'}>
                    {validator.message || props.hint}
                </div>
                {
                    (props.counter && !props.disabled && props.multiline && (hasFocus || validator.message)) && (
                        <div className={'t-text-field__details__text-area__counter'} data-testid={'text-area-counter'}>
                            <span className={'t-text-field__details__text-area__counter__counted'}>
                                {counterLength}
                            </span>
                            <span>{`/${props.counter}`}</span>
                        </div>
                    )
                }
            </div>

        </div>
    );
});


TTextField.displayName = 'TTextField';


export default memo(TTextField);
