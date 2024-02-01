import {CSSProperties, forwardRef, KeyboardEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react';
import uniqueId from 'lodash/uniqueId';
import useValidator from '@/common/hook/UseValidator';
import {TTextAreaProps, TTextAreaRef} from './TTextArea.interface';

const TTextArea = forwardRef((props: TTextAreaProps, ref: Ref<TTextAreaRef>) => {

    // region [Hooks]

    const [hasFocus, setHasFocus] = useState<boolean>(false);

    const validator = useValidator(props.value, props.rules, props.successMessage);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const textAreaUuid = uniqueId();

    const messageUuid = uniqueId();

    const counterUuid = uniqueId();

    useImperativeHandle(ref, () => ({
        focus() {
            textareaRef?.current?.focus();
        },
        validate() {
            return validator.validate();
        },
    }));

    // endregion


    // region [Events]

    const onChange = useCallback((event): void => {

        if (props.counter) {
            if (event.target.value.length > props.counter) {
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
        if (!props.lazy) { validator.validate(); }

        setHasFocus(false);
    }, [props.lazy, validator]);


    const onKeyDown = useCallback((event: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (event.key === 'Enter' && props.onKeyDownEnter) {
            props.onKeyDownEnter(event);
        }

        if (props.onKeyDown) {
            props.onKeyDown(event);
        }
    }, [props]);


    // endregion


    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);

        if (props.disabled) clazz.push('t-text-area--disabled');
        if (!validator.result) clazz.push('t-text-area--failure');
        if (hasFocus) { clazz.push('t-text-area--focused'); }
        if (validator.result && validator.message) clazz.push('t-text-area--success');

        clazz.push(`t-text-area--${props.type}`);

        return clazz.join(' ');
    }, [props.className, props.disabled, props.type, validator.result, validator.message, hasFocus]);

    const labelClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.required) { clazz.push('t-text-area__label--required'); }

        return clazz.join(' ');
    }, [props.required]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};
        if (props.width) style = {...style, width: props.width};

        return style;
    }, [props.style, props.width]);


    const textAreaClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.disabled) clazz.push('t-text-area__container__input--disabled');

        return clazz.join(' ');
    }, [props.disabled]);

    const inputPlaceholder = useMemo((): string => {
        if (props.label && !hasFocus) { return ''; }
        if (props.disabled) { return ''; }

        return props.placeholder;

    }, [props.label, hasFocus, props.disabled, props.placeholder]);

    // endregion


    return (
        <div className={`t-text-area ${rootClass}`}
             style={rootStyle}
             id={props.id}
             data-testid={'t-text-area-root'}>
            {
                props.label && (
                    <label className={`t-text-area__label ${labelClass}`} htmlFor={textAreaUuid}>
                        {
                            props.label
                        }
                        {
                            props.counter && (
                                <span className='t-text-area__label--hidden'>{`${props.counter}자 이내`}</span>
                            )
                        }
                        {
                            props.required && (
                                <span className='t-text-area__label--hidden'>mandatory</span>
                            )
                        }
                    </label>
                )
            }
            <div className={'t-text-area__container'}>
                <textarea ref={textareaRef}
                          id={textAreaUuid}
                          aria-describedby={`${messageUuid} ${counterUuid}`}
                          tabIndex={props.disabled ? -1 : 0}
                          className={`t-text-area__container__input ${textAreaClass}`}
                          disabled={props.disabled}
                          placeholder={inputPlaceholder}
                          value={props.value}
                          rows={props.rows}
                          onChange={onChange}
                          onKeyDown={onKeyDown}
                          onBlur={onBlur}
                          onFocus={onFocus}
                />
            </div>
            <div className={'t-text-area__details'}>
                <div className={'t-text-area__details__message'}
                     id={messageUuid}>
                    {
                        validator.message
                        && `${validator.message}`
                    }
                </div>
                <div className={'t-text-area__details__counter'}
                     aria-live={props.value?.length ? 'polite' : 'off'}
                     id={counterUuid}>
                    {
                        props.counter && !props.disabled
                        && `${props.value?.length} / ${props.counter}`
                    }
                </div>
            </div>
        </div>
    );

});

TTextArea.defaultProps = {
    type: 'outline',
    rows: 5,
    lazy: true,
};

TTextArea.displayName = 'TTextArea';


export default TTextArea;
