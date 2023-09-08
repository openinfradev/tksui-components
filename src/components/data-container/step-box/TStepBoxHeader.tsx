import {useCallback, useContext} from 'react';
import {TStepBoxHeaderProps} from './TStepBox.interface';
import TStepBoxContext from './TStepBoxContext';
import TIcon from '~/icon/TIcon';

const TStepBoxHeader = (props: TStepBoxHeaderProps) => {

    // region [Hooks]

    const context = useContext(TStepBoxContext);

    // endregion


    // region [Templates]

    const numberClass = useCallback((stepNumber: number): string => {
        const clazz: string[] = [];

        if (stepNumber < context.currentStep) {
            clazz.push('t-step-box-header__step__number--prev');
        } else if (stepNumber === context.currentStep) {
            clazz.push('t-step-box-header__step__number--current');
        } else {
            clazz.push('t-step-box-header__step__number--next');
        }

        return clazz.join(' ');
    }, [context.currentStep]);

    const connectorClass = useCallback((stepNumber: number): string => {
        const clazz: string[] = [];

        if (stepNumber < context.currentStep) {
            clazz.push('t-step-box-header__connector--prev');
        } else if (stepNumber === context.currentStep) {
            clazz.push('t-step-box-header__connector--current');
        } else {
            clazz.push('t-step-box-header__connector--next');
        }

        return clazz.join(' ');
    }, [context.currentStep]);

    // endregion


    // region [Events]


    // endregion

    return (

        <ul className={'t-step-box-header'}>
            {
                props.content.map((item, index) => {
                    return (<>
                        {
                            (index > 0) && (
                                <div className={`t-step-box-header__connector ${connectorClass(item.stepNumber)}`}/>
                            )
                        }

                        <li key={item.stepNumber} className={'t-step-box-header__step'}>

                            <div className={`t-step-box-header__step__number ${numberClass(item.stepNumber)}`}>
                                {/* Number */}
                                <div className={'t-step-box-header__step__number__inner'}>
                                    {
                                        (item.stepNumber < context.currentStep)
                                            ? <TIcon size={'xlarge'}>t_done</TIcon>
                                            : item.stepNumber
                                    }
                                </div>

                                {/* Label */}
                                <div className={'t-step-box-header__step__label'}>{item.label}</div>
                            </div>

                        </li>
                    </>
                    );
                })
            }
        </ul>

    );
};

TStepBoxHeader.defaultProps = {};

TStepBoxHeader.displayName = 'TStepBox';


export default TStepBoxHeader;
