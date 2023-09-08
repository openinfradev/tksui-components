import {CSSProperties, useContext, useMemo} from 'react';
import {TFormRowProps} from './TFormBox.interface';
import FormContext from './TFormSectionContext';

function TFormRow(props: TFormRowProps) {

    const {gridType} = useContext(FormContext);

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (gridType.value) { style = {flex: `0 0 ${gridType.rowHeight}`}; }

        if (props.style) { style = {...props.style}; }


        return style;
    }, [gridType.rowHeight, gridType.value, props.style]);


    // endregion


    // region [Templates]

    return (
        <div className={`t-form-row ${rootClass}`} style={rootStyle}>
            {props.children}
        </div>
    );

    // endregion


}

export default TFormRow;
