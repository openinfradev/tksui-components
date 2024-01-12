import {CSSProperties, useMemo} from 'react';
import {TIcon, TFormSectionProps} from '../../index';
import FormContext from './TFormSectionContext';
import TSection from '../section/TSection';

const TFormSection = (props: TFormSectionProps) => {

    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle = useMemo((): CSSProperties => {

        return props.style ? {...props.style} : {};
    }, [props.style]);


    // endregion


    return (
        <TSection className={`t-form-section ${rootClass}`} style={rootStyle} id={props.id}
                  label={props.label} customLabel={props.customLabel}
                  rightAction={props.rightAction} leftAction={props.leftAction}
        >
            <div className={'t-form-section__content'}>
                {
                    (props.information || props.customInformation) && (
                        <div className={'t-form-section__content__info'}>
                            <TIcon small className={'t-form-section__content__info__icon'} color={'#666666'}>t_information</TIcon>
                            <div className={'t-form-section__content__info__content'}>
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
                }
                <FormContext.Provider
                    value={{column: props.column, labelWidth: props.labelWidth}}>
                    {props.children}
                </FormContext.Provider>
            </div>
        </TSection>
    );

};

TFormSection.defaultProps = {
    column: 2,
    labelWidth: '84px',
};
export default TFormSection;
