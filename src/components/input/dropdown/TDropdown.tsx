import {
    CSSProperties,
    forwardRef,
    KeyboardEvent,
    ReactElement,
    Ref,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import TIcon from '../../icon/TIcon';
import useValidator from '@/common/hook/UseValidator';
import {TDropdownItem, TDropdownProps, TDropdownRef} from './TDropdown.interface';
import useClickOutside from '@/common/hook/UseClickOutside';
import TCheckbox from '../checkbox/TCheckbox';
import TTextField from '../text-field/TTextField';
import THighlightText from '../../data-container/highlight-text/THighlightText';
import TChip from '../chip/TChip';

const TDropdown = forwardRef((props: TDropdownProps, ref: Ref<TDropdownRef>) => {

    // region [Hooks]

    const validator = useValidator(props.value, props.rules, props.successMessage);

    const inputRef = useRef(null);
    const rootRef = useRef(null);
    const [filterText, setFilterText] = useState('');
    const [isOpened, setIsOpened] = useState(false);
    const [itemMap, setItemMap] = useState(new Map());


    useImperativeHandle(ref, () => ({
        focus() { inputRef?.current?.focus(); },
        validate() { return validator.validate(); },
    }));

    // endregion


    // region [Styles]

    const getListItemContent = useCallback((item: TDropdownItem): string => {
        if (!item) { return ''; }

        return props.itemTemplate ? props.itemTemplate(item) : item[props.textKey];
    }, [props]);


    const getFilteredItem = useCallback((): TDropdownItem[] => {
        if (!props.multiple && filterText === getListItemContent(itemMap.get(props.value))) {
            return props.items;
        }

        return props.items.filter(
            (item) => getListItemContent(item)
                .toLowerCase()
                .includes(filterText?.toLowerCase()),
        );
    }, [filterText, getListItemContent, itemMap, props.items, props.multiple, props.value]);


    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (isOpened) clazz.push('t-dropdown--open');
        if (props.disabled) clazz.push('t-dropdown--disabled');
        if (!validator.result) clazz.push('t-dropdown--failure');
        if (validator.result && validator.message) clazz.push('t-dropdown--success');

        clazz.push(`t-dropdown--${props.type}`);

        return clazz.join(' ');
    }, [isOpened, props.disabled, props.type, validator.message, validator.result]);

    const selectedClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.value?.length === 0) clazz.push('t-dropdown__control__selected--empty');

        return clazz.join(' ');
    }, [props.value?.length]);

    const itemsClass = useMemo((): string => {
        const clazz: string[] = [];

        if (isOpened) clazz.push('t-dropdown__items--open');
        if (props.noDetail) clazz.push('t-dropdown__items--no-detail');
        if (getFilteredItem().length === 0) clazz.push('t-dropdown__items--empty');

        return clazz.join(' ');
    }, [getFilteredItem, isOpened, props.noDetail]);

    const itemClass = useCallback((item: TDropdownItem): string => {
        const clazz: string[] = [];

        if (typeof props.value === 'object' && props.value.includes(item[props.valueKey])) {
            clazz.push('t-dropdown__items__item--selected');
        } else if (typeof props.value === 'string' && props.value === item[props.valueKey]) {
            clazz.push('t-dropdown__items__item--selected');
        }

        return clazz.join(' ');
    }, [props.value, props.valueKey]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};
        if (props.width) style = {...style, width: props.width};

        return style;
    }, [props.style, props.width]);

    // endregion


    // region [Events]

    const onClickControl = (): void => {
        toggleIsOpened();
        focusToInput();
    };

    const onClickItem = (itemValue: string): void => {
        modifyValue(itemValue);
        focusToInput();
        if (!props.multiple) { close(); }
    };

    const onFocus = (): void => {
        validator.clearValidation();
    };

    const onblur = (): void => {
        if (!isOpened && !props.lazy) {
            validator.validate();
            resetFilterText();
        }
    };

    const onChangeFilterText = (value: string): void => {
        setFilterText(value);

        if (value.length > 0) {
            toggleIsOpened(true);
        } else {
            toggleIsOpened(false);
        }
    };

    const onKeyDownFilterText = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Escape') { close(); }
        if (event.key === 'Enter') { open(); }
    };

    const onKeyDownItem = (event: KeyboardEvent<HTMLDivElement>, itemValue: string): void => {
        if (event.key === 'Escape') { close(); }
        if (event.key === 'Enter') {
            modifyValue(itemValue);
            if (!props.multiple) {
                focusToInput();
                close();
            }
        }
    };

    const onClearFilterText = (): void => {
        if (!props.multiple) {
            props.onChange('');
        }
    };

    // endregion


    // region [ETC]

    const focusToInput = () => {
        inputRef.current.focus();
    };

    const resetFilterText = () => {
        if (!props.multiple) {
            setFilterText(getListItemContent(itemMap.get(props.value)));
        }
    };

    const modifyValue = (newItem: any): void => {

        if (props.multiple) {
            if (props.value.includes(newItem)) {
                props.onChange((props.value as string[]).filter((v) => v !== newItem));
            } else {
                props.onChange([...props.value, newItem]);
            }
        } else {
            props.onChange(newItem);
        }
    };

    const registerItemMap = () => {
        const map = new Map();
        props.items.forEach((item) => {
            map.set(item[props.valueKey], item);
        });
        setItemMap(map);
    };


    const close = (): void => {
        setIsOpened(false);
    };

    const open = (): void => {
        setIsOpened(true);
        validator.clearValidation();
    };

    const toggleIsOpened = (value?: boolean): void => {
        if (value === true) {
            open();
        } else if (value === false) {
            close();
        } else if (isOpened) {
            close();
        } else {
            open();
        }
    };

    // endregion


    // region [Templates]

    const filterTextPlaceholder = useMemo((): string => {

        if (props.value?.length === 0) { return props.placeholder; }
        return null;
    }, [props.value, props.placeholder]);

    const getSelectedItemTemplate = (): ReactElement => {

        if (props.multiple) {
            if (props.chip) {
                return (<>{
                    (props.value as string[]).map((value) => (
                        <TChip key={value}
                               small
                               onRemove={props.disabled ? null : () => onClickItem(value)}
                        >{getListItemContent(itemMap.get(value))}</TChip>
                    ))
                }</>);
            }

            return (<>{
                (props.value as string[])
                    .map((value) => (getListItemContent(itemMap.get(value))))
                    .join(', ')

            }</>);

        }

        return (<></>);
    };

    const getListItemTemplate = (item: TDropdownItem): ReactElement => (
        <THighlightText keyword={filterText}>
            {getListItemContent(item)}
        </THighlightText>
    );

    // endregion


    // region [Hooks - Lifecycle]

    useClickOutside(rootRef, close);

    useEffect(registerItemMap, [props.items, props.valueKey]);
    useEffect(resetFilterText, [getListItemContent, itemMap, props.multiple, props.value]);

    // endregion

    return (
        <div ref={rootRef}
             className={`t-dropdown ${rootClass}`}
             style={rootStyle}
             onFocus={onFocus}
             onBlur={onblur}>

            {/* Control */}
            <div className={'t-dropdown__control'} onClick={onClickControl}>

                {/* Control - Selected Items for multiple */}
                {
                    <div className={`t-dropdown__control__selected ${selectedClass}`}>
                        {getSelectedItemTemplate()}

                        {/* Control - Filter Text */}
                        <TTextField ref={inputRef}
                                    className={'t-dropdown__control__filter-text'}
                                    value={filterText}
                                    clearable
                                    placeholder={filterTextPlaceholder}
                                    disabled={props.disabled}
                                    noTrim
                                    onChange={onChangeFilterText}
                                    onKeyDown={onKeyDownFilterText}
                                    onClear={onClearFilterText}
                        />
                    </div>
                }


                {/* Control - Opener */}
                <TIcon className={`t-dropdown__control__opener ${isOpened ? 't-dropdown__control__opener--open' : ''}`}
                       small
                       clickable
                       color={props.disabled ? '#CCCCCC' : '#000000'}>keyboard_arrow_down</TIcon>
            </div>

            {/* Floating */}
            <div className={`t-dropdown__items ${itemsClass}`}>
                {
                    isOpened && getFilteredItem()
                        .map((item) => (
                            <div key={item[props.valueKey]}
                                 className={`t-dropdown__items__item ${itemClass(item)}`}
                                 tabIndex={props.multiple ? -1 : 0}
                                 onClickCapture={() => onClickItem(item[props.valueKey])}
                                 onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => onKeyDownItem(event, item[props.valueKey])}>
                                {
                                    props.multiple
                                    && <TCheckbox className={'t-dropdown__items__item__checkbox'}
                                                  checked={(props.value as string[]).includes(item[props.valueKey])}
                                    />
                                }
                                {getListItemTemplate(item)}
                            </div>
                        ))
                }
            </div>

            {/* Details */}
            {
                !props.noDetail && (
                    <div className={'t-dropdown__details'}>
                        <div className={'t-dropdown__details__message'}>
                            {validator.message && `${validator.message}`}
                        </div>
                    </div>
                )
            }

        </div>
    );
});

TDropdown.defaultProps = {
    type: 'outline',
    valueKey: 'value',
    textKey: 'text',
    placeholder: '선택',
    chip: true,
    lazy: true,
};

TDropdown.displayName = 'TDropdown';


export default TDropdown;
