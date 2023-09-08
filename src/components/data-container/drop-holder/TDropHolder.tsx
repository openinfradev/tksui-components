import {CSSProperties, MouseEvent, MouseEventHandler, ReactNode, useCallback, useMemo, useRef, useState} from 'react';
import {DropHolderAlignment, TDropHolderItem, TDropHolderProps} from './TDropHolder.interface';
import useClickOutside from '@/common/hook/UseClickOutside';


const TDropHolder = (props: TDropHolderProps) => {

    // region [Hooks]

    const [isOpened, setIsOpened] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    useClickOutside(rootRef, () => close());

    // endregion


    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (isOpened) { clazz.push('t-drop-holder--open'); }

        return clazz.join(' ');
    }, [props.className, isOpened]);

    const itemClass = useCallback((item: TDropHolderItem): string => {
        const clazz: string[] = [];

        if (item.disabled) { clazz.push('t-drop-holder__items__item--disabled'); }
        if (item.divideSection) { clazz.push('t-drop-holder__items__item--divider'); }

        return clazz.join(' ');
    }, []);


    const rootStyle = useMemo((): CSSProperties => {

        let style: CSSProperties = {};

        if (props.style) style = {...style, ...props.style};

        return style;
    }, [props.style]);


    const anchorStyle = useMemo((): CSSProperties => {
        if (props.alignment === 'top-left') { return {top: `calc(0px - ${props.offset})`, left: '0'}; }
        if (props.alignment === 'top-center') { return {top: `calc(0px - ${props.offset})`, left: '50%'}; }
        if (props.alignment === 'top-right') { return {top: `calc(0px - ${props.offset})`, right: '0'}; }
        if (props.alignment === 'bottom-left') { return {top: `calc(100% + ${props.offset})`, left: '0'}; }
        if (props.alignment === 'bottom-center') { return {top: `calc(100% + ${props.offset})`, left: '50%'}; }
        if (props.alignment === 'bottom-right') { return {top: `calc(100% + ${props.offset})`, right: '0'}; }

        return {top: '100%', right: '0'}; // bottom-center
    }, [props.alignment, props.offset]);

    const itemsStyle = useMemo((): CSSProperties => {
        if (props.alignment === 'top-left') { return {transform: 'translateY(-100%) translateX(0)'}; }
        if (props.alignment === 'top-center') { return {transform: 'translateY(-100%) translateX(-50%)'}; }
        if (props.alignment === 'top-right') { return {transform: 'translateY(-100%) translateX(-100%)'}; }
        if (props.alignment === 'bottom-left') { return {transform: 'translateX(0)'}; }
        if (props.alignment === 'bottom-center') { return {transform: 'translateX(-50%)'}; }
        if (props.alignment === 'bottom-right') { return {transform: 'translateX(-100%)'}; }

        return {transform: 'translateX(-50%)'}; // bottom-center
    }, [props.alignment]);

    // endregion


    // region [Events]

    const onClickRoot = (): void => {
        if (isOpened) {
            close();
        } else {
            open();
        }
    };

    const onClickItem = (event: MouseEvent, handler: MouseEventHandler): void => {
        event.stopPropagation();
        if (handler) { handler(event); }
        close();
    };

    // endregion


    // region [Privates]

    const open = (): void => {
        setIsOpened(true);
    };

    const close = (): void => {
        setIsOpened(false);
    };

    // endregion


    // region [Templates]


    const getItemTemplate = useCallback((item: TDropHolderItem): ReactNode => {
        if (item.itemTemplate) {
            return item.itemTemplate(item);
        }
        if (props.itemTemplate) {
            return props.itemTemplate(item);
        }
        return (<div>{item[props.textKey]}</div>);
    }, [props]);

    // endregion

    return (
        <div className={`t-drop-holder ${rootClass}`}
             style={rootStyle}
             ref={rootRef}
             onClick={onClickRoot}>
            <div className={'t-drop-holder__anchor'} style={anchorStyle}>
                {
                    isOpened && (
                        !props.customItem ? (
                            <div className={'t-drop-holder__items'} style={itemsStyle}>
                                {
                                    props.items?.map((item, index) => (
                                        <div key={index}
                                             className={`t-drop-holder__items__item ${itemClass(item)}`}
                                             onClick={(event) => onClickItem(event, item.onClick)}
                                        >
                                            {getItemTemplate(item)}
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className={'t-drop-holder__items t-drop-holder__items--custom'} style={itemsStyle}>
                                {
                                    props.customItem
                                }
                            </div>
                        )

                    )
                }
            </div>
            <div className={'t-drop-holder__holder'}>
                {props.children}
            </div>
        </div>
    );

};

TDropHolder.defaultProps = {
    alignment: 'bottom-center' as DropHolderAlignment,
    textKey: 'text',
    offset: '4px',
};

TDropHolder.displayName = 'TDropHolder';


export default TDropHolder;
