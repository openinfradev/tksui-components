import {CSSProperties, ReactElement, useMemo} from 'react';
import {TStepBoxProps} from './TStepBox.interface';
import TStepBoxContext from './TStepBoxContext';
import TStepBoxHeader from '~/data-container/step-box/TStepBoxHeader';
import TStepBoxItem from '~/data-container/step-box/TStepBoxItem';

const TStepBox = (props: TStepBoxProps) => {

    // region [Hooks]

    const {value, children, style, className} = props;

    // endregion

    const headerContent: {stepNumber: number, label: string | ReactElement}[] = useMemo(() => {

        return props.stepLabels.map(
            (item: string | ReactElement, index: number) => ({
                stepNumber: index + 1,
                label: item,
            }),
        );
    }, [props.stepLabels]);

    const stepItemContent = useMemo(
        () => {
            let content = null;

            if (children?.length === undefined) {
                if (!children) { // children 안들어옴
                    return null;
                }
                content = children; // children 1개
            } else { // children 2개 이상
                content = children[value - 1];
            }

            if (!content.props.children) {
                return content;
            }

            return (
                <TStepBoxItem prevButtonLabel={props.prevButtonLabel}
                              nextButtonLabel={props.nextButtonLabel}
                              completeButtonLabel={props.completeButtonLabel}
                              {...content.props}
                />
            );
        },

        [children, props.completeButtonLabel, props.nextButtonLabel, props.prevButtonLabel, value],
    );


    // region [Privates]


    // endregion


    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) { clazz.push(className); }

        return clazz.join(' ');
    }, [className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (style) { return style; }
        return {};
    }, [style]);

    // endregion

    return (
        <div className={`t-step-box ${rootClass}`} style={rootStyle}>
            <TStepBoxContext.Provider value={{
                currentStep: value,
                totalStep: children?.length,
                onChangeCurrentStep: props.onChange,
                nextButtonLabel: props.nextButtonLabel,
                prevButtonLabel: props.prevButtonLabel,
                completeButtonLabel: props.completeButtonLabel,
            }}>
                {/* Header */}
                <TStepBoxHeader content={headerContent}/>

                {/* Content & Footer */}
                {stepItemContent}
            </TStepBoxContext.Provider>
        </div>
    );
};

TStepBox.defaultProps = {
    prevButtonLabel: 'Previous',
    nextButtonLabel: 'Next',
    completeButtonLabel: 'Complete',
};

TStepBox.displayName = 'TStepBox';


export default TStepBox;
