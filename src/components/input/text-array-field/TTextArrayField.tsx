import {CSSProperties, forwardRef, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {TChip, TTextField, TTextFieldRef} from '@/components';
import {TTextArrayFieldProps, TTextArrayFieldRef} from '~/input/text-array-field/TTextArrayField.interface';
import useValidator from '../../../common/hook/UseValidator';


const TTextArrayField = forwardRef((props: TTextArrayFieldProps, ref: Ref<TTextArrayFieldRef>) => {


    // region [Hooks]

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

        if (props.className) { clazz.push(props.className); }
        if (!validator.result) { clazz.push('t-text-array-field--failure'); }

        return clazz.join(' ');
    }, [props.className, validator.result]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }

        return style;
    }, [props.style]);

    // endregion


    // region [Privates]

    const isDuplicatedItem = useCallback((item: string): boolean => {

        if (!props.duplicable) {
            return props.value.includes(item);
        }

        return false;
    }, [props.duplicable, props.value]);


    // endregion


    // region [Events]

    const onKeydownEnter = useCallback((e) => {

        const candidateItem = currentInput.trim();

        if (isDuplicatedItem(candidateItem)) {
            validator.manualValidate(false, props.duplicateMessage);
            return;
        }

        if (candidateItem.length > 0) {
            props.onChange([...props.value, candidateItem]);
            setCurrentInput('');
        }
    }, [currentInput, isDuplicatedItem, props, validator]);

    const onRemoveItem = useCallback((targetIndex: number) => {

        props.onChange(
            props.value.filter((item, index) => index !== targetIndex),
        );
    }, [props]);

    const onChangeText = useCallback((value: string) => {
        validator.clearValidation();
        setCurrentInput(value);
    }, [validator]);

    const onfocusText = useCallback(() => {

        validator.clearValidation();
    }, [validator]);

    const onClickInputContainer = useCallback(() => {

        textFieldRef.current?.focus();
    }, []);


    // endregion

    return (
        <div className={`t-text-array-field ${rootClass}`} style={rootStyle} id={props.id} data-testid={'text-field-root'} ref={rootRef}>

            <span className={'t-text-array-field__input-container'} onClick={onClickInputContainer}>
                {
                    props.value?.map((item, index) => {
                        return (
                            <TChip key={item + index}
                                   onRemove={() => onRemoveItem(index)}
                            >{item}</TChip>
                        );
                    })
                }
                <TTextField value={currentInput}
                            // onFocus={onfocusText}
                            onChange={onChangeText}
                            onKeyDownEnter={onKeydownEnter}
                            dense
                            ref={textFieldRef}
                />
            </span>


            <div className={'t-text-array-field__message'}>
                {validator.message}
            </div>


        </div>
    );
});

TTextArrayField.defaultProps = {
    lazy: true,
    duplicateMessage: '이미 입력된 값입니다.',
};

TTextArrayField.displayName = 'TTextArrayField';


export default TTextArrayField;
