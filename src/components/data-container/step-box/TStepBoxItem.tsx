import {TStepBoxItemProps} from './TStepBox.interface';
import TStepBoxFooter from '~/data-container/step-box/TStepBoxFooter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TStepBoxItem = (props: TStepBoxItemProps) => {
    return (<div className={'t-step-box-item'}>
        {props.children}
        
        <TStepBoxFooter prevButtonLabel={props.prevButtonLabel}
                        nextButtonLabel={props.nextButtonLabel}
                        completeButtonLabel={props.completeButtonLabel}
                        customNextButton={props.customNextButton}
                        validateStep={props.validateStep}
                        onClickNext={props.onClickNext}
                        onClickPrev={props.onClickPrev}
        />

    </div>);
};

TStepBoxItem.displayName = 'TStepBoxItem';


export default TStepBoxItem;
