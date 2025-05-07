import type {CSSProperties} from 'react';
import {use, useMemo} from 'react';

import type {TStepBoxItemProps} from '@/components';

import TStepBoxContext from '~/data-container/step-box/TStepBoxContext';
import TStepBoxFooter from '~/data-container/step-box/TStepBoxFooter';

const TStepBoxItem = ({contentDirection = 'top-bottom', ...restProps}: TStepBoxItemProps) => {
    // region [Hooks]

    const props: TStepBoxItemProps = {contentDirection, ...restProps};
    const stepBoxContext = use(TStepBoxContext);

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) {
            clazz.push(props.className);
        }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle = useMemo((): CSSProperties => {
        if (props.style) {
            return props.style;
        }
        return {};
    }, [props.style]);

    const contentClass = useMemo((): string => {
        return `t-step-box-item__content--direction-${props.contentDirection}`;
    }, [props.contentDirection]);

    // endregion

    return (
        <div className={`t-step-box-item ${rootClass}`} style={rootStyle} data-testid={'step-box-item-root'}>
            <div className={`t-step-box-item__content ${contentClass}`}>{props.children ?? props.children}</div>

            <TStepBoxFooter
                prevButtonLabel={props.prevButtonLabel ?? stepBoxContext.prevButtonLabel}
                nextButtonLabel={props.nextButtonLabel ?? stepBoxContext.nextButtonLabel}
                nextButtonDisabled={props.nextButtonDisabled}
                completeButtonLabel={props.completeButtonLabel ?? stepBoxContext.completeButtonLabel}
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
