import {useCallback, useContext} from 'react';
import {TStepBoxFooterProps} from '@/components';
import TButton from '~/button/button/TButton';
import TStepBoxContext from '~/data-container/step-box/TStepBoxContext';

const TStepBoxFooter = (props: TStepBoxFooterProps) => {

    // region [Hooks]

    const context = useContext(TStepBoxContext);

    // endregion


    // region [Privates]

    const validateStep = useCallback(() => {
        if (!props.validateStep) {
            return true;
        }

        return props.validateStep();
    }, [props]);


    // endregion


    // region [Events]

    const onClickPrev = useCallback(() => {
        context.onChangeCurrentStep(context.currentStep - 1);
    }, [context]);

    const onClickNext = useCallback(() => {
        if (!validateStep()) {
            return;
        }

        if (props.onClickNext) {
            props.onClickNext();
        }
        if (context.currentStep < context.totalStep) {
            context.onChangeCurrentStep(context.currentStep + 1);
        }
    }, [context, props, validateStep]);

    // endregion

    // region [Templates]

    // endregion


    return (
        <div className={'t-step-box-footer'} data-testid={'step-box-footer-root'}>
            <div className={'t-step-box-footer__left-action'}>
                <TButton large disabled={context.currentStep === 1} onClick={onClickPrev}>{props.prevButtonLabel}</TButton>
            </div>
            <div className={'t-step-box-footer__right-action'}>
                {
                    props.customNextButton
                        ? props.customNextButton
                        : <TButton large onClick={onClickNext} main disabled={props.nextButtonDisabled}>
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
