import {CSSProperties, forwardRef, Ref, useImperativeHandle, useRef} from 'react';
import useValidator from '@/common/hook/UseValidator';


import TRadio from '../radio/TRadio';
import {TRadioGroupProps, TRadioGroupRef, TRadioGroupValue} from './TRadioGroup.interface';
import {TRadioValue} from '../radio/TRadio.interface';


const TRadioGroup = forwardRef((props: TRadioGroupProps, ref: Ref<TRadioGroupRef>) => {
    
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
        if (props.disabled) clazz.push('t-radio-group--disabled');
        if (!validator.result) clazz.push('t-radio-group--failure');
        if (validator.result && validator.message) clazz.push('t-radio-group--success');
        
        return clazz.join(' ');
    }
    
    function getRootStyle(): CSSProperties {
        let style: CSSProperties = {};
        
        if (props.style) style = {...props.style};
        
        return style;
    }
    
    // endregion
    
    
    // region [Events]
    
    function onSelectRadio(value: TRadioValue): void {
        
        emitChange(value);
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
    
    
    function emitChange(value: TRadioGroupValue): void {
        props.onChange(value);
    }
    
    
    // endregion
    
    
    // region [Templates]
    
    return (
        <div className={`t-radio-group ${getRootClass()}`}
             style={getRootStyle()}
             ref={rootRef}
             tabIndex={props.disabled ? -1 : 0}
             onFocus={onFocus}
             onBlur={onBlur}>
            <div className={'t-radio-group__container'}>
                {
                    props.items.map((item, index) => (
                        <TRadio key={index}
                                positiveValue={item[props.valueKey]}
                                selected={props.value === item[props.valueKey]}
                                disabled={props.disabled || item.disabled}
                                onSelect={onSelectRadio}
                        >
                            
                            {props.labelTemplate ? props.labelTemplate(item) : item[props.textKey]}
                        </TRadio>
                    ))
                }
            </div>
            {
                props.rules
                && <div className={'t-radio-group__message'}>{validator.message}</div>
            }
        </div>
    );
    
    // endregion
    
    
});

TRadioGroup.defaultProps = {
    textKey: 'text',
    valueKey: 'value',
    lazy: true,
};

TRadioGroup.displayName = 'TRadioGroup';


export default TRadioGroup;
