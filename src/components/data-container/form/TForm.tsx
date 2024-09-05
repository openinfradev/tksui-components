import {CSSProperties, memo, useCallback, useMemo} from 'react';
import TFormRow from './TFormRow';
import {TSection} from '@/components';
import TIcon from '~/icon/TIcon';
import {TFormProps, TFormRowProps} from '~/data-container/form/TForm.interface';

const TForm = ({
    column = 2,
    labelWidth = '104px',
    labelItemLayout = 'horizontal',
    labelVerticalAlign = 'middle',
    ...restProps
}: TFormProps) => {

    // region [Hooks]

    const props: TFormProps = {column, labelWidth, labelItemLayout, labelVerticalAlign, ...restProps};

    // endregion


    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.noRowDivider) { clazz.push('t-form--no-row-divider'); }

        clazz.push(`t-form--form-label-item-align--${props.labelItemLayout}`);

        return clazz.join(' ');
    }, [props.className, props.labelItemLayout, props.noRowDivider]);


    const rootStyle = useMemo((): CSSProperties => (props.style ? props.style : null), [props.style]);

    // endregion

    // region [Templates]

    const formRow = useCallback((rowProps: TFormRowProps) => TFormRow(rowProps), []);

    const header = useMemo(() => {
        return (
            (props.information || props.customInformation) && (
                <div className={'t-form__content__info'}>
                    <TIcon fill className={'t-form__content__info__icon'}>info</TIcon>
                    <div className={'t-form__content__info__content'}>
                        {
                            props.customInformation
                                ? (props.customInformation)
                                : props.information
                                    .split('\n')
                                    .map((token, index) => <div key={index}>{token}</div>)
                        }
                    </div>
                </div>
            )
        );
    }, [props.customInformation, props.information]);


    const rows = useMemo(() => {
        return props.rows.map((row, index) => {

            return (
                formRow({
                    ...row,
                    key: index,
                    column: props.column,
                    labelWidth: props.labelWidth,
                    labelVerticalAlign: row.labelVerticalAlign || props.labelVerticalAlign,
                })
            );
        });
    }, [formRow, props.column, props.labelVerticalAlign, props.labelWidth, props.rows]);

    // endregion


    return (
        <TSection
            className={`t-form ${rootClass}`}
            style={rootStyle}
            id={props.id}
            label={props.label}
            customLabel={props.customLabel}
            rightAction={props.rightAction}
            leftAction={props.leftAction}
            contentClassName={'t-form__content'}
        >
            {header}
            {rows}
        </TSection>
    );
};

export default memo(TForm);
