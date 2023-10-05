import {CSSProperties, forwardRef, KeyboardEvent, MouseEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {TIconButtonProps, TIconButtonRef} from './TIconButton.interface';
import useRipple from '@/common/hook/UseRipple';
import TIcon from '../../icon/TIcon';


const TIconButton = forwardRef((props: TIconButtonProps, ref: Ref<TIconButtonRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);

    const ripple = useRipple(rootRef);

    useImperativeHandle(ref, () => ({
        focus() { /**/ },
        click() { /**/ },
    }));

    // endregion


    // region [Styles]

    const rootClass: string = useMemo(() => {
        const clazz = [];

        if (props.className) { clazz.push(props.className); }
        if (props.primary) { clazz.push('t-icon-button--primary'); }
        if (props.point) { clazz.push('t-icon-button--point'); }
        if (props.disabled) { clazz.push('t-icon-button--disabled'); }
        if (props.outlined) { clazz.push('t-icon-button--outlined'); }

        return clazz.join(' ');
    }, [props.className, props.primary, props.point, props.disabled, props.outlined]);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (props.style) { style = {...style, ...props.style}; }

        if (props.color && !props.disabled) {
            style.color = props.color;
            style.fill = props.color;
            style.stroke = props.color;
        }

        return style;
    }, [props.color, props.disabled, props.style]);

    // endregion


    // region [Events]

    const onMouseDown = useCallback((event: MouseEvent): void => {
        if (!props.disabled) {
            ripple.register(event);
        }
    }, [props.disabled, ripple]);

    const onMouseUp = useCallback((event): void => {
        ripple.remove();
        if (!props.disabled && props.onClick) {
            props.onClick(event);
        }
    }, [props, ripple]);

    const onMouseLeave = useCallback((): void => {
        ripple.remove();
    }, [ripple]);

    const onKeyDown = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            ripple.register(event);
        }
    }, [ripple]);

    const onKeyUp = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            ripple.remove();
            if (props.onClick) {
                props.onClick(event);
            }
        }
    }, [props, ripple]);

    const onClick = useCallback((event: MouseEvent): void => {
        event.stopPropagation();
    }, []);

    // endregion

    return (

        <div ref={rootRef}
             style={rootStyle}
             className={`t-icon-button ${rootClass}`}
             onMouseDown={onMouseDown}
             onMouseUp={onMouseUp}
             onMouseLeave={onMouseLeave}
             onKeyDown={onKeyDown}
             onKeyUp={onKeyUp}
             onClick={onClick}
             tabIndex={props.disabled ? -1 : 0}
             data-tooltip-id={props.tooltipId}
             data-tooltip-content={props.tooltipContent}
             data-tooltip-place={props.tooltipPlace}
             data-tooltip-hidden={props.tooltipHidden}
        >
            <TIcon className={`t-icon-button__inner ${rootClass}`}
                   size={props.size}
                   small={props.small}
                   medium={props.medium}
                   large={props.large}
                   xlarge={props.xlarge}
                   disabled={props.disabled}
                   color={props.color}
            >{props.children}</TIcon>
        </div>
    );
});

TIconButton.displayName = 'TIconButton';

export default TIconButton;
