'use client';

import type {CSSProperties} from 'react';
import {useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react';

import type {TTextFieldRef} from '@/components';
import {TChip, TTextField} from '@/components';
import useValidator from '../../../common/hook/UseValidator';

import type {TTextArrayFieldProps} from '~/input/text-array-field/TTextArrayField.interface';

const TTextArrayField = ({
    lazy = true,
    duplicateMessage = '이미 입력된 값입니다.',
    placeholder = '값을 입력하고 엔터를 눌러주세요.',
    onChange,
    ref,
    ...restProps
}: TTextArrayFieldProps) => {
    // region [Hooks]

    const props: TTextArrayFieldProps = {lazy, duplicateMessage, placeholder, onChange, ...restProps};

    const validator = useValidator(props.value, props.rules, props.successMessage);

    const [currentInput, setCurrentInput] = useState<string>('');

    const rootRef = useRef<HTMLDivElement>(null);
    const textFieldRef = useRef<TTextFieldRef>(null);

    useImperativeHandle(ref, () => ({
        validate() {
            return validator.validate();
        },
        clearValidation() {
            validator.clearValidation();
        },
        manualValidate(result: boolean, message?: string) {
            validator.manualValidate(result, message);
        },
        getValidateMessage(): string {
            return validator.message;
        },
        getValidateResult(): boolean {
            return validator.result;
        },
        scrollToComponent(options: ScrollIntoViewOptions = {behavior: 'smooth', block: 'center'}) {
            rootRef?.current?.scrollIntoView(options);
        },
    }));

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) {
            clazz.push(props.className);
        }
        if (!validator.result) {
            clazz.push('t-text-array-field--failure');
        }

        return clazz.join(' ');
    }, [props.className, validator.result]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) {
            style = {...props.style};
        }

        return style;
    }, [props.style]);

    // endregion

    // region [Privates]

    const isDuplicatedItem = useCallback(
        (item: string): boolean => {
            if (!props.duplicable) {
                return props.value.includes(item);
            }

            return false;
        },
        [props.duplicable, props.value]
    );

    // endregion

    // region [Events]

    const onKeydownEnter = useCallback(() => {
        const candidateItem = currentInput.trim();

        if (isDuplicatedItem(candidateItem)) {
            validator.manualValidate(false, props.duplicateMessage);
            return;
        }

        if (candidateItem.length > 0) {
            onChange([...props.value, candidateItem]);
            setCurrentInput('');
        }
    }, [currentInput, isDuplicatedItem, onChange, props.duplicateMessage, props.value, validator]);

    const onRemoveItem = useCallback(
        (targetIndex: number) => {
            onChange(props.value.filter((item, index) => index !== targetIndex));
        },
        [onChange, props.value]
    );

    const onChangeText = useCallback(
        (value: string) => {
            validator.clearValidation();
            setCurrentInput(value);
        },
        [validator]
    );

    const onClickInputContainer = useCallback(() => {
        textFieldRef.current?.focus();
    }, []);

    // endregion

    return (
        <div
            className={`t-text-array-field ${rootClass}`}
            style={rootStyle}
            id={props.id}
            data-testid={'text-field-root'}
            ref={rootRef}
        >
            <span className={'t-text-array-field__input-container'} onClick={onClickInputContainer}>
                {props.value?.map((item, index) => {
                    return (
                        <TChip key={item + index} onRemove={() => onRemoveItem(index)}>
                            {item}
                        </TChip>
                    );
                })}
                <TTextField
                    value={currentInput}
                    onChange={onChangeText}
                    onKeyDownEnter={onKeydownEnter}
                    dense
                    placeholder={props.value.length === 0 ? props.placeholder : null}
                    ref={textFieldRef}
                />
            </span>

            <div className={'t-text-array-field__message'}>{validator.message}</div>
        </div>
    );
};

TTextArrayField.displayName = 'TTextArrayField';

export default TTextArrayField;
