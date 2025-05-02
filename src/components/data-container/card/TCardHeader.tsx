import type {CSSProperties} from 'react';
import {useMemo} from 'react';

import type {TCardHeaderProps} from '@/components';

import {TIcon} from '~/icon';

const TCardHeader = ({className, style, iconSize = 'large', ...restProps}: TCardHeaderProps) => {
    // region [Hooks]

    const props: TCardHeaderProps = {className, style, iconSize, ...restProps};

    // region [Privates]

    // endregion
    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) {
            clazz.push(className);
        }
        if (props.icon) {
            clazz.push('t-card-header--with-icon');
        }

        return clazz.join(' ');
    }, [className, props.icon]);

    const rootStyle = useMemo((): CSSProperties => {
        if (style) {
            return style;
        }
        return {};
    }, [style]);

    // endregion

    return (
        <header
            className={`t-card-header ${rootClass}`}
            style={rootStyle}
            id={props.id}
            data-testid={'card-header-root'}
        >
            {props.icon && (
                <TIcon
                    className={'t-card-header__icon'}
                    size={props.iconSize}
                    fill={props.iconFill}
                    color={props.iconColor}
                >
                    {props.icon}
                </TIcon>
            )}
            {props.title && !props.subTitle && <h4 className={'t-card-header__text__title'}>{props.title}</h4>}
            {!props.title && props.subTitle && <div className={'t-card-header__text__sub-title'}>{props.subTitle}</div>}
            {props.title && props.subTitle && (
                <div className={'t-card-header__text'}>
                    <h4 className={'t-card-header__text__title'}>{props.title}</h4>
                    <div className={'t-card-header__text__sub-title'}>{props.subTitle}</div>
                </div>
            )}
        </header>
    );
};

TCardHeader.displayName = 'TCardHeader';

export default TCardHeader;
