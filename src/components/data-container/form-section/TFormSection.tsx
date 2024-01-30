import {CSSProperties, useMemo} from 'react';
import TIcon from '~/icon/TIcon';
import {TFormSectionProps} from '@/components';
import FormContext from './TFormSectionContext';
import TSection from '~/data-container/section/TSection';

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
                  contentClassName={'t-form-section__content'}
        >
            {
                (props.information || props.customInformation) && (
                    <div className={'t-form-section__content__info'}>
                        <TIcon className={'t-form-section__content__info__icon'}>info</TIcon>
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
            <FormContext.Provider value={{column: props.column, labelWidth: props.labelWidth}}>
                {props.children}
            </FormContext.Provider>
        </TSection>
    );

};

TFormSection.defaultProps = {
    column: 2,
    labelWidth: '84px',
};
export default TFormSection;
