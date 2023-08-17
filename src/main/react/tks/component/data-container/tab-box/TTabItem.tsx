import {MouseEvent, useCallback, useContext, useMemo, useRef} from 'react';
import {TTabItemProps} from '~/tks/component/data-container/tab-box/TTabBox.interface';
import TTabBoxContext from '~/tks/component/data-container/tab-box/TTabBoxContext';
import useRipple from '~/tks/component/common/hook/UseRipple';

const TTabItem = (props: TTabItemProps) => {
    
    // region [Hooks]
    
    const {value, index, label} = props;
    const context = useContext<TTabBoxContext>(TTabBoxContext);
    const itemRef = useRef<HTMLLIElement>(null);
    const ripple = useRipple(itemRef);
    // endregion
    
    
    // region [Events]
    
    const onMouseDown = useCallback((event: MouseEvent): void => {
        ripple.register(event);
    }, [ripple]);
    
    
    const onMouseUp = useCallback((): void => {
        ripple.remove();
        context.onChangeActiveTab(value || index);
    }, [context, index, value, ripple]);
    
    const onMouseLeave = useCallback((): void => {
        ripple.remove();
    }, [ripple]);
    
    // endregion
    
    // region [Templates]
    
    const rootClass = useMemo((): string => {
        const clazz: string[] = [];
        
        if (context.activeTab === value) {
            clazz.push('t-tab-item-label--active');
        } else if (!value && context.activeTab === index) {
            clazz.push('t-tab-item-label--active');
        }
        
        return clazz.join(' ');
    }, [context.activeTab, index, value]);
    
    // endregion
    
    
    return (
        <li ref={itemRef}
            className={`t-tab-item-label ${rootClass}`}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}>
            {label}
            <div className={'t-tab-item-label__active-indicator'} />
        </li>
    );
};


export default TTabItem;
