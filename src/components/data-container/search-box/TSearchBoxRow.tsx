import {CSSProperties, useMemo} from 'react';
import {TSearchBoxRowProps} from '@/components';

function TSearchBoxRow(props: TSearchBoxRowProps) {

    // region [Styles]


    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle: CSSProperties = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);

    // endregion


    // region [Templates]

    return (
        <div className={`t-search-box-row ${rootClass}`} style={rootStyle}>
            {props.children}
        </div>
    );

    // endregion


}

export default TSearchBoxRow;
