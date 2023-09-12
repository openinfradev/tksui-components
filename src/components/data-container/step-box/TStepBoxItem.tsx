import {CSSProperties, useMemo} from 'react';
import {TStepBoxItemProps} from './TStepBox.interface';
import TStepBoxFooter from '~/data-container/step-box/TStepBoxFooter';

const TStepBoxItem = (props: TStepBoxItemProps) => {

    const {className, style} = props;

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) { clazz.push(className); }

        return clazz.join(' ');
    }, [className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (style) { return style; }
        return {};
    }, [style]);


    return (
        <div className={`t-step-box-item ${rootClass}`} style={rootStyle}>
            {props.children}
        
            <TStepBoxFooter prevButtonLabel={props.prevButtonLabel}
                            nextButtonLabel={props.nextButtonLabel}
                            completeButtonLabel={props.completeButtonLabel}
                            customNextButton={props.customNextButton}
                            validateStep={props.validateStep}
                            onClickNext={props.onClickNext}
                            onClickPrev={props.onClickPrev}
            />

        </div>
    );
};

TStepBoxItem.displayName = 'TStepBoxItem';


export default TStepBoxItem;
