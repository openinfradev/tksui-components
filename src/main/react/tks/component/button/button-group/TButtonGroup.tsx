import {CSSProperties, useCallback, useMemo} from 'react';
import TButton from '~/tks/component/button/button/TButton';
import {TButtonGroupProps, TButtonGroupValue} from '~/tks/component/button/button-group/TButtonGroup.interface';


const TButtonGroup = (props: TButtonGroupProps) => {

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.disabled) { clazz.push('t-button-group--disabled'); }
        if (props.primary) { clazz.push('t-button-group--primary'); }

        return clazz.join(' ');
    }, [props.className, props.disabled, props.primary]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);

    // endregion

    // region [Privates]

    const updateMultiSelectValue = useCallback((value: TButtonGroupValue, currentStatus: boolean) => {
        if (currentStatus) {
            const newValue = props.value.filter((val) => JSON.stringify(val) !== JSON.stringify(value));
            props.onChange(newValue);
        } else {
            const newValue = props.value.concat(value);
            props.onChange(newValue);
        }
        return value;
    }, [props]);

    const updateSingleSelectValue = useCallback((value: TButtonGroupValue) => {
        props.onChange(value);
    }, [props]);

    const isActive = useCallback((value) => {
        if (props.multiSelect) {
            return props.value.some((val) => {
                return JSON.stringify(val) === JSON.stringify(value);
            });
        }

        if (typeof props.value === 'object') {
            return JSON.stringify(props.value) === JSON.stringify(value);
        }

        return props.value === value;
    }, [props.multiSelect, props.value]);

    // endregion

    // region [Events]

    const onClickItem = useCallback((value: TButtonGroupValue, currentStatus: boolean) => {

        if (props.multiSelect) {
            updateMultiSelectValue(value, currentStatus);
        } else {
            updateSingleSelectValue(value);
        }

    }, [props.multiSelect, updateMultiSelectValue, updateSingleSelectValue]);

    // endregion

    return (
        <div className={`t-button-group ${rootClass}`} style={rootStyle} data-testid={'button-group-root'}>
            {
                props.items.map((item, index) => {
                    return (
                        <TButton key={index}
                                 small
                                 primary={props.primary}
                                 disabled={props.disabled}
                                 main={isActive(item.value)}
                                 onClick={() => onClickItem(item.value, isActive(item.value))}
                        >{item.template}</TButton>
                    );
                })
            }
        </div>
    );
};

TButtonGroup.displayName = 'TButtonGroup';

TButtonGroup.defaultProps = {
    primary: false,
    disabled: false,
};


export default TButtonGroup;
