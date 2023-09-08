import {FormEvent, useMemo} from 'react';
import {TFormBoxProps} from './TFormBox.interface';


function TFormBox(props: TFormBoxProps) {

    // region [Styles]


    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);

        return clazz.join(' ');
    }, [props.className]);

    // endregion


    // region [Templates]

    return (
        <form className={`t-form-box ${rootClass}`} onSubmit={(e: FormEvent) => e.preventDefault()}>

            <div className={'t-form-box__content'}> {props.children} </div>

            {
                (props.leftAction || props.middleAction || props.rightAction) && (
                    <div className={'t-form-box__form-action-bar'}>
                        <div className={'t-form-box__form-action-bar__left-action'}>
                            {props.leftAction && (props.leftAction)}
                        </div>
                        <div className={'t-form-box__form-action-bar__middle-action'}>
                            {props.middleAction && (props.middleAction)}
                        </div>
                        <div className={'t-form-box__form-action-bar__right-action'}>
                            {props.rightAction && (props.rightAction)}
                        </div>
                    </div>
                )
            }

        </form>
    );

    // endregion


}

export default TFormBox;
