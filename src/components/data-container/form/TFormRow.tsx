import type {CSSProperties} from 'react';

import TFormColumn from './TFormColumn';

import type {TFormColumnProps, TFormRowProps} from '~/data-container/form/TForm.interface';

const TFormRow = ({labelVerticalAlign, ...restProps}: TFormRowProps) => {
    const props: TFormRowProps = {labelVerticalAlign, ...restProps};

    const rootClass = (): string => {
        const clazz: string[] = [];

        if (props.className) {
            clazz.push(props.className);
        }

        return clazz.join(' ');
    };

    const rootStyle: CSSProperties = props.style ? props.style : null;

    const formColumn = (columnProps: TFormColumnProps) => TFormColumn(columnProps);

    const items = props.columns.map((item, index) => {
        return formColumn({
            ...item,
            key: `${props.key}${index}`,
            column: props.column,
            labelWidth: props.labelWidth,
            labelVerticalAlign,
        });
    });

    return (
        <div className={`t-form-row ${rootClass()}`} style={rootStyle} key={props.key}>
            {items}
        </div>
    );
};

export default TFormRow;
