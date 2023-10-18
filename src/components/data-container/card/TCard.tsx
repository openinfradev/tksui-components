import {CSSProperties, useMemo} from 'react';
import {TCardProps} from './TCard.interface';

const TCard = (props: TCardProps) => {

    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.clickable) { clazz.push('t-card--clickable'); }
        if (props.selected) { clazz.push('t-card--selected'); }

        return clazz.join(' ');
    }, [props.className, props.clickable, props.selected]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.width) { style = {...style, width: props.width}; }
        if (props.height) { style = {...style, height: props.height}; }
        if (props.style) { style = {...style, ...props.style}; }

        return style;
    }, [props.height, props.style, props.width]);

    // endregion

    return (
        <div className={`t-card ${rootClass}`} style={rootStyle} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

TCard.defaultProps = {
};

TCard.displayName = 'TCard';


export default TCard;
