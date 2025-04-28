'use client';

import type {MouseEvent} from 'react';
import React, {memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import ReactModal from 'react-modal';

import type {TModalProps} from '@/components';
import {modalSize, TIcon} from '@/components';

import themeToken from '~style/designToken/ThemeToken.module.scss';

const TModal = ({appId = 'root', portalId, onRequestClose, ...restProps}: TModalProps) => {
    // region [Hooks]

    const props: TModalProps = {appId, portalId, onRequestClose, ...restProps};

    const modalRef = useRef(null);

    const [documentRoot, setDocumentRoot] = useState<HTMLElement | null>(null);

    // endregion

    // region [Privates]

    const closeModal = useCallback(
        (e: MouseEvent) => {
            onRequestClose(e);
        },
        [onRequestClose]
    );

    const parentSelector = useMemo(() => {
        if (portalId) {
            return () => document.querySelector(`#${portalId}`) as HTMLElement;
        }

        return undefined;
    }, [portalId]);

    // endregion

    // region [Styles]

    const $_size = useMemo(() => {
        if (props.size) {
            return props.size;
        }
        if (props.small) {
            return modalSize.sm;
        }
        if (props.medium) {
            return modalSize.md;
        }
        if (props.large) {
            return modalSize.lg;
        }
        if (props.xlarge) {
            return modalSize.xlg;
        }
        if (props.xxlarge) {
            return modalSize.xxlg;
        }
        return modalSize.md;
    }, [props.large, props.medium, props.size, props.small, props.xlarge, props.xxlarge]);

    const bodyClassName = useMemo(() => {
        const clazz: string[] = [];

        if (props.bodyClassName) {
            clazz.push(props.bodyClassName);
        }
        clazz.push(`t-modal__overlay__body--${$_size}`);

        return clazz.join(' ');
    }, [$_size, props.bodyClassName]);

    // endregion

    // region [Events]

    const onClickCloseButton = useCallback(
        (e: MouseEvent) => closeModal(e),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    // endregion

    // region [Effect]

    useLayoutEffect(() => {
        const rootElement: HTMLElement = document.getElementById(props.appId);

        setDocumentRoot(rootElement);
        ReactModal.setAppElement(rootElement);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // endregion

    return (
        documentRoot &&
        createPortal(
            // Official document: https://reactcommunity.org/react-modal/
            <ReactModal
                ref={modalRef}
                id={props.id}
                isOpen={props.isOpen}
                contentLabel={props.contentLabel}
                onAfterOpen={props.onAfterOpen}
                onAfterClose={() => props.onAfterClose?.()}
                onRequestClose={(event: React.MouseEvent | React.KeyboardEvent) => props.onRequestClose(event)}
                bodyOpenClassName={'t-modal-body--open'}
                portalClassName={`t-modal ${props.className ?? ''}`.trim()}
                overlayClassName={`t-modal__overlay ${props.overlayClassName ?? ''}`.trim()}
                className={`t-modal__overlay__body ${bodyClassName ?? ''}`.trim()}
                closeTimeoutMS={200}
                shouldCloseOnOverlayClick={false}
                testId={props.testId}
                parentSelector={parentSelector}
            >
                {/* Close Button */}
                <TIcon
                    className={'t-modal__overlay__body__close-icon'}
                    color={themeToken.tGrayColor5}
                    clickable
                    onClick={onClickCloseButton}
                >
                    close
                </TIcon>
                {/* Modal Header */}
                <header className={'t-modal__overlay__body__header'}>
                    {props.header ? (
                        props.header
                    ) : (
                        <h2 className={'t-modal__overlay__body__header__text'}>{props.title}</h2>
                    )}
                </header>

                {/* Modal Content */}
                <section className={'t-modal__overlay__body__content'}>{props.children}</section>

                {/* Modal Footer */}
                <footer className={'t-modal__overlay__body__footer'}>{props.footer}</footer>
            </ReactModal>,
            documentRoot
        )
    );
};

export default memo(TModal);
