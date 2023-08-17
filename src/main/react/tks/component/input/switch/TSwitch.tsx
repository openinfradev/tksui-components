import {CSSProperties, KeyboardEvent, useCallback, useMemo} from 'react';
import {TSwitchProps} from '~/tks/component/input/switch/TSwitch.interface';


function TSwitch(props: TSwitchProps) {

    // region [Privates]

    const emitChange = useCallback((): void => {
        const next = props.value === props.positiveValue ? props.negativeValue : props.positiveValue;
        props.onChange(next);
    }, [props]);

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.disabled) { clazz.push('t-switch--disabled'); }

        return clazz.join(' ');
    }, [props.className, props.disabled]);


    const containerClass = useMemo((): string => {
        const clazz: string[] = [];
        if (props.value === props.positiveValue) {
            clazz.push('t-switch__container--on');
        } else {
            clazz.push('t-switch__container--off');
        }
        return clazz.join(' ');
    }, [props.positiveValue, props.value]);

    const getRootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);

    // endregion


    // region [Events]

    const onClickRoot = useCallback((): void => {
        emitChange();
    }, [emitChange]);

    const onKeydownThumb = useCallback((event: KeyboardEvent): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            emitChange();
        }
    }, [emitChange]);

    // endregion


    return (
        <div className={`t-switch ${rootClass}`}
             style={getRootStyle}
             onClick={onClickRoot}
             data-testid={'t-switch-root'}
        >
            <div className={`t-switch__container ${containerClass}`}
                 data-testid={'t-switch-container'}
            >
                <div className={'t-switch__container__thumb'}
                     tabIndex={props.disabled ? -1 : 0}
                     onKeyDown={onKeydownThumb}
                     data-testid={'t-switch-thumb'}
                />
            </div>
            {
                props.label
                && <label className={'t-switch__label'}> {props.label} </label>
            }
        </div>
    );
}

TSwitch.defaultProps = {
    positiveValue: true,
    negativeValue: false,
};

TSwitch.displayName = 'TSwitch';


export default TSwitch;
