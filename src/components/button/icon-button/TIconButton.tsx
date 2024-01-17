import {CSSProperties, forwardRef, KeyboardEvent, MouseEvent, Ref, useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import {TIconButtonProps, TIconButtonRef} from './TIconButton.interface';
import useRipple from '@/common/hook/UseRipple';
import TIcon from '../../icon/TIcon';


const TIconButton = forwardRef((props: TIconButtonProps, ref: Ref<TIconButtonRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLButtonElement>(null);

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
                data-tooltip-id={props.tooltipId}
                data-tooltip-content={props.tooltipContent}
                data-tooltip-place={props.tooltipPlace}
                data-tooltip-hidden={props.tooltipHidden}
        >
            <TIcon className={'t-icon-button__inner'}
                   xsmall
                   color={'#71747A'} /* FIXME. themetoken 으로 교체 */
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
