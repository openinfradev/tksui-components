import {CSSProperties, forwardRef, Ref, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {TDatePickerProps, TDatePickerRef} from './TDatePicker.interface';
import useValidator from '@/common/hook/UseValidator';
import {TTextField} from '../text-field';
import {TIcon} from '~/icon';
import TDropHolder from '~/data-container/drop-holder/TDropHolder';
import TDaySelector from '~/input/date-picker/selector/TDaySelector';


const TDatePicker = forwardRef((props: TDatePickerProps, ref: Ref<TDatePickerRef>) => {

    const today = new Date();

    // region [Hooks]

    const validator = useValidator(props.value, props.rules, props.successMessage);
    const rootRef = useRef<HTMLDivElement>(null);


    const [status, setStatus] = useState('uncheck');

    useImperativeHandle(ref, () => ({
        focus() { rootRef?.current?.focus(); },
        validate() { return validator.validate(); },
    }));

    // endregion


    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.disabled) { clazz.push('t-date-picker--disabled'); }
        if (props.readOnly) { clazz.push('t-date-picker--read-only'); }

        return clazz.join(' ');
    }, [props.className, props.disabled, props.readOnly]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);


    // endregion


    // region [Events]
    // endregion


    // region [ETC]
    // endregion


    // region [Templates]

    return (
        <div ref={rootRef}
             className={`t-date-picker ${rootClass}`}
             style={rootStyle}>

            <TTextField value={props.value} onChange={props.onChange} width={'156px'} />
            <TDropHolder customItem={
                <div onClick={(e) => { e.stopPropagation(); }}>hello</div>
            }>
                <TIcon small>calendar_month</TIcon>
            </TDropHolder>

            <TDaySelector />
        </div>
    );

    // endregion


});

TDatePicker.defaultProps = {
};

TDatePicker.displayName = 'TDatePicker';


export default TDatePicker;
