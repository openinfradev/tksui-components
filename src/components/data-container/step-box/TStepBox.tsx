import {CSSProperties, ReactElement, useMemo} from 'react';
import {TStepBoxProps} from './TStepBox.interface';
import TStepBoxContext from './TStepBoxContext';
import TStepBoxFooter from '~/data-container/step-box/TStepBoxFooter';
import TStepBoxHeader from '~/data-container/step-box/TStepBoxHeader';

const TStepBox = (props: TStepBoxProps) => {

    // region [Hooks]

    const {value, children, style, className} = props;

    // endregion

    const headerContent = useMemo(() => {
        return children.map(
            (child: ReactElement, index: number) => ({
                stepNumber: index + 1,
                label: child.props.label,
            }),
        );
    }, [children]);


    const footerContent = useMemo(() => {
        return children.map(
            (child: ReactElement, index: number) => ({
                stepNumber: index + 1,
                onClickNext: child.props.onClickNext,
                onClickPrev: child.props.onClickPrev,
                validateStep: child.props.validateStep,
                customNextButton: child.props.customNextButton,
            }),
        );
    }, [children]);

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

    const stepItemContent = useMemo(() => children
        .filter(
            (child, index) => {
                if (child.props.value) {
                    return child.props.value === value;
                }
                return (index + 1) === value;
            },
        )[0]?.props.content, [children, value]);

    // endregion

    return (
        <div className={`t-step-box ${rootClass}`} style={rootStyle}>
            <TStepBoxContext.Provider value={
                {
                    currentStep: value,
                    totalStep: children.length,
                    onChangeCurrentStep: props.onChange,
                }
            }>
                {/* Header */}
                <TStepBoxHeader content={headerContent}/>

                {/* Content */}
                <div className={'t-step-box__tab-content t-tab-item-content'}>
                    {stepItemContent}
                </div>

                {/* Footer */}
                <TStepBoxFooter prevButtonLabel={props.prevButtonLabel}
                                nextButtonLabel={props.nextButtonLabel}
                                completeButtonLabel={props.completeButtonLabel}
                                content={footerContent}
                />
            </TStepBoxContext.Provider>
        </div>
    );
};

TStepBox.defaultProps = {};

TStepBox.displayName = 'TStepBox';


export default TStepBox;
