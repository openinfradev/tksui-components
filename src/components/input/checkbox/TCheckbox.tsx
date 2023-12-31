import {CSSProperties, forwardRef, KeyboardEvent, ReactElement, Ref, useEffect, useImperativeHandle, useRef, useState} from 'react';
import TIcon from '../../icon/TIcon';
import {TCheckboxProps, TCheckboxRef} from './TCheckbox.interface';
import useValidator from '@/common/hook/UseValidator';


const TCheckbox = forwardRef((props: TCheckboxProps, ref: Ref<TCheckboxRef>) => {

    // region [Hooks]

    const validator = useValidator(props.value, props.rules, props.successMessage);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(modifyStatus, [props.value, props.indeterminate, props.checked, props.positiveValue]);
    const [status, setStatus] = useState('uncheck');

    useImperativeHandle(ref, () => ({
        focus() { rootRef?.current?.focus(); },
        validate() { return validator.validate(); },
    }));

    // endregion


    // region [Styles]

    function getRootClass(): string {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);
        if (props.disabled) clazz.push('t-checkbox--disabled');
        if (!validator.result) clazz.push('t-checkbox--failure');
        if (validator.result && validator.message) clazz.push('t-checkbox--success');

        return clazz.join(' ');
    }

    function getRootStyle(): CSSProperties {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }

    // endregion


    // region [Events]

    function onClickCheckbox(): void {
        emitChange();
    }

    function onBlur(): void {
        if (!props.lazy) {
            validator.validate();
        }
    }

    function onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            emitChange();
        }
    }

    // endregion


    // region [ETC]

    function emitChange(): void {
        if (typeof props.onChange !== 'function') {
            return;
        }

        if (status === 'check') {
            props.onChange(props.negativeValue, props.positiveValue);
        } else {
            props.onChange(props.positiveValue);
        }

    }

    function modifyStatus(): void {
        if (props.checked === true) {
            setStatus('check');
        } else if (props.checked === false) {
            setStatus('uncheck');
        } else if (props.indeterminate) {
            setStatus('indeterminate');
        } else if (props.value === props.positiveValue) {
            setStatus('check');
        } else {
            setStatus('uncheck');
        }
    }

    // endregion


    // region [Templates]

    function iconTemplate(): ReactElement {

        let iconType: string;
        if (status === 'indeterminate') {
            iconType = 't_check_intermediate';
        } else if (status === 'check') {
            iconType = 't_check_on';
        } else if (status === 'uncheck' && props.disabled) {
            iconType = 't_check_disabled_off';
        } else if (status === 'uncheck' && !props.disabled) {
            iconType = 't_check_off';
        } else {
            throw Error('Invalid status');
        }

        return (
            <TIcon small type={'filled'} className={`t-checkbox__icon t-checkbox__icon--${status}`}>{iconType}</TIcon>
        );
    }

    return (
        <div ref={rootRef}
             className={`t-checkbox ${getRootClass()}`}
             style={getRootStyle()}>

            {/* Main */}
            <div className={'t-checkbox__container'}
                 tabIndex={props.disabled ? -1 : 0}
                 onFocus={validator.clearValidation}
                 onBlur={onBlur}
                 onKeyDown={onKeyDown}
                 onClick={onClickCheckbox}>
                {iconTemplate()}
                <span className={'t-checkbox__label'}>{props.children}</span>
            </div>

            {/* Validation message, rule 이 설정된 경우에만 그려지게 합니다 */}
            {
                props.rules
                && <div className={'t-checkbox__message'}>
                    {validator.message}
                </div>
            }
        </div>
    );

    // endregion


});

TCheckbox.defaultProps = {
    positiveValue: true,
    negativeValue: false,
    checked: null,
    lazy: true,
};

TCheckbox.displayName = 'TCheckbox';


export default TCheckbox;
