
import '@material-symbols/font-300/outlined.css';

import {CSSProperties, KeyboardEvent, memo, MouseEvent, ReactElement, useCallback, useMemo} from 'react';
import {TIconSource, TIconProps, iconSize} from '@/components';
import TOriginalImage from './TIconOriginal';
import TooltipUtil from '@/common/util/TooltipUtil';

/**
 * We are using Google Material Symbols {@link https://fonts.google.com/icons?icon.set=Material+Symbols} <br/>
 * If you want to know the list of icons, please visit the link
 */
const TIcon = (props: TIconProps): ReactElement => {

    // region [Styles]

    const iconSource: TIconSource = useMemo((): TIconSource => {
        if (TOriginalImage[props.children]) {
            return 'original';
        }
        return 'material';
    }, [props.children]);

    const $_size = useMemo(() => {
        if (props.size && props.size in iconSize) { return props.size; }
        if (props.xsmall) { return 'xsmall'; }
        if (props.small) { return 'small'; }
        if (props.medium) { return 'medium'; }
        if (props.large) { return 'large'; }
        if (props.xlarge) { return 'xlarge'; }
        return 'medium';
    }, [props.large, props.medium, props.size, props.small, props.xlarge, props.xsmall]);

    const rootClass: string = useMemo((): string => {
        const clazz = [];
        if (props.className) { clazz.push(props.className); }
        if (props.clickable) { clazz.push('t-icon--clickable'); }
        if (props.disabled) { clazz.push('t-icon--disabled'); }

        // Material icon

        if (iconSource === 'material') {
            clazz.push('t-icon-material');
            if (props.fill) { clazz.push('t-icon-material--fill'); }
        } else {
            clazz.push('t-icon-original');
        }

        // icon size
        clazz.push(`t-icon--${$_size}`);

        return clazz.join(' ');
    }, [$_size, iconSource, props.className, props.clickable, props.disabled, props.fill]);

    const rootStyle: CSSProperties = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }

        if (props.color && !props.disabled) {
            style.color = props.color;
            style.fill = props.color;
            style.stroke = props.color;
        }

        return style;
    }, [props.color, props.disabled, props.style]);

    // endregion

    // region [Events]

    const onClickRoot = useCallback((event: MouseEvent<HTMLSpanElement>): void => {
        if (props.disabled) {
            return;
        }

        props.onClick?.(event);
    }, [props]);

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>): void => {
        if (props.disabled) {
            return;
        }

        if (event.key === 'Enter' && props.onKeyDownEnter) {
            props.onKeyDownEnter(event);
        }

        if (event.key === ' ' && props.onKeyDownSpace) {
            props.onKeyDownSpace(event);
        }

        if (props.onKeyDown) {
            props.onKeyDown(event);
        }
    }, [props]);


    // endregion

    // region [Templates]

    return (
        <span className={`t-icon material-symbols-outlined ${rootClass}`}
              {...TooltipUtil.convertToTooltipAttributes(props)}
              tabIndex={(!props.disabled && (props.onKeyDownEnter || props.onKeyDownSpace)) ? 0 : -1}
              onClick={onClickRoot}
              onKeyDown={onKeyDown}
              role={'img'}
              aria-label={props.children}
              style={rootStyle}
              id={props.id}
        >
            {
                (iconSource === 'original')
                    ? (TOriginalImage[props.children])
                    : props.children
            }
        </span>
    );

    // endregion

};

TIcon.defaultProps = {};

export default memo(TIcon);
