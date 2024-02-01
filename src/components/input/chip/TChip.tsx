import {CSSProperties, forwardRef, MouseEvent, Ref, useImperativeHandle, useMemo, useRef} from 'react';
import uniqueId from 'lodash/uniqueId';
import {chipSize, TChipProps, TChipRef} from './TChip.interface';
import TIcon from '../../icon/TIcon';


const TChip = forwardRef((props: TChipProps, ref: Ref<TChipRef>) => {

    // region [Hooks]

    const rootRef = useRef<HTMLDivElement>(null);
    const inputUuid = uniqueId();

    useImperativeHandle(ref, () => ({
        remove() { onClickRemove(); },
    }));

    // endregion


    // region [Styles]

    const $_size = useMemo(() => {
        if (props.size) { return props.size; }
        if (props.xsmall) { return chipSize.xsm; }
        if (props.small) { return chipSize.sm; }
        if (props.medium) { return chipSize.md; }
        if (props.large) { return chipSize.lg; }
        if (props.xlarge) { return chipSize.xlg; }
        return chipSize.md;
    }, [props.size, props.xsmall, props.small, props.medium, props.large, props.xlarge]);

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        clazz.push(`t-chip--${$_size}`);

        if (props.type === 'outlined') { clazz.push('t-chip--outlined'); }
        if (props.type === 'filled') { clazz.push('t-chip--filled'); }
        if (props.primary) { clazz.push('t-chip--primary'); }
        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [$_size, props.type, props.primary, props.className]);


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

    const deleteIconStyle: CSSProperties = useMemo(() => {

        if ($_size === 'xsmall') { return {fontSize: '12px'}; }
        if ($_size === 'small') { return {fontSize: '14px'}; }
        if ($_size === 'medium') { return {fontSize: '16px'}; }
        if ($_size === 'large') { return {fontSize: '20px'}; }
        if ($_size === 'xlarge') { return {fontSize: '24px'}; }
        return {fontSize: '16px'};
    }, [$_size]);


    return (
        <div ref={rootRef}
             className={`t-chip ${rootClass}`}
             onClick={(event) => event.stopPropagation()}
             style={rootStyle}
             id={props.id}
             data-testid={'t-chip-root'}>

            {
                props.icon && (
                    <TIcon fill
                           className={'t-chip__prev-icon'}
                           style={deleteIconStyle}>{props.icon}</TIcon>
                )
            }

            <div className={'t-chip__label'}>{props.children}</div>

            {
                !!props.onRemove && (
                    <div className={'t-chip__container'}>
                        <button id={inputUuid}
                                className={'t_chip__button-hidden'}
                                aria-label={'clear'}
                                onClick={(event) => onClickRemove(event)}>

                            <TIcon fill
                                   className={'t-chip__remove-icon'}
                                   style={deleteIconStyle}
                                   clickable
                            >{props.removeIcon}</TIcon>
                        </button>
                    </div>

                )
            }
        </div>
    );

    // endregion


});

TChip.defaultProps = {
    type: 'filled',
    removeIcon: 'cancel',
};

TChip.displayName = 'TChip';


export default TChip;
