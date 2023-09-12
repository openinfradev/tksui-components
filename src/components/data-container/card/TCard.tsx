import {CSSProperties, useMemo} from 'react';
import {TCardProps} from './TCard.interface';

const TCard = (props: TCardProps) => {

    // region [Hooks]


    // region [Privates]


    // endregion


    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.width) { style = {...style, width: props.width}; }
        if (props.height) { style = {...style, height: props.height}; }
        if (props.style) { style = {...style, ...props.style}; }

        return style;
    }, [props.height, props.style, props.width]);

    // endregion

    return (
        <div className={`t-card ${rootClass}`} style={rootStyle}>
            {props.children}
        </div>
    );
};

TCard.defaultProps = {
};

TCard.displayName = 'TCard';


export default TCard;
