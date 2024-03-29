import {CSSProperties, useMemo} from 'react';
import {TIcon} from '~/icon';
import {TCardProps} from './TCard.interface';
import TooltipUtil from '@/common/util/TooltipUtil';

const TCard = (props: TCardProps) => {

    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) {
            clazz.push(props.className);
        }
        if (props.dashed) {
            clazz.push('t-card--dashed');
        }
        if (props.center) {
            clazz.push('t-card--center');
        }
        if (props.clickable) {
            clazz.push('t-card--clickable');
        }
        if (props.selected) {
            clazz.push('t-card--selected');
        }

        return clazz.join(' ');
    }, [props.center, props.className, props.clickable, props.dashed, props.selected]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.width) {
            style = {...style, width: props.width};
        }
        if (props.height) {
            style = {...style, height: props.height};
        }
        if (props.style) {
            style = {...style, ...props.style};
        }

        return style;
    }, [props.height, props.style, props.width]);

    // endregion

    return (
        <div className={`t-card ${rootClass}`}
             style={rootStyle}
             onClick={props.onClick}
             {...TooltipUtil.convertToTooltipAttributes(props)}
             data-testid={'card-root'}
        >
            {
                props.icon && (
                    <TIcon className={'t-card-top__icon'} size={props.iconSize}
                           fill={props.iconFill} color={props.iconColor}>
                        {props.icon}
                    </TIcon>
                )
            }
            {props.children}
        </div>
    );
};

TCard.defaultProps = {
    iconSize: 'xlarge',
    iconType: 'outlined',
};

TCard.displayName = 'TCard';


export default TCard;
