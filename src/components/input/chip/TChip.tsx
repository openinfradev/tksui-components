'use client';

import type {CSSProperties, MouseEvent} from 'react';
import {useCallback, useImperativeHandle, useMemo, useRef} from 'react';

import type {TChipProps} from '@/components';
import TIcon from '../../icon/TIcon';

import themeToken from '~style/designToken/ThemeToken.module.scss';

const TChip = ({
    prevIconSize = 'xsmall',
    ref,
    className,
    type,
    outlined,
    style,
    fill,
    prevIconColor,
    prevIcon,
    onClick,
    id,
    onRemove,
    children,
}: TChipProps) => {
    // region [Hooks]

    useImperativeHandle(ref, () => ({
        remove() {
            onClickRemove();
        },
    }));

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) {
            clazz.push(className);
        }

        if (type) {
            clazz.push(`t-chip--${type}`);
        } else if (outlined) {
            clazz.push('t-chip--outlined');
        } else if (fill) {
            clazz.push('t-chip--fill');
        } else {
            clazz.push('t-chip--outlined');
        }

        return clazz.join(' ');
    }, [type, className, fill, outlined]);

    // endregion

    // region [Events]

    const onClickRemove = useCallback(
        (event?: MouseEvent) => {
            onRemove?.(event);
            event?.stopPropagation();
        },
        [onRemove]
    );

    const onClickRoot = useCallback(
        (event?: MouseEvent) => {
            onClick?.(event);
            event?.stopPropagation();
        },
        [onClick]
    );

    // endregion

    // region [ETC]
    // endregion

    // region [Templates]

    return (
        <div className={`t-chip ${rootClass}`} onClick={onClickRoot} style={style} id={id} data-testid={'t-chip-root'}>
            {prevIcon && (
                <TIcon fill color={prevIconColor} size={prevIconSize} className={'t-chip__prev-icon'}>
                    {prevIcon}
                </TIcon>
            )}

            <div className={'t-chip__label'}>{children}</div>

            {!!onRemove && (
                <TIcon
                    fill
                    xsmall
                    className={'t-chip__remove-icon'}
                    clickable
                    color={themeToken.tSecondaryRedColor}
                    onClick={(event) => onClickRemove(event)}
                >
                    close
                </TIcon>
            )}
        </div>
    );

    // endregion
};

TChip.displayName = 'TChip';

export default TChip;
