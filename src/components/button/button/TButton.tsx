import {CSSProperties, forwardRef, KeyboardEvent, memo, MouseEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {TLoadingIndicator, ButtonSize, buttonSize, buttonVariant, TButtonProps, TButtonRef} from '@/components';
import useRipple from '@/common/hook/UseRipple';
import TIcon from '../../icon/TIcon';
import TooltipUtil from '@/common/util/TooltipUtil';
import themeToken from '~style/designToken/ThemeToken.module.scss';


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

    const onMouseDown = useCallback((event: MouseEvent<HTMLButtonElement>): void => {
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
        ripple.register(event);
    }, [ripple]);

    const onKeyUp = useCallback((event: KeyboardEvent): void => {

        if (event.key === 'Enter' || event.key === ' ') {
            ripple.remove();
            if (props.onClick) { props.onClick(event); }
        }
    }, [props, ripple]);

    const onClick = useCallback((event: MouseEvent) => {

        event.stopPropagation();
    }, []);

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

    const contentIconInfo = useMemo((): { render: boolean, size: ButtonSize } => {

        const iconInfo = {render: true, size: undefined};
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
        if (props.primary) { clazz.push('t-button--primary'); }
        if (props.main) { clazz.push('t-button--main'); }
        if (props.ghost) { clazz.push('t-button--ghost'); }
        if (props.disabled) { clazz.push('t-button--disabled'); }
        if (props.rounded) { clazz.push('t-button--rounded'); }
        if (props.loading) { clazz.push('t-button--loading'); }

        return clazz.join(' ');
    }, [$_size, props.className, props.variant, props.primary, props.main, props.ghost, props.disabled, props.rounded, props.loading]);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (props.width) { style = {...style, width: props.width, minWidth: props.width}; }
        if (props.style) { style = {...style, ...props.style}; }

        return style;
    }, [props.style, props.width]);

    const loadingIndicatorSize = useMemo(() => {
        if ($_size === 'xsmall' || $_size === 'small') { return 'xsmall'; }
        if ($_size === 'xlarge') { return 'medium'; }
        return 'small';
    }, [$_size]);

    const spinnerColor = useMemo(() => {

        if (props.variant === 'primary' || props.primary) {
            return themeToken.tPrimaryColor;
        }
        if (props.variant === 'main' || props.main) {
            return themeToken.tWhiteColor;
        }
        if (props.variant === 'ghost' || props.ghost) {
            return themeToken.tWhiteColor;
        }

        return themeToken.tBlackColor;
    }, [props.variant, props.primary, props.main, props.ghost]);

    // endregion


    return (
        <button className={`t-button ${rootClass}`}
                style={rootStyle}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onClick={onClick}
                disabled={props.disabled}
                tabIndex={(props.disabled || props.loading) ? -1 : 0}
                {...TooltipUtil.convertToTooltipAttributes(props)}
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
                    : (<TLoadingIndicator size={loadingIndicatorSize} color={spinnerColor}/>)
            }
        </button>
    );
});

TButton.displayName = 'TButton';

export default memo(TButton);
