import {CSSProperties, forwardRef, Ref, useImperativeHandle, useRef} from 'react';
import useValidator from '~/tks/component/common/hook/UseValidator';
import {TCheckboxGroupProps, TCheckboxGroupRef, TCheckboxGroupValue} from '~/tks/component/input/checkbox-group/TCheckboxGroup.interface';
import TCheckbox from '~/tks/component/input/checkbox/TCheckbox';
import {TCheckboxValue} from '~/tks/component/input/checkbox/TCheckbox.interface';


const TCheckboxGroup = forwardRef((props: TCheckboxGroupProps, ref: Ref<TCheckboxGroupRef>) => {
    
    // region [Hooks]
    
    const validator = useValidator(props.value, props.rules, props.successMessage);
    const rootRef = useRef<HTMLDivElement>(null);
    
    
    useImperativeHandle(ref, () => ({
        validate() { return validator.validate(); },
    }));
    
    // endregion
    
    
    // region [Styles]
    
    function getRootClass(): string {
        const clazz: string[] = [];
        
        if (props.className) clazz.push(props.className);
        if (props.disabled) clazz.push('t-checkbox-group--disabled');
        if (!validator.result) clazz.push('t-checkbox-group--failure');
        if (validator.result && validator.message) clazz.push('t-checkbox-group--success');
        
        return clazz.join(' ');
    }
    
    function getRootStyle(): CSSProperties {
        let style: CSSProperties = {};
        
        if (props.style) style = {...props.style};
        
        return style;
    }
    
    // endregion
    
    
    // region [Events]
    function onChangeChildren(value, positiveValue): void {
        
        if (value === null) {
            removeValue(positiveValue);
        } else {
            addValue(value);
        }
    }
    
    function onFocus(): void {
        if (props.rules) {
            validator.clearValidation();
        }
    }
    
    function onBlur(event): void {
        const next = event.relatedTarget;
        
        if (props.rules && !props.lazy && !rootRef.current.contains(next)) {
            validator.validate();
        }
    }
    
    // endregion
    
    
    // region [ETC]
    
    function removeValue(value: TCheckboxValue) {
        
        
        emitChange(props.value.filter((v) => v !== value));
        
    }
    
    function addValue(value: TCheckboxValue) {
        emitChange([...props.value, value]);
    }
    
    function emitChange(value: TCheckboxGroupValue): void {
        props.onChange(value);
    }
    
    
    // endregion
    
    
    // region [Templates]
    
    return (
        <div className={`t-checkbox-group ${getRootClass()}`}
             style={getRootStyle()}
             ref={rootRef}
             tabIndex={props.disabled ? -1 : 0}
             onFocus={onFocus}
             onBlur={onBlur}
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
