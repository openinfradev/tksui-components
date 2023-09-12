import {CSSProperties, useMemo} from 'react';
import {TCardProps} from './TCard.interface';

const TCard = (props: TCardProps) => {

    // region [Hooks]

    const {className, style} = props;


    // region [Privates]


    // endregion


    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) { clazz.push(className); }

        return clazz.join(' ');
    }, [className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (style) { return style; }
        return {};
    }, [style]);

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
