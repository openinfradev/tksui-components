import {CSSProperties, useMemo} from 'react';
import {TCardContentProps} from './TCard.interface';

const TCardContent = (props: TCardContentProps) => {

    // region [Hooks]

    const {className, style} = props;


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
        <section className={`t-card-content ${rootClass}`} style={rootStyle} id={props.id} data-testid={'card-content-root'}>
            {props.children}
        </section>
    );
};

TCardContent.defaultProps = {};

TCardContent.displayName = 'TCard';


export default TCardContent;
