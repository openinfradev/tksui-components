import {KeyboardEvent, useCallback} from 'react';
import TIcon from '../../icon/TIcon';
import themeToken from '~style/designToken/ThemeToken.module.scss';

import {TRadioProps} from '@/components';


const TRadio = (props: TRadioProps) => {

    // region [Styles]

    const getRootClass = useCallback(() => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);
        if (props.disabled) clazz.push('t-radio--disabled');

        return clazz.join(' ');
    }, [props.className, props.disabled]);

    const getRootStyle = useCallback(() => {
        return props.style || {};
    }, [props.style]);

    // endregion


    // region [ETC]

    const emitSelect = useCallback(() => {
        props.onSelect(props.positiveValue);
    }, [props]);

    // endregion


    // region [Events]

    const onClickRadio = useCallback(() => {
        if (props.disabled) return;
        emitSelect();
    }, [props.disabled, emitSelect]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (props.disabled) return;
        if (event.key === 'Enter' || event.key === ' ') {
            emitSelect();
        }
    }, [props.disabled, emitSelect]);

    // endregion


    // region [Templates]

    const iconTemplate = useCallback(() => {

        const status = props.selected ? 'selected' : 'deselected';

        let iconType: string;
        let iconColor = themeToken.tGrayColor3;

        if (props.selected) {
            iconType = 't_radio_on';
            iconColor = themeToken.tPrimaryColor;
        } else if (props.disabled) {
            iconType = 't_radio_disabled_off';
        } else {
            iconType = 't_radio_off';
        }

        return (
            <TIcon xsmall
                   className={`t-radio__icon t-radio__icon--${status}`}
                   color={iconColor}
            >
                {iconType}
            </TIcon>
        );
    }, [props.selected, props.disabled]);

    return (
        <div className={`t-radio ${getRootClass()}`}
             style={getRootStyle()}
             id={props.id}
             data-testid={'t-radio-root'}>

            {/* Main */}
            <div className={'t-radio__container'}
                 tabIndex={props.disabled ? -1 : 0}
                 onKeyDown={onKeyDown}
                 onClick={onClickRadio}
                 data-testid={'t-radio-container'}>
                {iconTemplate()}
                <span className={'t-radio__label'}>{props.children}</span>
            </div>
        </div>
    );

    // endregion
};

TRadio.defaultProps = {};

TRadio.displayName = 'TRadio';


export default TRadio;
