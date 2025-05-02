import type {CSSProperties} from 'react';
import {memo, useContext, useMemo} from 'react';

import type {TFormSectionRowProps} from '@/components';

import TFormSectionContext from '~/data-container/form-section/TFormSectionContextInterface';

const TFormSectionRow = ({verticalAlign = 'middle', ...restProps}: TFormSectionRowProps) => {
    // region [Hooks]

    const props: TFormSectionRowProps = {verticalAlign, ...restProps};

    const formContext = useContext(TFormSectionContext);

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) {
            clazz.push(props.className);
        }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle: CSSProperties = useMemo(() => {
        return props.style ? {...props.style} : {};
    }, [props.style]);

    // endregion

    return (
        <div className={`t-form-section-row ${rootClass}`} style={rootStyle}>
            <TFormSectionContext.Provider
                value={{
                    ...formContext,
                    rowVerticalAlign: props.verticalAlign,
                }}
            >
                {props.children}
            </TFormSectionContext.Provider>
        </div>
    );
};

TFormSectionRow.displayName = 'TFormSectionRow';

export default memo(TFormSectionRow);
