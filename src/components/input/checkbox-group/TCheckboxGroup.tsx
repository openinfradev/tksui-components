import {forwardRef, Ref, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import useValidator from '@/common/hook/UseValidator';
import {TCheckboxGroupProps, TCheckboxGroupRef, TCheckboxGroupValue} from './TCheckboxGroup.interface';
import TCheckbox from '../checkbox/TCheckbox';
import {TCheckboxValue} from '../checkbox/TCheckbox.interface';


const TCheckboxGroup = forwardRef((props: TCheckboxGroupProps, ref: Ref<TCheckboxGroupRef>) => {

    // region [Hooks]

    const validator = useValidator(props.value, props.rules, props.successMessage);
    const rootRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        validate() { return validator.validate(); },
    }));

    // endregion


    // region [Styles]

    const rootClass = useMemo(() => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);
        if (props.disabled) clazz.push('t-checkbox-group--disabled');
        if (!validator.result) clazz.push('t-checkbox-group--failure');
        if (validator.result && validator.message) clazz.push('t-checkbox-group--success');

        return clazz.join(' ');
    }, [props.className, props.disabled, validator]);

    const rootStyle = useMemo(() => {
        return props.style || {};
    }, [props.style]);

    // endregion


    // region [Events]

    const onChangeChildren = useCallback((value: string, positiveValue: boolean) => {
        if (value === null) {
            removeValue(positiveValue);
        } else {
            addValue(value);
        }
    }, []);

    const onFocus = useCallback(() => {
        if (props.rules) {
            validator.clearValidation();
        }
    }, [props.rules]);

    const onBlur = useCallback((event) => {
        const next = event.relatedTarget;

        if (props.rules && !props.lazy && !rootRef.current.contains(next)) {
            validator.validate();
        }
    }, [props.rules, props.lazy, validator]);

    // endregion


    // region [ETC]

    const emitChange = useCallback((value: TCheckboxGroupValue) => {
        props.onChange(value);
    }, [props.onChange]);

    const removeValue = useCallback((value: TCheckboxValue) => {
        emitChange(props.value.filter((v) => v !== value));
    }, [emitChange]);

    const addValue = useCallback((value: TCheckboxValue) => {
        emitChange([...props.value, value]);
    }, [emitChange]);

    // endregion


    // region [Templates]

    return (
        <div className={`t-checkbox-group ${rootClass}`}
             style={rootStyle}
             ref={rootRef}
             tabIndex={props.disabled ? -1 : 0}
             onFocus={onFocus}
             onBlur={onBlur}
             id={props.id}
             data-testid={'t-checkbox-group-root'}
        >
            <div className={'t-checkbox-group__container'}>
                {
                    props.items.map((item, index) => (
                        <TCheckbox key={index}
                                   positiveValue={item[props.valueKey]}
                                   negativeValue={null}
                                   value={props.value.some((v) => v === item[props.valueKey]) ? item[props.valueKey] : null}
                                   onChange={onChangeChildren}
                                   disabled={props.disabled || item.disabled}>
                            {props.labelTemplate ? props.labelTemplate(item) : item[props.textKey]}
                        </TCheckbox>
                    ))
                }
            </div>
            {
                props.rules
                && <div className={'t-checkbox-group__message'}>{validator.message}</div>
            }
        </div>
    );

    // endregion


});

TCheckboxGroup.defaultProps = {
    textKey: 'text',
    valueKey: 'value',
    lazy: true,
};

TCheckboxGroup.displayName = 'TCheckboxGroup';


export default TCheckboxGroup;
