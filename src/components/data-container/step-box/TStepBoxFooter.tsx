import {useCallback, useContext, useMemo} from 'react';
import {TStepBoxFooterProps} from './TStepBox.interface';
import TButton from '~/button/button/TButton';
import TStepBoxContext from '~/data-container/step-box/TStepBoxContext';

const TStepBoxFooter = (props: TStepBoxFooterProps) => {

    // region [Hooks]

    const context = useContext(TStepBoxContext);

    // endregion


    // region [Privates]

    const currentStepContent = useMemo(() => {
        return (
            props.content.filter(
                (item) => item.stepNumber === context.currentStep,
            )
        )[0];
    }, [context.currentStep, props.content]);

    const validateStep = useCallback(() => {
        if (!currentStepContent.validateStep) {
            return true;
        }

        return currentStepContent.validateStep();
    }, [currentStepContent]);


    // endregion


    // region [Events]

    const onClickPrev = useCallback(() => {
        context.onChangeCurrentStep(context.currentStep - 1);
    }, [context]);

    const onClickNext = useCallback(() => {
        if (!validateStep()) {
            return;
        }

        if (context.currentStep < context.totalStep) {
            context.onChangeCurrentStep(context.currentStep + 1);
        }
    }, [context, validateStep]);

    // endregion

    // region [Templates]

    // endregion


    return (
        <div className={'t-step-box-footer'}>
            <div className={'t-step-box-footer__left-action'}>
                <TButton large disabled={context.currentStep === 1} onClick={onClickPrev}>{props.prevButtonLabel}</TButton>
            </div>
            <div className={'t-step-box-footer__right-action'}>
                {
                    currentStepContent.customNextButton
                        ? currentStepContent.customNextButton
                        : <TButton large onClick={onClickNext}>
                            {
                                (context.currentStep < context.totalStep)
                                    ? props.nextButtonLabel
                                    : props.completeButtonLabel
                            }
                        </TButton>
                }
            </div>
        </div>
    );
};


export default TStepBoxFooter;
