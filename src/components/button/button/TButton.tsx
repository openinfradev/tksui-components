import {CSSProperties, forwardRef, KeyboardEvent, MouseEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {buttonSize, TButtonProps, TButtonRef} from './TButton.interface';
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

    const contentIconSize = useMemo(() => {
        if ($_size === 'xsmall') { return 'small'; }
        if ($_size === 'small') { return 'small'; }
        if ($_size === 'medium') { return 'small'; }
        if ($_size === 'large') { return 'large'; }
        if ($_size === 'xlarge') { return 'large'; }
        return 'medium';
    }, [$_size]);


    const rootClass: string = useMemo(() => {
        const clazz = [];

        clazz.push(`t-button--${$_size}`);
        if (props.className) { clazz.push(props.className); }
        if (props.primary) { clazz.push('t-button--primary'); }
        if (props.point) { clazz.push('t-button--point'); }
        if (props.main) { clazz.push('t-button--main'); }
        if (props.disabled) { clazz.push('t-button--disabled'); }
        if (props.rounded) { clazz.push('t-button--rounded'); }
        if (props.loading) { clazz.push('t-button--loading'); }

        return clazz.join(' ');
    }, [$_size, props.className, props.point, props.primary, props.main, props.disabled, props.rounded, props.loading]);

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
                                props.icon && (
                                    <TIcon size={contentIconSize} className={'t-button__content__icon'}>{props.icon}</TIcon>
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
