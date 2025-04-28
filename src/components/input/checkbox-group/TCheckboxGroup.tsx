'use client';

import type {FocusEvent, Ref} from 'react';
import {forwardRef, useCallback, useImperativeHandle, useMemo, useRef} from 'react';

import useValidator from '@/common/hook/UseValidator';
import type {TCheckboxGroupProps, TCheckboxGroupRef, TCheckboxGroupValue, TCheckboxValue} from '@/components';
import TCheckbox from '../checkbox/TCheckbox';

const TCheckboxGroup = forwardRef(
    (
        {textKey = 'text', valueKey = 'value', lazy = true, onChange, ...restProps}: TCheckboxGroupProps,
        ref: Ref<TCheckboxGroupRef>
    ) => {
        // region [Hooks]

        const props: TCheckboxGroupProps = {textKey, valueKey, lazy, onChange, ...restProps};

        const validator = useValidator(props.value, props.rules, props.successMessage);
        const rootRef = useRef<HTMLDivElement>(null);

        useImperativeHandle(ref, () => ({
            validate() {
                return validator.validate();
            },
            scrollToComponent(options: ScrollIntoViewOptions = {behavior: 'smooth', block: 'center'}) {
                rootRef?.current?.scrollIntoView(options);
            },
        }));

        // endregion

        // region [Styles]Zz

        const rootClass = useMemo(() => {
            const clazz: string[] = [];

            if (props.className) {
                clazz.push(props.className);
            }
            if (props.disabled) {
                clazz.push('t-checkbox-group--disabled');
            }
            if (props.readOnly) {
                clazz.push('t-checkbox-group--read-only');
            }
            if (!validator.result) {
                clazz.push('t-checkbox-group--failure');
            }
            if (validator.result && validator.message) {
                clazz.push('t-checkbox-group--success');
            }

            return clazz.join(' ');
        }, [props.className, props.disabled, props.readOnly, validator.message, validator.result]);

        const rootStyle = useMemo(() => {
            return props.style || {};
        }, [props.style]);

        // endregion

        // region [Privates]

        const emitChange = useCallback(
            (value: TCheckboxGroupValue) => {
                onChange(value);
            },
            [onChange]
        );

        const removeValue = useCallback(
            (value: TCheckboxValue) => {
                emitChange(props.value.filter((v) => v !== value));
            },
            [emitChange, props.value]
        );

        const addValue = useCallback(
            (value: TCheckboxValue) => {
                emitChange([...props.value, value]);
            },
            [emitChange, props.value]
        );

        // endregion

        // region [Events]

        const onChangeChildren = useCallback(
            (value: TCheckboxValue, positiveValue: TCheckboxValue) => {
                if (value === null) {
                    removeValue(positiveValue);
                } else {
                    addValue(value);
                }
            },
            [addValue, removeValue]
        );

        const onFocus = useCallback(() => {
            if (props.rules) {
                validator.clearValidation();
            }
        }, [props.rules, validator]);

        const onBlur = useCallback(
            (event: FocusEvent) => {
                const next = event.relatedTarget;

                if (props.rules && !props.lazy && !rootRef.current.contains(next)) {
                    validator.validate();
                }
            },
            [props.rules, props.lazy, validator]
        );

        // endregion

        // region [Templates]

        return (
            <div
                className={`t-checkbox-group ${rootClass}`}
                style={rootStyle}
                ref={rootRef}
                tabIndex={props.disabled ? -1 : 0}
                onFocus={onFocus}
                onBlur={onBlur}
                id={props.id}
                data-testid={'t-checkbox-group-root'}
            >
                <div className={'t-checkbox-group__container'}>
                    {props.items.map((item, index) => (
                        <TCheckbox
                            key={index}
                            positiveValue={item[props.valueKey]}
                            negativeValue={null}
                            value={props.value.some((v) => v === item[props.valueKey]) ? item[props.valueKey] : null}
                            onChange={onChangeChildren}
                            disabled={props.disabled || item.disabled}
                            readOnly={props.readOnly || item.readOnly}
                        >
                            {props.labelTemplate ? props.labelTemplate(item) : item[props.textKey]}
                        </TCheckbox>
                    ))}
                </div>
                {props.rules && <div className={'t-checkbox-group__message'}>{validator.message}</div>}
            </div>
        );

        // endregion
    }
);

TCheckboxGroup.displayName = 'TCheckboxGroup';

export default TCheckboxGroup;
