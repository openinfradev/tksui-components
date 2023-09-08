import {CSSProperties, KeyboardEvent} from 'react';
import TIcon from '../../icon/TIcon';
import {TRadioProps} from './TRadio.interface';


function TRadio(props: TRadioProps) {
    
    
    // region [Styles]
    
    function getRootClass(): string {
        const clazz: string[] = [];
        
        if (props.className) clazz.push(props.className);
        if (props.disabled) clazz.push('t-radio--disabled');
        
        return clazz.join(' ');
    }
    
    function getRootStyle(): CSSProperties {
        let style: CSSProperties = {};
        
        if (props.style) style = {...props.style};
        
        return style;
    }
    
    // endregion
    
    
    // region [Events]
    
    function onClickRadio(): void {
        if (props.disabled) return;
        emitSelect();
    }
    
    function onKeyDown(event: KeyboardEvent): void {
        if (props.disabled) return;
        if (event.key === 'Enter' || event.key === ' ') {
            emitSelect();
        }
    }
    
    // endregion
    
    
    // region [ETC]
    
    function emitSelect(): void {
        props.onSelect(props.positiveValue);
    }
    
    // endregion
    
    
    // region [Templates]
    
    function iconTemplate(): JSX.Element {

        const status = props.selected ? 'selected' : 'deselected';

        let iconType: string;

        if (props.selected) {
            iconType = 't_radio_on';
        } else if (props.disabled) {
            iconType = 't_radio_disabled_off'
        } else {
            iconType = 't_radio_off'
        }


        
        
        return (
            <TIcon small className={`t-radio__icon t-radio__icon--${status}`}>
                {iconType}
            </TIcon>
        );
    }
    
    return (
        <div className={`t-radio ${getRootClass()}`}
             style={getRootStyle()}>
            
            {/* Main */}
            <div className={'t-radio__container'}
                 tabIndex={props.disabled ? -1 : 0}
                 onKeyDown={onKeyDown}
                 onClick={onClickRadio}>
                {iconTemplate()}
                <span className={'t-radio__label'}>{props.children}</span>
            </div>
        </div>
    );
    
    // endregion
}

TRadio.defaultProps = {};

TRadio.displayName = 'TRadio';


export default TRadio;
