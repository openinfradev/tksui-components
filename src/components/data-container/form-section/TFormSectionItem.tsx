import {CSSProperties, useContext, useId, useMemo} from 'react';
import {TIcon, TTooltip, TFormSectionItemProps} from '../../index';
import FormContext from './TFormSectionContext';

const TFormSectionItem = (props: TFormSectionItemProps) => {

    // region [Hooks]

    const {column, labelWidth} = useContext(FormContext);
    const tooltipId = useId();

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.required) { clazz.push('t-form-item--required'); }

        return clazz.join(' ');
    }, [props.className, props.required]);

    const rootStyle = useMemo((): CSSProperties => {

        const style: CSSProperties = props.style ? props.style : {};
        style.width = `calc(100% / ${column} * ${props.span || 1})`;

        return style;
    }, [column, props.span, props.style]);

    const labelStyle = useMemo((): CSSProperties => {
        const style: CSSProperties = {};

        style.flex = `0 0 ${labelWidth}`;

        return style;
    }, [labelWidth]);

    const contentStyle = useMemo((): CSSProperties => {

        return props.contentStyle ? {...props.contentStyle} : {};
    }, [props.contentStyle]);

    // endregion

    return (
        <span className={`t-form-section-item ${rootClass}`}
              style={rootStyle}
        >
            {
                props.label && (
                    <label className={'t-form-section-item__label'}
                           style={labelStyle}>
                        <span className={'t-form-section-item__label__text'}>
                            {props.label}
                        </span>
                        {
                            (props.information) && (
                                <TIcon className={'t-form-section-item__label__info-icon'}
                                       xsmall
                                       tooltipContent={props.information}
                                       tooltipId={tooltipId}
                                       clickable
                                >t_information</TIcon>
                            )
                        }
                    </label>
                )
            }
            <div className={'t-form-section-item__content'} style={contentStyle}>{props.children} </div>

            {props.information && (<TTooltip id={tooltipId} openOnClick/>)}
        </span>
    );

};

export default TFormSectionItem;
