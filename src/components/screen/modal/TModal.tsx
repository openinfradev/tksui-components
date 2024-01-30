import React, {MouseEvent, useCallback, useMemo, useRef, useEffect} from 'react';
import {createPortal} from 'react-dom';
import ReactModal from 'react-modal';
import TIcon from '../../icon/TIcon';
import {modalSize, TModalProps} from './TModal.interface';
import themeToken from '~style/designToken/ThemeToken.module.scss';

export default function TModal(props: TModalProps): JSX.Element {

    // region [Consts]
    const modalRef = useRef(null);
    const {onRequestClose} = props;

    const documentRoot: HTMLElement = document.getElementById(props.containerId) as HTMLElement;
    ReactModal.setAppElement(`#${props.containerId}`);

    // endregion


    // region [Privates]

    const closeModal = useCallback((e: MouseEvent) => {

        onRequestClose(e);
    }, [onRequestClose]);

    // endregion


    // region [Styles]

    const $_size = useMemo(() => {
        if (props.size) { return props.size; }
        if (props.small) { return modalSize.sm; }
        if (props.medium) { return modalSize.md; }
        if (props.large) { return modalSize.lg; }
        if (props.xlarge) { return modalSize.xlg; }
        if (props.xxlarge) { return modalSize.xxlg; }
        return modalSize.md;
    }, [props.large, props.medium, props.size, props.small, props.xlarge, props.xxlarge]);

    const bodyClassName = useMemo(() => {
        const clazz: string[] = [];

        if (props.bodyClassName) clazz.push(props.bodyClassName);
        clazz.push(`t-modal__overlay__body--${$_size}`);

        return clazz.join(' ');
    }, [$_size, props]);

    // endregion

    // region [Effect]

    useEffect(() => {
        if (props.testId) {
            modalRef.current?.node.setAttribute('data-testid', props.testId);
        }
    }, [props.testId]);

    // endregion


    return createPortal(
        (
            // Official document: https://reactcommunity.org/react-modal/
            <ReactModal ref={modalRef}
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
            >
                {/* Close Button */}
                <TIcon className={'t-modal__overlay__body__close-icon'}
                       color={themeToken.tGrayColor5}
                       clickable onClick={(e) => { closeModal(e); }}>close</TIcon>
                {/* Modal Header */}
                <header className={'t-modal__overlay__body__header'}>
                    {
                        props.header ? props.header : <h2 className={'t-modal__overlay__body__header__text'}>{props.title}</h2>
                    }
                </header>

                {/* Modal Content */}
                <section className={'t-modal__overlay__body__content'}>
                    {props.children}
                </section>

                {/* Modal Footer */}
                <footer className={'t-modal__overlay__body__footer'}>
                    {props.footer}
                </footer>

            </ReactModal>
        ),
        documentRoot,
    );
}

TModal.defaultProps = {
    containerId: 'root',
};

