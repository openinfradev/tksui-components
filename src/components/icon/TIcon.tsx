// import 'material-icons/iconfont/filled.css';
// import 'material-icons/iconfont/outlined.css';
// import 'material-icons/iconfont/round.css';
// import 'material-icons/iconfont/two-tone.css';
// import 'material-icons/iconfont/sharp.css';

import {CSSProperties, KeyboardEvent, ReactElement, useCallback, useMemo} from 'react';
import {TIconSource, TIconType, TIconProps, iconSize} from './TIcon.interface';
import TOriginalImage from './TIconOriginal';

/**
 * We are using Google Material Icons {@link https://fonts.google.com/icons?icon.set=Material+Icons} <br/>
 * If you want to know the list of icons, please visit the link
 */
function TIcon(props: TIconProps): ReactElement {

    // region [Styles]

    const iconSource: TIconSource = useMemo((): TIconSource => {
        if (TOriginalImage[props.children]) {
            return 'original';
        }
        return 'material';
    }, [props.children]);

    const $_size = useMemo(() => {
        if (props.size && props.size in iconSize) { return props.size; }
        if (props.small) { return 'small'; }
        if (props.medium) { return 'medium'; }
        if (props.large) { return 'large'; }
        if (props.xlarge) { return 'xlarge'; }
        return 'medium';
    }, [props.large, props.medium, props.size, props.small, props.xlarge]);

    const rootClass: string = useMemo((): string => {
        const clazz = [];
        if (props.className) { clazz.push(props.className); }
        if (props.clickable) { clazz.push('t-icon--clickable'); }
        if (props.disabled) { clazz.push('t-icon--disabled'); }

        // Material icon
        if (iconSource === 'material') {
            const materialIconType = (props.type === 'filled' || props.type === undefined) ? '' : `-${props.type}`;
            clazz.push(`t-icon--material material-icons${materialIconType}`);
        } else {
            clazz.push('t-icon--original');
        }

        // icon size
        clazz.push(`t-icon--${$_size}`);

        return clazz.join(' ');
    }, [$_size, iconSource, props.className, props.clickable, props.disabled, props.type]);

    const rootStyle: CSSProperties = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        if (props.color && !props.disabled) {
            style.color = props.color;
            style.fill = props.color;
            style.stroke = props.color;
        }

        return style;
    }, [props.color, props.style]);

    // endregion

    // region [Events]

    const onClickRoot = useCallback((): void => {
        if (props.disabled) {
            return;
        }

        props.onClick?.();
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

    return (
        <span className={`t-icon ${rootClass}`}
              data-tooltip-id={props.tooltipId}
              data-tooltip-content={props.tooltipContent}
              data-tooltip-place={props.tooltipPlace}
              data-tooltip-hidden={props.tooltipHidden}
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
}

TIcon.defaultProps = {
    type: 'outlined' as TIconType,
};

export default TIcon;
