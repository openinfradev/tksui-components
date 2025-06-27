import type {CSSProperties, ReactElement} from 'react';
import {useMemo} from 'react';

import type {TStepBoxProps} from '@/components';
import TStepBoxContext from './TStepBoxContext';

import TStepBoxHeader from '~/data-container/step-box/TStepBoxHeader';
import TStepBoxItem from '~/data-container/step-box/TStepBoxItem';

const TStepBox = ({
    prevButtonLabel = 'Previous',
    nextButtonLabel = 'Next',
    completeButtonLabel = 'Complete',
    value,
    onChange,
    children,
    style,
    className,
    ...restProps
}: TStepBoxProps) => {
    // region [Hooks]

    const props: TStepBoxProps = {
        prevButtonLabel,
        nextButtonLabel,
        completeButtonLabel,
        value,
        onChange,
        children,
        style,
        className,
        ...restProps,
    };

    // endregion

    const headerContent: {stepNumber: number; label: string | ReactElement}[] = useMemo(() => {
        return props.stepLabels.map((item: string | ReactElement, index: number) => ({
            stepNumber: index + 1,
            label: item,
        }));
    }, [props.stepLabels]);

    const stepItemContent = useMemo(() => {
        let content = null;

        if (children?.length === undefined) {
            // children 안 들어옴
            if (!children) {
                return null;
            }
            // children 1개
            content = children;
        } else {
            // children 2개 이상
            content = children[value - 1];
        }

        if (!content.props.children) {
            return content;
        }

        return (
            <TStepBoxItem
                prevButtonLabel={props.prevButtonLabel}
                nextButtonLabel={props.nextButtonLabel}
                completeButtonLabel={props.completeButtonLabel}
                {...content.props}
            />
        );
    }, [children, props.completeButtonLabel, props.nextButtonLabel, props.prevButtonLabel, value]);

    // region [Privates]

    // endregion

    // region [Templates]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (className) {
            clazz.push(className);
        }

        return clazz.join(' ');
    }, [className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (style) {
            return style;
        }
        return {};
    }, [style]);

    // endregion

    return (
        <div className={`t-step-box ${rootClass}`} style={rootStyle} id={props.id} data-testid={'step-box-root'}>
            <TStepBoxContext.Provider
                value={{
                    currentStep: value,
                    totalStep: children?.length,
                    onChangeCurrentStep: props.onChange,
                    nextButtonLabel: props.nextButtonLabel,
                    prevButtonLabel: props.prevButtonLabel,
                    completeButtonLabel: props.completeButtonLabel,
                }}
            >
                {/* Header */}
                <TStepBoxHeader content={headerContent} />

                {/* Content & Footer */}
                {stepItemContent}
            </TStepBoxContext.Provider>
        </div>
    );
};

TStepBox.displayName = 'TStepBox';

export default TStepBox;
