import {CSSProperties, forwardRef, KeyboardEvent, MouseEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {buttonSize, buttonVariant, TButtonProps, TButtonRef} from './TButton.interface';
import useRipple from '@/common/hook/UseRipple';
import TIcon from '../../icon/TIcon';


const TButton = forwardRef((props: TButtonProps, ref: Ref<TButtonRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLButtonElement>(null);

    const ripple = useRipple(rootRef);

    useImperativeHandle(ref, () => ({
        focus() {
            rootRef?.current?.focus();
        },
        click() {
            if (!props.disabled && props.onClick) {
                props.onClick();
            }
        },
    }));

    // endregion

    // region [Events]

    const onMouseDown = useCallback((event: MouseEvent): void => {
        if (!props.disabled) {
            ripple.register(event);
        }
    }, [props.disabled, ripple]);

    const onMouseUp = useCallback((event: MouseEvent<Element, globalThis.MouseEvent> | KeyboardEvent<Element>): void => {
        ripple.remove();
        if (!props.disabled && props.onClick) {
            props.onClick(event);
        }
    }, [props, ripple]);

    const onMouseLeave = useCallback((): void => {
        if (ripple.status === 'on') { ripple.remove(); }
    }, [ripple]);

    const onKeyDown = useCallback((event: KeyboardEvent): void => {
        if ((event.key === 'Enter' || event.key === ' ') && ripple.status === 'off') {
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

    // endregion


    // region [Styles]

    const $_size = useMemo(() => {
        if (props.size && props.size in buttonSize) { return props.size; }
        if (props.xsmall) { return buttonSize.xsmall; }
        if (props.small) { return buttonSize.small; }
        if (props.medium) { return buttonSize.medium; }
        if (props.large) { return buttonSize.large; }
        if (props.xlarge) { return buttonSize.xlarge; }
        return buttonSize.medium;
    }, [props.size, props.xsmall, props.small, props.medium, props.large, props.xlarge]);

    const contentIconInfo = useMemo(() => {

        const iconInfo = {render: true, size: ''};
        if ($_size === 'medium') { return {...iconInfo, size: 'xsmall'}; }
        if ($_size === 'large') { return {...iconInfo, size: 'xsmall'}; }
        if ($_size === 'xlarge') { return {...iconInfo, size: 'medium'}; }

        return {...iconInfo, render: false};
    }, [$_size]);

    const rootClass: string = useMemo(() => {
        const clazz = [];

        clazz.push(`t-button--${$_size}`);
        if (props.className) { clazz.push(props.className); }
        if (props.variant && props.variant in buttonVariant) { clazz.push(`t-button--${props.variant}`); }
        if (props.outlined) { clazz.push('t-button--outlined'); }
        if (props.plain) { clazz.push('t-button--plain'); }
        if (props.ghost) { clazz.push('t-button--ghost'); }
        if (props.disabled) { clazz.push('t-button--disabled'); }
        if (props.rounded) { clazz.push('t-button--rounded'); }
        if (props.loading) { clazz.push('t-button--loading'); }

        return clazz.join(' ');
    }, [$_size, props.className, props.outlined, props.plain, props.ghost, props.disabled, props.rounded, props.loading]);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (props.width) { style = {...style, width: props.width, minWidth: props.width}; }
        if (props.style) { style = {...style, ...props.style}; }

        return style;
    }, [props.style, props.width]);

    // endregion

    return (
        <button className={`t-button ${rootClass}`}
                style={rootStyle}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                disabled={props.disabled}
                tabIndex={(props.disabled || props.loading) ? -1 : 0}
                data-tooltip-id={props.tooltipId}
                data-tooltip-content={props.tooltipContent}
                data-tooltip-place={props.tooltipPlace}
                data-tooltip-hidden={props.tooltipHidden}
                ref={rootRef}>
            {
                !props.loading
                    ? (
                        <div className={'t-button__content'}>
                            {
                                props.icon && contentIconInfo.render && (
                                    <TIcon size={contentIconInfo.size} className={'t-button__content__icon'}>{props.icon}</TIcon>
                                )
                            }
                            {props.children}
                        </div>
                    )
                    : (
                        <div className={'t-button__content t-button__content--loading'}>
                            <div className={'t-button__content--loading__slice'}/>
                            <div className={'t-button__content--loading__slice'}/>
                            <div className={'t-button__content--loading__slice'}/>
                        </div>
                    )
            }</button>
    );
});

TButton.displayName = 'TButton';

export default TButton;
