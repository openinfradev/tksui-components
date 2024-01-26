import {CSSProperties, forwardRef, MouseEvent, Ref, useImperativeHandle, useMemo, useRef} from 'react';
import {TChipProps, TChipRef} from './TChip.interface';
import TIcon from '../../icon/TIcon';
import themeToken from '~style/designToken/ThemeToken.module.scss';


const TChip = forwardRef((props: TChipProps, ref: Ref<TChipRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        remove() { onClickRemove(); },
    }));

    // endregion


    // region [Styles]

    const rootClass = useMemo((): string => {

        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        if (props.type) {
            clazz.push('t-chip--outlined');
        } else if (props.type === 'outlined' || props.outlined) {
            clazz.push('t-chip--outlined');
        } else if (props.type === 'fill' || props.fill) {
            clazz.push('t-chip--fill');
        }

        return clazz.join(' ');
    }, [props.type, props.className, props.fill, props.outlined]);


    const rootStyle = useMemo((): CSSProperties => props.style, [props.style]);

    // endregion


    // region [Events]

    const onClickRemove = (event?: MouseEvent) => {
        props.onRemove(event);
    };

    // endregion


    // region [ETC]
    // endregion


    // region [Templates]

    return (
        <div ref={rootRef}
             className={`t-chip ${rootClass}`}
             onClick={(event) => event.stopPropagation()}
             style={rootStyle}
             id={props.id}
             data-testid={'t-chip-root'}>

            {
                props.prevIcon && (
                    <TIcon fill
                           color={props.prevIconColor}
                           size={props.prevIconSize}
                           className={'t-chip__prev-icon'}
                    >
                        {props.prevIcon}
                    </TIcon>
                )
            }

            <div className={'t-chip__label'}>{props.children}</div>

            {
                !!props.onRemove && (
                    <TIcon fill
                           className={'t-chip__remove-icon'}
                           color={props.removeIconColor}
                           size={props.removeIconSize}
                           // FIXME: TIcon Size 16x16 추가되면 변경
                           style={{fontSize: props.removeIconSize ? 'auto' : '16px'}}
                           clickable
                           onClick={(event) => onClickRemove(event)}
                    >{props.removeIcon}</TIcon>
                )
            }
        </div>
    );

    // endregion

});

TChip.defaultProps = {
    prevIconSize: 'xsmall',
    removeIcon: 'close_small',
    removeIconColor: themeToken.tSecondaryRedColor,
};

TChip.displayName = 'TChip';


export default TChip;
