import {CSSProperties, useContext, useMemo} from 'react';
import {TFormItemProps} from './TFormBox.interface';
import FormContext from './TFormSectionContext';

function TFormItem(props: TFormItemProps) {

    // region [Hooks]

    const {column, gridType} = useContext(FormContext);


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
                        {props.label}
                    </label>
                )
            }
            <div className={'t-form-item__content'}
                 style={contentStyle}>
                {props.children}
            </div>
        </span>
    );

    // endregion


}

TFormItem.defaultProps = {
    labelBottomMargin: '8px',
};

export default TFormItem;
