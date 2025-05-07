'use client';

import type {CSSProperties, KeyboardEvent, MouseEvent} from 'react';
import {memo, useCallback, useImperativeHandle, useMemo, useRef} from 'react';

import useRipple from '@/common/hook/UseRipple';
import TooltipUtil from '@/common/util/TooltipUtil';
import type {TIconButtonProps} from '@/components';
import {TIcon} from '@/components';

import themeToken from '~style/designToken/ThemeToken.module.scss';

const TIconButton = ({shape = 'circle', outline = 'elevation', onClick, ref, ...restProps}: TIconButtonProps) => {
    // region [Hooks]

    const props: TIconButtonProps = {shape, outline, onClick, ref, ...restProps};

    const rootRef = useRef<HTMLButtonElement>(null);

    const ripple = useRipple(rootRef);

    useImperativeHandle(ref, () => ({
        focus() {
            rootRef?.current?.focus();
        },
        click() {
            if (!props.disabled && onClick) {
                onClick();
            }
        },
    }));

    // endregion

    // region [Styles]

    const rootClass: string = useMemo(() => {
        const clazz = [];

        if (props.className) {
            clazz.push(props.className);
        }

        clazz.push(`t-icon-button--shape-${props.shape}`);
        clazz.push(`t-icon-button--outline-${props.outline}`);

        if (props.disabled) {
            clazz.push('t-icon-button--disabled');
        }

        return clazz.join(' ');
    }, [props.className, props.shape, props.outline, props.disabled]);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (props.style) {
            style = {...style, ...props.style};
        }

        return style;
    }, [props.style]);

    // endregion

    // region [Events]

    const onMouseDown = useCallback(
        (event: MouseEvent): void => {
            if (!props.disabled) {
                ripple.register(event);
            }
        },
        [props.disabled, ripple]
    );

    const onMouseUp = useCallback(
        (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>): void => {
            ripple.remove();
            if (!props.disabled && onClick) {
                onClick(event);
            }
        },
        [onClick, props.disabled, ripple]
    );

    const onMouseLeave = useCallback((): void => {
        ripple.remove();
    }, [ripple]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent): void => {
            ripple.register(event);
        },
        [ripple]
    );

    const onKeyUp = useCallback(
        (event: KeyboardEvent): void => {
            if (event.key === 'Enter' || event.key === ' ') {
                ripple.remove();
                if (onClick) {
                    onClick(event);
                }
            }
        },
        [onClick, ripple]
    );

    // endregion

    return (
        <button
            ref={rootRef}
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
            <TIcon className={'t-icon-button__inner'} small color={themeToken.tGrayColor5} disabled={props.disabled}>
                {props.children}
            </TIcon>
        </button>
    );
};

TIconButton.displayName = 'TIconButton';

export default memo(TIconButton);
