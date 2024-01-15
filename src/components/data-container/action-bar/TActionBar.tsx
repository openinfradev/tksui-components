import {CSSProperties, useMemo} from 'react';
import {TActionBarProps} from './TActionBar.interface';

function TActionBar(props: TActionBarProps) {

    // region [Styles]

    const rootClass = useMemo((): string => {

        return (props.className) ? props.className : '';

    }, [props.className]);


    const rootStyle: CSSProperties = useMemo(() => {
        const style: CSSProperties = {...props.style};

        return style;
    }, [props.style]);

    const containerClass = useMemo(() => {
        if (!props.leftAction && !props.rightAction && props.centerAction) {
            return 't-action-bar__container--center-alone';
        }

        return '';
    }, [props.leftAction, props.centerAction, props.rightAction]);

    // endregion

    return (

        <div className={`t-action-bar ${rootClass}`} style={rootStyle} id={props.id} data-testid={'t-action-bar-root'}>
            {

                (props.leftAction || props.rightAction || props.centerAction) && (
                    <div className={`t-action-bar__container ${containerClass}`} data-testid={'t-action-bar__container'}>
                        {
                            (props.leftAction || props.rightAction) && (
                                <div className={'t-action-bar__container__left-action'}>
                                    {props.leftAction && (props.leftAction)}
                                </div>
                            )
                        }
                        {
                            props.centerAction && (
                                <div className={'t-action-bar__container__center-action'}>
                                    {props.centerAction && (props.centerAction)}
                                </div>
                            )
                        }
                        {
                            (props.leftAction || props.rightAction) && (
                                <div className={'t-action-bar__container__right-action'}>
                                    {props.rightAction && (props.rightAction)}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );

}

export default TActionBar;
