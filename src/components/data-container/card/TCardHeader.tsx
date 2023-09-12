import {CSSProperties, useMemo} from 'react';
import {TCardHeaderProps} from './TCard.interface';

const TCardHeader = (props: TCardHeaderProps) => {

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
        <header className={`t-card-header ${rootClass}`} style={rootStyle}>
            <h4 className={'t-card-header__title'}>{props.title}</h4>
            <div className={'t-card-header__sub-title'}>{props.subTitle}</div>
        </header>
    );
};

TCardHeader.defaultProps = {
};

TCardHeader.displayName = 'TCard';


export default TCardHeader;
