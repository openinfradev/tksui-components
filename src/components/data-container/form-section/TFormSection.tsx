import type {CSSProperties} from 'react';
import {memo, useMemo} from 'react';

import type {TFormSectionProps} from '@/components';

import TFormSectionContext from '~/data-container/form-section/TFormSectionContextInterface';
import TSection from '~/data-container/section/TSection';
import TIcon from '~/icon/TIcon';

const TFormSection = ({
    column = 2,
    labelWidth = '104px',
    formLabelItemAlign = 'horizontal',
    formRowVerticalAlign = 'middle',
    ...restProps
}: TFormSectionProps) => {
    // region [Hooks]

    const props: TFormSectionProps = {column, labelWidth, formLabelItemAlign, formRowVerticalAlign, ...restProps};

    // endregion

    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) {
            clazz.push(props.className);
        }

        if (props.noRowDivider) {
            clazz.push('t-form-section--no-row-divider');
        }

        clazz.push(`t-form-section--form-label-item-align--${props.formLabelItemAlign}`);

        return clazz.join(' ');
    }, [props.className, props.formLabelItemAlign, props.noRowDivider]);

    const rootStyle = useMemo((): CSSProperties => {
        return props.style ? {...props.style} : {};
    }, [props.style]);

    // endregion

    return (
        <TSection
            className={`t-form-section ${rootClass}`}
            style={rootStyle}
            id={props.id}
            label={props.label}
            customLabel={props.customLabel}
            rightAction={props.rightAction}
            leftAction={props.leftAction}
            contentClassName={'t-form-section__content'}
        >
            {(props.information || props.customInformation) && (
                <div className={'t-form-section__content__info'}>
                    <TIcon fill className={'t-form-section__content__info__icon'}>
                        info
                    </TIcon>
                    <div className={'t-form-section__content__info__content'}>
                        {props.customInformation
                            ? props.customInformation
                            : props.information.split('\n').map((token, index) => <div key={index}>{token}</div>)}
                    </div>
                </div>
            )}
            <TFormSectionContext.Provider
                value={{
                    column: props.column,
                    labelWidth: props.labelWidth,
                    rowVerticalAlign: props.formRowVerticalAlign,
                }}
            >
                {props.children}
            </TFormSectionContext.Provider>
        </TSection>
    );
};

export default memo(TFormSection);
