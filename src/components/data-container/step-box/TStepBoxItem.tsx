import {CSSProperties, useContext, useMemo} from 'react';
import {TStepBoxItemProps} from './TStepBox.interface';
import TStepBoxFooter from '~/data-container/step-box/TStepBoxFooter';
import TStepBoxContext from '~/data-container/step-box/TStepBoxContext';

const TStepBoxItem = (props: TStepBoxItemProps) => {

    // region [Hooks]

    const stepBoxContext = useContext(TStepBoxContext);

    // endregion


    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (props.style) { return props.style; }
        return {};
    }, [props.style]);

    // endregion


    return (
        <div className={`t-step-box-item ${rootClass}`} style={rootStyle}>
            {props.children ?? props.children}

            <TStepBoxFooter prevButtonLabel={props.prevButtonLabel ?? stepBoxContext.prevButtonLabel}
                            nextButtonLabel={props.nextButtonLabel ?? stepBoxContext.nextButtonLabel}
                            nextButtonDisabled={props.nextButtonDisabled}
                            completeButtonLabel={props.completeButtonLabel ?? stepBoxContext.completeButtonLabel }
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
