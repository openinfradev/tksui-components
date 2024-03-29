import {CSSProperties, forwardRef, KeyboardEvent, MouseEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {TIconButtonProps, TIconButtonRef} from './TIconButton.interface';
import useRipple from '@/common/hook/UseRipple';
import TIcon from '../../icon/TIcon';
import themeToken from '~style/designToken/ThemeToken.module.scss';
import TooltipUtil from '@/common/util/TooltipUtil';


const TIconButton = forwardRef((props: TIconButtonProps, ref: Ref<TIconButtonRef>) => {

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


    // region [Styles]

    const rootClass: string = useMemo(() => {
        const clazz = [];

        if (props.className) { clazz.push(props.className); }

        clazz.push(`t-icon-button--shape-${props.shape}`);
        clazz.push(`t-icon-button--outline-${props.outline}`);

        if (props.disabled) { clazz.push('t-icon-button--disabled'); }

        return clazz.join(' ');
    }, [props.className, props.shape, props.outline, props.disabled]);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (props.style) { style = {...style, ...props.style}; }

        return style;
    }, [props.style]);

    // endregion


    // region [Events]

    const onMouseDown = useCallback((event: MouseEvent): void => {
        if (!props.disabled) {
            ripple.register(event);
        }
    }, [props.disabled, ripple]);

    const onMouseUp = useCallback((event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>): void => {
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

    // endregion

    return (

        <button ref={rootRef}
                style={rootStyle}
                className={`t-icon-button ${rootClass}`}
                id={props.id}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                tabIndex={props.disabled ? -1 : 0}
                {...TooltipUtil.convertToTooltipAttributes(props)}
        >
            <TIcon className={'t-icon-button__inner'}
                   small
                   color={themeToken.tGrayColor5}
                   disabled={props.disabled}
            >{props.children}</TIcon>
        </button>
    );
});

TIconButton.displayName = 'TIconButton';

TIconButton.defaultProps = {
    shape: 'circle',
    outline: 'elevation',
};

export default TIconButton;
