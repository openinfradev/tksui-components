import {CSSProperties, useMemo} from 'react';
import TModal from '../../screen/modal/TModal';
import {TProgressProps, TLoadingIndicator} from '@/components';


function TProgress(props: TProgressProps) {

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle: CSSProperties = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }

        return style;
    }, [props.style]);


    return (
        <TModal containerId={props.containerId}
                isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                className={`t-progress ${rootClass}`}
                style={rootStyle}
                overlayClassName={'t-progress__overlay'}
                bodyClassName={'t-progress__modal-body'}>
            {/* Spinner */}
            <div className='t-progress__spinner__wrapper'>
                <TLoadingIndicator size={'xlarge'} />
            </div>

            {/* Message */}
            <div className={'t-progress__message'}>{props.message}</div>
        </TModal>
    );
}

TProgress.defaultProps = {
    message: '잠시만 기다려 주십시오',
    containerId: 'root',
};


export default TProgress;
