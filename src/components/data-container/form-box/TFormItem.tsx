import {CSSProperties, useContext, useId, useMemo} from 'react';
import {TFormItemProps} from './TFormBox.interface';
import FormContext from './TFormSectionContext';
import {TIcon} from '~/icon';
import TTooltip from '~/guide/tooltip/TTooltip';

function TFormItem(props: TFormItemProps) {

    // region [Hooks]

    const {column, gridType} = useContext(FormContext);
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
        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }
        style.width = `calc(100% / ${column} * ${props.span || 1})`;

        return style;
    }, [column, props.span, props.style]);

    const labelStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {marginBottom: props.labelMarginBottom};

        if (gridType.value) {
            style = {...style, flex: `0 0 ${gridType.labelWidth}`};
        }

        return style;
    }, [gridType.labelWidth, gridType.value, props.labelMarginBottom]);

    const contentStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.contentStyle) { style = {...props.contentStyle}; }

        return style;
    }, [props.contentStyle]);

    // endregion


    // region [Templates]

    return (
        <span className={`t-form-item ${rootClass}`}
              style={rootStyle}
        >
            {
                props.label && (
                    <label className={'t-form-item__label'}
                           style={labelStyle}>
                        <span className={'t-form-item__label__text'}>
                            {props.label}
                        </span>
                        {
                            (props.information) && (
                                <TIcon className={'t-form-item__label__info-icon'}
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
            <div className={'t-form-item__content'}
                 style={contentStyle}>
                {props.children}
            </div>

            {
                props.information && (
                    <TTooltip id={tooltipId} openOnClick/>
                )
            }
        </span>
    );

    // endregion


}

TFormItem.defaultProps = {
    labelBottomMargin: '8px',
};

export default TFormItem;
