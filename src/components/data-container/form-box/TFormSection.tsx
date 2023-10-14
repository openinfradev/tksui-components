import {useMemo} from 'react';
import {TFormSectionProps} from './TFormBox.interface';
import FormContext from './TFormSectionContext';
import TIcon from '../../icon/TIcon';


function TFormSection(props: TFormSectionProps) {

    // region [Styles]


    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }
        if (props.gridType) { clazz.push('t-form-section--grid-type'); }
        if (props.required) { clazz.push('t-form-section--required'); }

        return clazz.join(' ');
    }, [props.className, props.gridType, props.required]);


    // endregion


    // region [Templates]

    return (
        <section className={`t-form-section ${rootClass}`}>

            <header className={'t-form-section__header'}>
                {
                    props.label && (
                        <h3 className={'t-form-section__header__label'}>{props.label}</h3>
                    )
                }
                {
                    (props.leftAction || props.rightAction) && (
                        <div className={'t-form-section__header__action'}>
                            <div className={'t-form-section__header__action__left-action'}>
                                {props.leftAction && (props.leftAction)}
                            </div>
                            <div className={'t-form-section__header__action__right-action'}>
                                {props.rightAction && (props.rightAction)}
                            </div>
                        </div>
                    )
                }
            </header>
            <div className={'t-form-section__content'}>
                {
                    props.information && (
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
                    value={{
                        column: props.column,
                        gridType: {
                            value: props.gridType,
                            rowHeight: props.gridTypeRowHeight ?? '96px',
                            labelWidth: props.gridTypeLabelWidth ?? '170px',
                        },
                    }}>
                    {props.children}
                </FormContext.Provider>
            </div>
        </section>
    );

    // endregion

}

export default TFormSection;
