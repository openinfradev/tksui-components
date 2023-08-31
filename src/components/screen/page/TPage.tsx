import {MouseEvent, MouseEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import TIcon from '../../icon/TIcon';
import {TPageProps} from './TPage.interface';

const defaultPanelWidth = '360px';

export default function TPage(props: TPageProps) {

    // region [Hooks]

    const [isInfoPanelOpened, setIsInfoPanelOpened] = useState<boolean>(false);
    const [isInfoPanelResizing, setIsInfoPanelResizing] = useState<boolean>(false);

    const [panelWidth, setPanelWidth] = useState<string>(defaultPanelWidth);
    const rootRef = useRef<HTMLDivElement>(null);


    // endregion


    // region [Events]

    const onClickInfoClose = useCallback(() => {
        setIsInfoPanelOpened(false);
    }, []);


    // TODO. info panel 별도 컴포넌트로 분리, 드래그 관련 기능 util로 분리, 너비 minmax 변수화
    const onMouseDown = ((clickEvent: MouseEvent): void => {
        clickEvent.stopPropagation();

        const mouseMoveHandler = (mouseEvent): void => {
            const width: number = window.innerWidth - mouseEvent.pageX;

            setIsInfoPanelResizing(true);

            if (width <= 700) {
                const lnbWidth: number = rootRef.current.getBoundingClientRect().x;
                setPanelWidth(`calc(100% - ${mouseEvent.pageX - lnbWidth}px)`);
            }
            if (width <= 200) {
                setPanelWidth(defaultPanelWidth);
                setIsInfoPanelOpened(false);
                document.removeEventListener('mousemove', mouseMoveHandler);
            }
        };

        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            setIsInfoPanelResizing(false);
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler, {once: true});
    }) as MouseEventHandler;


    // endregion


    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (isInfoPanelResizing) { clazz.push('t-page--resizing'); }

        return clazz.join(' ');
    }, [isInfoPanelResizing, props.className]);


    const infoPanelClass = useMemo((): string => {
        const clazz: string[] = [];

        if (isInfoPanelOpened) {
            clazz.push('t-page__information-area--visible');
        } else {
            clazz.push('t-page__information-area--invisible');
        }

        if (isInfoPanelResizing) { clazz.push('t-page__information-area--resizing'); }

        return clazz.join(' ');
    }, [isInfoPanelOpened, isInfoPanelResizing]);

    // endregion


    // region [Hooks - Lifecycles]

    useEffect(() => {
        if (isInfoPanelOpened) {
            setIsInfoPanelOpened(true);
            setIsInfoPanelResizing(false);
        }
    }, [isInfoPanelOpened]);

    // endregion


    return (
        <div className={`t-page ${rootClass}`}
             style={props.style}
             ref={rootRef}>
            <div className={'t-page__content-container'}>
                <div className={'t-page__title-area'}>
                    <h1>{props.title}</h1> {isInfoPanelOpened}

                    {
                        props.infoPanelContent && (
                            <TIcon type={'outlined'}
                                   small
                                   clickable
                                   onClick={() => { setIsInfoPanelOpened(!isInfoPanelOpened); }}>t_information</TIcon>
                        )
                    }
                </div>

                <article className={'t-page__content-area'}>
                    {props.children}
                </article>
            </div>

            {
                props.infoPanelContent && (
                    <div className={`t-page__information-area ${infoPanelClass}`}
                         style={isInfoPanelOpened ? {flex: `0 0 ${panelWidth}`} : {}}>
                        <div className={'t-page__information-area__resizer'}
                             onMouseDown={onMouseDown}
                        />
                        <div className={'t-page__information-area__container'}>
                            <div className={'t-page__information-area__header'}>
                                <TIcon className={'t-page__information-area__header__close'}
                                       clickable
                                       onClick={onClickInfoClose}>close</TIcon>
                            </div>
                            <div className={'t-page__information-area__content'}>
                                {props.infoPanelContent}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
