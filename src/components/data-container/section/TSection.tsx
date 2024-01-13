import {CSSProperties, useMemo} from 'react';
import {TSectionProps} from './TSection.interface';

function TSection(props: TSectionProps) {

    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle = useMemo((): CSSProperties => {
        let style: CSSProperties = {};
        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);

    // endregion


    return (
        <section className={`t-section ${rootClass}`} style={rootStyle} id={props.id} role={'region'}>
            {
                (props.label || props.customLabel || props.leftAction || props.rightAction) && (
                    <header className={'t-section__header'}>
                        {
                            (props.label || props.customLabel) && (
                                <div className={'t-section__header__label'}>
                                    {props.customLabel ? props.customLabel : props.label && props.label}
                                </div>
                            )
                        }
                        {
                            (props.leftAction || props.rightAction) && (
                                <div className={'t-section__header__action'}>
                                    <div className={'t-section__header__action__left-action'}>
                                        {props.leftAction && (props.leftAction)}
                                    </div>
                                    <div className={'t-section__header__action__right-action'}>
                                        {props.rightAction && (props.rightAction)}
                                    </div>
                                </div>
                            )
                        }
                    </header>
                )
            }
            <div className='t-section__content'>
                {props.children}
            </div>
        </section>
    );

}

TSection.defaultProps = {};
export default TSection;
