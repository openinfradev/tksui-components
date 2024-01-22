import {
    CSSProperties,
    forwardRef,
    KeyboardEvent,
    ReactElement,
    Ref,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import TIcon from '../../icon/TIcon';
import {TCheckboxProps, TCheckboxRef} from './TCheckbox.interface';
import useValidator from '@/common/hook/UseValidator';


const TCheckbox = forwardRef((props: TCheckboxProps, ref: Ref<TCheckboxRef>) => {

    // region [Hooks]

    const validator = useValidator(props.value, props.rules, props.successMessage);
    const rootRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(modifyStatus, [props.value, props.indeterminate, props.checked, props.positiveValue]);
    const [status, setStatus] = useState('uncheck');

    useImperativeHandle(ref, () => ({
        focus() { containerRef?.current?.focus(); },
        validate() { return validator.validate(); },
    }));

    // endregion

    // region [Styles]

    const getRootClass = useCallback(() => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);
        if (props.disabled) clazz.push('t-checkbox--disabled');
        if (!validator.result) clazz.push('t-checkbox--failure');
        if (validator.result && validator.message) clazz.push('t-checkbox--success');

        return clazz.join(' ');
    }, [props.className, props.disabled, validator.result, validator.message]);

    const getRootStyle = useCallback(() => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);

    // endregion


    // region [Privates]

    const emitChange = useCallback(() => {
        if (typeof props.onChange !== 'function') {
            return;
        }

        if (status === 'check') {
            props.onChange(props.negativeValue, props.positiveValue);
        } else {
            props.onChange(props.positiveValue);
        }

    }, [status, props.onChange]);

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

    // region [Events]

    const onClickCheckbox = useCallback(() => {
        emitChange();
    }, [emitChange]);

    const onBlur = useCallback(() => {
        if (!props.lazy) {
            validator.validate();
        }
    }, [props.lazy, validator]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            emitChange();
        }
    }, [emitChange]);

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
            <TIcon small fill className={`t-checkbox__icon t-checkbox__icon--${status}`}>{iconType}</TIcon>
        );
    }

    return (
        <div ref={rootRef}
             className={`t-checkbox ${getRootClass()}`}
             id={props.id}
             data-testid={'t-checkbox-root'}
             style={getRootStyle()}>

            {/* Main */}
            <div ref={containerRef}
                 className={'t-checkbox__container'}
                 tabIndex={props.disabled ? -1 : 0}
                 onFocus={validator.clearValidation}
                 onBlur={onBlur}
                 onKeyDown={onKeyDown}
                 onClick={onClickCheckbox}
                 data-testid={'t-checkbox-container'}>
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
