import {CSSProperties, useCallback, useMemo, useState} from 'react';
import TModal from '../../screen/modal/TModal';
import {TProgressProps} from './TProgress.interface';


function TProgress(props: TProgressProps) {

    // region [Hooks]

    const [message, setMessage] = useState('');

    // endregion


    // region [Styles]

    const rootClass: string = useMemo((): string => {

        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');

    }, [props.className]);

    const rootStyle: CSSProperties = useMemo((): CSSProperties => {

        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;

    }, [props.style]);

    // endregion


    // region [Privates]

    const onAfterOpen = useCallback((): void => {

        setMessage(props.openMessage);
        setMessage(props.message);

    }, [props.openMessage, props.message]);

    const onAfterClose = useCallback((): void => {

        setMessage(props.closeMessage);

    }, [props.closeMessage]);

    // endregion


    return (
        <TModal containerId={props.containerId}
                isOpen={props.isOpen}
                onAfterOpen={onAfterOpen}
                onAfterClose={onAfterClose}
                onRequestClose={props.onRequestClose}
                className={`t-progress ${rootClass}`}
                style={rootStyle}
                overlayClassName={'t-progress__overlay'}
                bodyClassName={'t-progress__modal-body'}>
            {/* Spinner */}
            <div className={'t-progress__spinner'}>
                <div className={'t-progress__spinner__slice'}/>
                <div className={'t-progress__spinner__slice'}/>
                <div className={'t-progress__spinner__slice'}/>
            </div>

            {/* Message */}
            <div className={'t-progress__message'}
                 aria-live={'assertive'}
                 role={props.isOpen ? 'alert' : null}>{message}</div>
        </TModal>
    );
}

TProgress.defaultProps = {
    message: '잠시만 기다려 주십시오',
    openMessage: '로딩을 시작합니다',
    closeMessage: '로딩이 완료되었습니다',
    containerId: 'root',
};


export default TProgress;
