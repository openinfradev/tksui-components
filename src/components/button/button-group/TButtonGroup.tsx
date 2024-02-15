import {CSSProperties, useCallback, useMemo} from 'react';
import TButton from '../button/TButton';
import {TButtonGroupProps, TButtonGroupValue} from '@/components';


const TButtonGroup = (props: TButtonGroupProps) => {

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.variant && (props.primary || props.main)) {
            throw Error('Error: variant prop cannot have both primary and main simultaneously.');
        }

        if (props.className) { clazz.push(props.className); }
        if (props.variant) { clazz.push(`t-button-group--${props.variant}`); }
        if (props.primary) { clazz.push('t-button-group--primary'); }
        if (props.main) { clazz.push('t-button-group--main'); }

        if (props.multiSelect) { clazz.push('t-button-group--multi-select'); }
        if (props.disabled) { clazz.push('t-button-group--disabled'); }

        return clazz.join(' ');
    }, [props.className, props.disabled, props.multiSelect, props.variant, props.primary, props.main]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }

        return style;
    }, [props.style]);

    const buttonClass = useCallback((isActive: boolean) => {
        return isActive ? 't-button-group__button--active' : '';
    }, []);

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
                                 className={`t-button-group__button ${buttonClass(isActive(item.value))}`}
                                 small
                                 disabled={props.disabled}
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
    disabled: false,
};


export default TButtonGroup;
