import {CSSProperties, useContext, useMemo} from 'react';
import {TFormSectionRowProps} from '@/components';
import TFormSectionContext from '~/data-container/form-section/TFormSectionContext';


const TFormSectionRow = (props: TFormSectionRowProps) => {

    // region [Hooks]

    const formContext = useContext(TFormSectionContext);

    // endregion

    // region [Styles]

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle: CSSProperties = useMemo(() => {

        return props.style ? {...props.style} : {};
    }, [props.style]);

    // endregion


    return (
        <div className={`t-form-section-row ${rootClass}`} style={rootStyle}>
            <TFormSectionContext.Provider value={{
                ...formContext,
                rowVerticalAlign: props.verticalAlign,
            }}>
                {props.children}
            </TFormSectionContext.Provider>
        </div>
    );

};

TFormSectionRow.displayName = 'TFormSectionRow';

TFormSectionRow.defaultProps = {
    verticalAlign: 'middle',
};

export default TFormSectionRow;
