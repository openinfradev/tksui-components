import {CSSProperties, useContext, useMemo} from 'react';
import {TFormItemProps} from '~/tks/component/data-container/form-box/TFormBox.interface';
import TSearchBoxContext from '~/tks/component/data-container/search-box/TSearchBoxContext';

function TSearchBoxItem(props: TFormItemProps) {

    // region [Hooks]

    const {column, labelWidth} = useContext(TSearchBoxContext);


    // endregion


    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.required) { clazz.push('t-search-box-item--required'); }

        return clazz.join(' ');
    }, [props.className, props.required]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        style.width = `calc(100% / ${column} * ${props.span || 1})`;
        if (props.style) { style = {...props.style}; }

        return style;
    }, [column, props.span, props.style]);


    const labelStyle = useMemo((): CSSProperties => {
        const style: CSSProperties = {};

        style.flex = `0 0 ${labelWidth}`;

        return style;
    }, [labelWidth]);

    // endregion


    // region [Templates]

    return (
        <span className={`t-search-box-item ${rootClass}`}
              role={'group'}
              style={rootStyle}>
            {
                props.label && (
                    <label className={'t-search-box-item__label'}
                           style={labelStyle}>
                        {props.label}
                    </label>
                )
            }
            <div className={'t-search-box-item__content'}> {props.children} </div>
        </span>
    );

    // endregion


}

export default TSearchBoxItem;
