import {cloneElement, CSSProperties, useCallback, useMemo} from 'react';
import {TTabBoxProps, TTabBoxValue} from '~/tks/component/data-container/tab-box/TTabBox.interface';
import TTabBoxContext from '~/tks/component/data-container/tab-box/TTabBoxContext';

const TTabBox = (props: TTabBoxProps) => {
    
    // region [Hooks]
    
    const {onChange, value, children, style, className} = props;
    
    // endregion
    
    
    // region [Templates]
    
    const rootClass = useMemo((): string => {
        const clazz: string[] = [];
        
        if (className) { clazz.push(className); }
        
        return clazz.join(' ');
    }, [className]);
    
    const rootStyle = useMemo((): CSSProperties => {
        if (style) { return style; }
        return {};
    }, [style]);
    
    const tabItemContent = useMemo(() => children
        .filter(
            (child, index) => {
                if (child.props.value) {
                    return child.props.value === value;
                }
                return index === value;
            },
        )[0]?.props.content, [children, value]);
    
    // endregion1
    
    
    // region [Events]
    
    const onChangeActiveTab = useCallback((val: TTabBoxValue) => onChange(val), [onChange]);
    
    // endregion
    
    return (
        <div className={`t-tab-box ${rootClass}`} style={rootStyle}>
            <ul className={'t-tab-box__tab-list'}>
                <TTabBoxContext.Provider value={{activeTab: value, onChangeActiveTab}}>
                    {
                        children.map(
                            (child, index) => (
                                cloneElement(child, {
                                    index,
                                    key: child.props.value || index,
                                })
                            ),
                        )
                    }
                </TTabBoxContext.Provider>
            </ul>
            <div className={'t-tab-box__tab-content t-tab-item-content'}>
                {tabItemContent}
            </div>
        </div>
    );
};

TTabBox.defaultProps = {};

TTabBox.displayName = 'TTabBox';


export default TTabBox;
