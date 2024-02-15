import {CSSProperties, useContext, useId, useMemo} from 'react';
import TIcon from '~/icon/TIcon';
import TTooltip from '~/guide/tooltip/TTooltip';
import {TFormSectionItemProps} from '@/components';
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
        if (props.required) { clazz.push('t-form-section-item--required'); }

        return clazz.join(' ');
    }, [props.className, props.required]);

    const rootStyle = useMemo((): CSSProperties => {

        const style: CSSProperties = props.style ? props.style : {};
        style.width = `calc(100% / ${column} * ${props.span || 1})`;

        return style;
    }, [column, props.span, props.style]);

    const labelStyle = useMemo((): CSSProperties => {
        const style: CSSProperties = {marginBottom: props.labelMarginBottom};

        const labelWidthNum = Number(labelWidth.replace(/\D/g, ''));
        if (labelWidthNum === 0) {
            throw Error((`Error: Invalid labelWidth value '${labelWidth}.`));
        }
        if (labelWidthNum > 120) {
            throw Error((`Error: labelWidth cannot exceed ${labelWidth}px.`));
        }
        style.minWidth = labelWidth;

        return style;
    }, [labelWidth, props.labelMarginBottom]);

    const contentStyle = useMemo((): CSSProperties => {

        return props.contentStyle ? {...props.contentStyle} : {};
    }, [props.contentStyle]);

    // endregion

    return (
        <span className={`t-form-section-item ${rootClass}`}
              style={rootStyle} role={'group'}>
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
                                       small
                                       tooltipContent={props.information}
                                       tooltipId={tooltipId}
                                       clickable
                                >info</TIcon>
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
