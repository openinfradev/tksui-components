import {CSSProperties, useMemo} from 'react';
import {TFormSectionRowProps} from '@/components';


const TFormSectionRow = (props: TFormSectionRowProps) => {

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle: CSSProperties = useMemo(() => {
        // let style: CSSProperties = {};
        //
        // if (props.style) { style = {...props.style}; }
        //
        // return style;
        return props.style ? {...props.style} : {};
    }, [props.style]);

    // endregion


    return (
        <div className={`t-form-section-row ${rootClass}`} style={rootStyle}>
            {props.children}
        </div>
    );

};
export default TFormSectionRow;
