import {CSSProperties, useMemo} from 'react';
import {TCardHeaderProps} from './TCard.interface';
import {TIcon} from '~/icon';

const TCardHeader = (props: TCardHeaderProps) => {

    // region [Hooks]

    const {className, style} = props;


    // region [Privates]


    // endregion
    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) { clazz.push(className); }
        if (props.icon) { clazz.push('t-card-header--with-icon'); }

        return clazz.join(' ');
    }, [className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (style) { return style; }
        return {};
    }, [style]);

    // endregion

    return (
        <header className={`t-card-header ${rootClass}`} style={rootStyle} id={props.id} data-testid={'card-header-root'}>
            {props.icon && (
                <TIcon className={'t-card-header__icon'} size={props.iconSize}
                       type={props.iconType} color={props.iconColor}>
                    {props.icon}
                </TIcon>
            )
            }
            {props.title && !props.subTitle && (<h4 className={'t-card-header__text__title'}>{props.title}</h4>)}
            {!props.title && props.subTitle && (<div className={'t-card-header__text__sub-title'}>{props.subTitle}</div>)}
            {
                props.title && props.subTitle && (
                    <div className={'t-card-header__text'}>
                        <h4 className={'t-card-header__text__title'}>{props.title}</h4>
                        <div className={'t-card-header__text__sub-title'}>{props.subTitle}</div>
                    </div>
                )
            }
        </header>
    );
};

TCardHeader.defaultProps = {
    iconSize: 'medium',
    iconType: 'outlined',
};

TCardHeader.displayName = 'TCard';


export default TCardHeader;
