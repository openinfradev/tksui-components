import type {CSSProperties} from 'react';
import {memo, useMemo} from 'react';

import type {TSectionProps} from '@/components';

function TSection(props: TSectionProps) {
    // region [Styles]

    const rootClass: string = useMemo((): string => {
        return ['t-section', props.className].filter(Boolean).join(' ');
    }, [props.className]);

    const contentClassName: string = useMemo((): string => {
        return ['t-section__content', props.contentClassName].filter(Boolean).join(' ');
    }, [props.contentClassName]);

    const rootStyle = useMemo((): CSSProperties => {
        return {
            ...props.style,
            ...(props.width && {width: props.width}),
        };
    }, [props.style, props.width]);

    // endregion

    return (
        <section className={rootClass} style={rootStyle} id={props.id} data-testid={'t-section-root'}>
            {(props.label || props.customLabel || props.leftAction || props.rightAction) && (
                <header className={'t-section__header'}>
                    {(props.label || props.customLabel) && (
                        <div className={'t-section__header__label'}>
                            {props.customLabel ? props.customLabel : props.label && props.label}
                        </div>
                    )}
                    {(props.leftAction || props.rightAction) && (
                        <div className={'t-section__header__action'}>
                            <div className={'t-section__header__action__left-action'}>
                                {props.leftAction && props.leftAction}
                            </div>
                            <div className={'t-section__header__action__right-action'}>
                                {props.rightAction && props.rightAction}
                            </div>
                        </div>
                    )}
                </header>
            )}
            <div className={contentClassName}>{props.children}</div>
        </section>
    );
}

export default memo(TSection);
