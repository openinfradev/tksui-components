// eslint-disable-next-line max-len
import React, {
    CSSProperties,
    ForwardedRef,
    forwardRef,
    MouseEvent,
    MouseEventHandler,
    ReactNode,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import {createRoot} from 'react-dom/client';

import {DropHolderAlignment, TDropHolderItem, TDropHolderProps, TDropHolderRef} from '@/components';
import useClickOutside from '@/common/hook/UseClickOutside';
import {TIcon} from '~/icon';
import themeToken from '~style/designToken/ThemeToken.module.scss';


const anchorClass = {
    wrapper: 't-drop-holder__anchor__wrapper',
    container: 't-drop-holder__anchor__container',
};


const TDropHolder = forwardRef((props: TDropHolderProps, ref: ForwardedRef<TDropHolderRef>) => {

    // region [Hooks]

    const [isOpened, setIsOpened] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const rootRef = useRef<HTMLDivElement>(null);
    useClickOutside(rootRef, () => close());


    useImperativeHandle(ref, () => ({
        open() { open(); },
        close() { close(); },
    }));

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

        if (item.disabled) { clazz.push('t-drop-holder__anchor__items__item--disabled'); }
        if (item.divideSection) { clazz.push('t-drop-holder__anchor__items__item--divider'); }

        return clazz.join(' ');
    }, []);


    const rootStyle = useMemo((): CSSProperties => {

        let style: CSSProperties = {};

        if (props.style) { style = {...style, ...props.style}; }

        return style;
    }, [props.style]);


    const itemsStyle = useCallback((): CSSProperties => {
        const {width, height} = rootRef.current?.getBoundingClientRect() ?? {width: 0, height: 0};

        if (props.alignment === 'top-left') {
            return {transform: `translateY(calc(-100% - ${height}px)) translateX(0)`};
        }
        if (props.alignment === 'top-center') {
            return {transform: `translateY(calc(-100% - ${height}px)) translateX(calc(-50% + ${width / 2}px))`};
        }
        if (props.alignment === 'top-right') {
            return {transform: `translateY(calc(-100% - ${height}px)) translateX(calc(-100% + ${width}px)`};
        }
        if (props.alignment === 'bottom-left') {
            return {transform: 'translateX(0)'};
        }
        if (props.alignment === 'bottom-center') {
            return {transform: `translateX(calc(-50% + ${width / 2}px))`};
        }
        if (props.alignment === 'bottom-right') {
            return {transform: `translateX(calc(-100% + ${width}px)`};
        }

        return {transform: `translateX(calc(-50% + ${width / 2}px))`}; // bottom-center
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.alignment, scrollY]);

    // endregion


    // region [Events]

    const onClickRoot = (): void => {
        if (isOpened) {
            close();
        } else {
            open();
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onClickItem = (event: MouseEvent, handler: MouseEventHandler): void => {
        event.stopPropagation();
        if (handler) { handler(event); }
        close();
    };

    // endregion


    // region [Templates]

    const getItemTemplate = useCallback((item: TDropHolderItem): ReactNode => {

        if (item.itemTemplate) { return item.itemTemplate(item); }
        if (props.itemTemplate) { return props.itemTemplate(item); }

        return (<>
            {
                item.icon && (
                    <TIcon className={'t-drop-holder__anchor__items__item__icon'} small color={themeToken.tGrayColor5}>
                        {item.icon}
                    </TIcon>

                )
            }
            <span className={'t-drop-holder__anchor__items__item__text'}>{item[props.textKey]}</span>
        </>);
    }, [props]);

    const TDropHolderAnchor = useMemo(() => {

        return (
            !props.customItem ? (
                <ul className={'t-drop-holder__anchor__items'} style={itemsStyle()} data-testid={'t-drop-holder__anchor__items'}>
                    {
                        props.title && (
                            <li className={'t-drop-holder__anchor__items__title'} data-testid={'drop-holder-title'}>
                                <strong>{props.title}</strong>
                            </li>
                        )
                    }
                    {
                        props.items?.map((item, index) => (
                            <li key={index}
                                className={`t-drop-holder__anchor__items__item ${itemClass(item)}`}
                                onClick={(event) => onClickItem(event, item.onClick)}
                            >
                                {getItemTemplate(item)}
                            </li>
                        ))
                    }
                </ul>
            ) : (
                <div className={'t-drop-holder__anchor__items t-drop-holder__anchor__items--custom'} style={itemsStyle()}>
                    {props.customItem}
                </div>
            )
        );
    }, [props.customItem, props.title, props.items, itemsStyle, itemClass, getItemTemplate, onClickItem]);

    // endregion

    // region [Privates]

    const open = useCallback((): void => {
        setIsOpened(true);
        props.onOpen?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onOpen]);

    const close = useCallback((): void => {
        setIsOpened(false);
        props.onClose?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onClose]);

    const observeScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    const addScrollEvent = useCallback(() => {
        window.addEventListener('scroll', observeScroll, {passive: true});
    }, [observeScroll]);

    const removeScrollEvent = useCallback(() => {
        window.removeEventListener('scroll', observeScroll);
    }, [observeScroll]);

    const setAnchorRootStyle = useCallback((anchorRoot: HTMLDivElement) => {
        const {top, left, height} = rootRef.current.getBoundingClientRect();

        anchorRoot.style.setProperty('position', 'fixed');
        anchorRoot.style.setProperty('zIndex', '9999');
        if (props.alignment.includes('bottom')) {
            anchorRoot.style.setProperty('top', `calc(${top + height}px + ${props.offset})`);
        }
        if (props.alignment.includes('top')) {
            anchorRoot.style.setProperty('top', `calc(${top + height}px - ${props.offset})`);
        }

        anchorRoot.style.setProperty('left', `${left}px`);
    }, [props.alignment, props.offset]);

    const createAnchorRoot = useCallback(() => {

        const dropHolderWrap = document.createElement('div');

        dropHolderWrap.classList.add(anchorClass.wrapper);
        setAnchorRootStyle(dropHolderWrap);
        document.body.appendChild(dropHolderWrap);

        const element = React.createElement('div', {className: anchorClass.container}, TDropHolderAnchor);

        createRoot(dropHolderWrap).render(element);
        addScrollEvent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [TDropHolderAnchor, setAnchorRootStyle]);

    const removeAnchorRoot = useCallback(() => {

        const dropHolderWrap = document.body.getElementsByClassName(anchorClass.wrapper);
        dropHolderWrap[0]?.remove();
        removeScrollEvent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // endregion


    // region [LifeCycles]

    useEffect(() => {

        if (isOpened) {
            createAnchorRoot();
        } else { removeAnchorRoot(); }

        return () => { removeAnchorRoot(); };
    }, [createAnchorRoot, isOpened, removeAnchorRoot]);

    // endregion


    return (
        <div className={`t-drop-holder ${rootClass}`}
             style={rootStyle}
             id={props.id}
             ref={rootRef}
             onClick={onClickRoot}
             data-testid={'drop-holder-root'}
        >
            <div className={'t-drop-holder__holder'} data-testid={'drop-holder-holder'}>
                {props.children}
            </div>
        </div>
    );

});

TDropHolder.defaultProps = {
    alignment: 'bottom-center' as DropHolderAlignment,
    textKey: 'text',
    offset: '4px',
};

TDropHolder.displayName = 'TDropHolder';


export default TDropHolder;
