import type {CSSProperties} from 'react';
import {useMemo} from 'react';

import type {TCardContentProps} from '@/components';

const TCardContent = ({className, style, ...restProps}: TCardContentProps) => {
    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) {
            clazz.push(className);
        }

        return clazz.join(' ');
    }, [className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (style) {
            return style;
        }
        return {};
    }, [style]);

    // endregion

    return (
        <section
            className={`t-card-content ${rootClass}`}
            style={rootStyle}
            id={restProps.id}
            data-testid={'card-content-root'}
        >
            {restProps.children}
        </section>
    );
};

TCardContent.displayName = 'TCard';

export default TCardContent;
