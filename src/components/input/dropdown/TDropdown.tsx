'use client';

import type {CSSProperties, KeyboardEvent, MouseEvent, Ref} from 'react';
import {forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';

import useClickOutside from '@/common/hook/UseClickOutside';
import useValidator from '@/common/hook/UseValidator';
import type {TDropdownItem, TDropdownProps, TDropdownRef} from '@/components';
import THighlightText from '../../data-container/highlight-text/THighlightText';
import TCheckbox from '../checkbox/TCheckbox';
import TTextField from '../text-field/TTextField';

import themeToken from '~style/designToken/ThemeToken.module.scss';

import TIcon from '~/icon/TIcon';
import TChip from '~/input/chip/TChip';

const TDropdown = forwardRef(
    (
        {
            type = 'outline',
            valueKey = 'value',
            textKey = 'text',
            placeholder = '선택',
            filterPlaceholder = '검색',
            chip = true,
            lazy = true,
            noClearButton = false,
            itemTemplate,
            onOpen,
            onClose,
            onChange,
            ...restProps
        }: TDropdownProps,
        ref: Ref<TDropdownRef>
    ) => {
        // region [Hooks]

        const props: TDropdownProps = {
            type,
            valueKey,
            textKey,
            placeholder,
            filterPlaceholder,
            chip,
            lazy,
            noClearButton,
            itemTemplate,
            onOpen,
            onClose,
            onChange,
            ...restProps,
        };

        const validator = useValidator(props.value, props.rules, props.successMessage);

        const inputRef = useRef(null);
        const controlRef = useRef<HTMLDivElement>(null);
        const rootRef = useRef(null);
        const [filterText, setFilterText] = useState('');
        const [isOpened, setIsOpened] = useState(false);
        const [itemMap, setItemMap] = useState(new Map());

        useImperativeHandle(ref, () => ({
            focus() {
                controlRef?.current?.focus();
            },
            validate() {
                return validator.validate();
            },
            manualValidate(result: boolean, message?: string) {
                validator.manualValidate(result, message);
            },
            clearValidation() {
                validator.clearValidation();
            },
            scrollToComponent(options: ScrollIntoViewOptions = {behavior: 'smooth', block: 'center'}) {
                rootRef?.current?.scrollIntoView(options);
            },
        }));

        // endregion

        // region [Privates]

        const focusToControl = useCallback(() => {
            controlRef.current.focus();
        }, []);

        const modifyValue = useCallback(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (newItem: any): void => {
                if (props.multiple) {
                    if (props.value.includes(newItem)) {
                        onChange((props.value as string[]).filter((v) => v !== newItem));
                    } else {
                        onChange([...props.value, newItem]);
                    }
                } else {
                    onChange(newItem);
                }
            },
            [onChange, props.multiple, props.value]
        );

        const clearValue = useCallback((): void => {
            onChange('');
        }, [onChange]);

        const initItemMap = useCallback(() => {
            const map = new Map();
            props.items.forEach((item) => {
                map.set(item[props.valueKey], item);
            });
            setItemMap(map);
        }, [props.items, props.valueKey]);

        const close = useCallback(
            (setFocus: boolean): void => {
                setIsOpened(false);
                onClose?.();
                setFilterText('');
                if (setFocus) {
                    focusToControl();
                }
            },
            [focusToControl, onClose]
        );

        const open = useCallback((): void => {
            setIsOpened(true);
            onOpen?.();
            validator.clearValidation();
        }, [onOpen, validator]);

        const toggleIsOpened = useCallback((): void => {
            if (isOpened) {
                close(true);
            } else {
                open();
            }
        }, [close, isOpened, open]);

        // endregion

        // region [Styles]

        const getItemTemplate = useCallback(
            (item: TDropdownItem): string => {
                if (!item) {
                    return '';
                }

                return itemTemplate ? itemTemplate(item) : item[props.textKey];
            },
            [itemTemplate, props.textKey]
        );

        const getFilteredItems = useCallback((): TDropdownItem[] => {
            if (!props.multiple && filterText === getItemTemplate(itemMap.get(props.value))) {
                return props.items;
            }

            return props.items.filter((item) =>
                getItemTemplate(item).toLowerCase().includes(filterText?.toLowerCase())
            );
        }, [filterText, getItemTemplate, itemMap, props.items, props.multiple, props.value]);

        const rootClass = useMemo((): string => {
            const clazz: string[] = [];

            if (props.className) {
                clazz.push(props.className);
            }
            if (isOpened) {
                clazz.push('t-dropdown--open');
            }
            if (props.readOnly) {
                clazz.push('t-dropdown--read-only');
            }
            if (props.disabled) {
                clazz.push('t-dropdown--disabled');
            }
            if (props.dense) {
                clazz.push('t-dropdown--dense');
            }
            if (!validator.result) {
                clazz.push('t-dropdown--failure');
            }
            if (validator.result && validator.message) {
                clazz.push('t-dropdown--success');
            }

            clazz.push(`t-dropdown--${props.type}`);

            return clazz.join(' ');
        }, [
            isOpened,
            props.className,
            props.dense,
            props.disabled,
            props.readOnly,
            props.type,
            validator.message,
            validator.result,
        ]);

        const selectedClass = useMemo((): string => {
            const clazz: string[] = [];

            if (props.value?.length === 0) {
                clazz.push('t-dropdown__control__selected--empty');
            }

            return clazz.join(' ');
        }, [props.value?.length]);

        const itemsClass = useMemo((): string => {
            const clazz: string[] = [];

            if (isOpened) {
                clazz.push('t-dropdown__items--open');
            }
            if (props.noDetail) {
                clazz.push('t-dropdown__items--no-detail');
            }
            if (getFilteredItems().length === 0) {
                clazz.push('t-dropdown__items--empty');
            }

            return clazz.join(' ');
        }, [getFilteredItems, isOpened, props.noDetail]);

        const itemClass = useCallback(
            (item: TDropdownItem): string => {
                const clazz: string[] = [];

                if (typeof props.value === 'object' && props.value.includes(item[props.valueKey])) {
                    clazz.push('t-dropdown__items__item--selected');
                } else if (typeof props.value === 'string' && props.value === item[props.valueKey]) {
                    clazz.push('t-dropdown__items__item--selected');
                }

                return clazz.join(' ');
            },
            [props.value, props.valueKey]
        );

        const rootStyle = useMemo((): CSSProperties => {
            let style: CSSProperties = {};

            if (props.style) {
                style = {...props.style};
            }
            if (props.width) {
                style = {...style, width: props.width};
            }

            return style;
        }, [props.style, props.width]);

        // endregion

        // region [Events]

        const onClickControl = useCallback((): void => {
            toggleIsOpened();
            focusToControl();
        }, [focusToControl, toggleIsOpened]);

        const onClickClear = useCallback(
            (event: MouseEvent<HTMLSpanElement>) => {
                event.stopPropagation();
                clearValue();
            },
            [clearValue]
        );

        const onClickItem = useCallback(
            (itemValue: string): void => {
                modifyValue(itemValue);
                if (!props.multiple) {
                    close(true);
                }
            },
            [close, modifyValue, props.multiple]
        );

        const onblur = useCallback((): void => {
            if (!isOpened && !props.lazy) {
                validator.validate();
            }
        }, [isOpened, props.lazy, validator]);

        const onChangeFilterText = useCallback((value: string): void => {
            setFilterText(value);
        }, []);

        const onKeyDownFilterText = useCallback(
            (event: KeyboardEvent<HTMLInputElement>): void => {
                if (event.key === 'Escape') {
                    close(true);
                }
            },
            [close]
        );

        const onKeyDownControl = useCallback(
            (event: KeyboardEvent<HTMLInputElement>): void => {
                if (event.key === 'Escape') {
                    close(true);
                }
                if (event.key === 'Enter' || event.key === ' ') {
                    toggleIsOpened();
                }
            },
            [close, toggleIsOpened]
        );

        const onKeyDownItem = useCallback(
            (event: KeyboardEvent<HTMLDivElement>, itemValue: string): void => {
                if (event.key === 'Escape') {
                    close(true);
                }
                if (event.key === 'Enter') {
                    modifyValue(itemValue);
                    if (!props.multiple) {
                        focusToControl();
                        close(true);
                    }
                }
            },
            [close, focusToControl, modifyValue, props.multiple]
        );

        const onClearFilterText = useCallback((): void => {
            if (!props.multiple) {
                onChange('');
            }
        }, [onChange, props.multiple]);

        // endregion

        // region [Templates]

        const calculatedPlaceholder = useMemo((): string => {
            if (props.value?.length === 0) {
                return props.placeholder;
            }
            return null;
        }, [props.value, props.placeholder]);

        // endregion

        // region [Hooks - Lifecycle]

        useClickOutside(rootRef, () => close(false));

        useEffect(() => {
            initItemMap();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.items, props.valueKey]);

        // endregion

        return (
            <div
                ref={rootRef}
                className={`t-dropdown ${rootClass}`}
                style={rootStyle}
                onBlur={onblur}
                id={props.id}
                data-testid={'dropdown-root'}
            >
                {/* Control */}
                <div
                    className={'t-dropdown__control'}
                    tabIndex={props.disabled ? -1 : 0}
                    onKeyDown={onKeyDownControl}
                    ref={controlRef}
                    onClick={onClickControl}
                    data-testid={'dropdown-control'}
                >
                    {/* Control - Selected Items */}
                    <div className={`t-dropdown__control__selected ${selectedClass}`}>
                        {/* Placeholder */}
                        {calculatedPlaceholder}

                        {/* Multiple Chip */}
                        {props.multiple &&
                            props.chip &&
                            (props.value as string[]).map((value) => (
                                <TChip key={value} onRemove={props.disabled ? null : () => onClickItem(value)}>
                                    {getItemTemplate(itemMap.get(value))}
                                </TChip>
                            ))}

                        {/* Multiple Text */}
                        {props.multiple &&
                            !props.chip &&
                            (props.value as string[]).map((value) => getItemTemplate(itemMap.get(value))).join(', ')}

                        {/* Single Text */}
                        {!props.multiple && getItemTemplate(itemMap.get(props.value))}
                    </div>

                    {/* Control - Remover, Opener */}
                    {!props.multiple && props.value && !props.noClearButton && (
                        <TIcon
                            className={'t-dropdown__control__remover'}
                            small
                            fill
                            color={themeToken.tGrayColor3}
                            onClick={onClickClear}
                        >
                            cancel
                        </TIcon>
                    )}
                    <TIcon
                        className={`t-dropdown__control__opener ${isOpened ? 't-dropdown__control__opener--open' : ''}`}
                        color={props.disabled || props.readOnly ? themeToken.tGrayColor4 : themeToken.tGrayColor6}
                    >
                        arrow_drop_down
                    </TIcon>
                </div>

                {/* Floating */}
                <div className={`t-dropdown__items ${itemsClass}`}>
                    {/* Control - Filter Text */}
                    <TTextField
                        ref={inputRef}
                        className={'t-dropdown__items__filter-text'}
                        value={filterText}
                        placeholder={props.filterPlaceholder}
                        disabled={props.disabled}
                        noTrim
                        searchable
                        dense={props.dense}
                        onChange={onChangeFilterText}
                        onClear={onClearFilterText}
                        onKeyDown={onKeyDownFilterText}
                    />
                    <div className={'t-dropdown__items__wrapper'}>
                        {isOpened &&
                            getFilteredItems().map((item) => (
                                <div
                                    key={item[props.valueKey]}
                                    className={`t-dropdown__items__item ${itemClass(item)}`}
                                    tabIndex={props.multiple ? -1 : 0}
                                    onClickCapture={() => onClickItem(item[props.valueKey])}
                                    onKeyDown={(event: KeyboardEvent<HTMLDivElement>) =>
                                        onKeyDownItem(event, item[props.valueKey])
                                    }
                                >
                                    {props.multiple && (
                                        <TCheckbox
                                            className={'t-dropdown__items__item__checkbox'}
                                            checked={(props.value as string[]).includes(item[props.valueKey])}
                                        />
                                    )}
                                    <THighlightText keyword={filterText}>{getItemTemplate(item)}</THighlightText>
                                </div>
                            ))}
                        {isOpened && getFilteredItems().length === 0 && (
                            <div className={'t-dropdown__items__item t-dropdown__items__item--no-result'}>
                                검색 결과가 없습니다.
                            </div>
                        )}
                    </div>
                </div>

                {/* Details */}
                {!props.noDetail && (
                    <div className={'t-dropdown__details'}>
                        <div className={'t-dropdown__details__message'}>
                            {validator.message && `${validator.message}`}
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

TDropdown.displayName = 'TDropdown';

export default memo(TDropdown);
