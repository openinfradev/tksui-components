import {CSSProperties, useMemo, memo} from 'react';
import {TLoadingIndicatorProps} from '~/guide/loading-indicator/TLoadingIndicator.interface';
import TDefaultSpinner from '~/guide/loading-indicator/variant/TDefaultSpinner';
import TSunSpinner from '~/guide/loading-indicator/variant/TSunSpinner';


const TLoadingIndicator = (props: TLoadingIndicatorProps) => {


    // region [Styles]

    const rootClass: string = useMemo((): string => {

        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        if (props.variant) { clazz.push(`t-loading-indicator--${props.variant}`); }

        if (props.variant || props.size) { clazz.push(`t-loading-indicator--${props.size}`); }

        return clazz.join(' ');
    }, [props.className, props.size, props.variant]);


    const rootStyle: CSSProperties = useMemo((): CSSProperties => {

        const style = {...props.style};

        if (props.variant === 'sun' && props.color) {
            style.color = props.color;
        }

        return style;
    }, [props.color, props.style, props.variant]);


    const spinnerStyle: CSSProperties = useMemo(() => {

        const style = {} as CSSProperties;

        if (props.variant === 'default' && props.color) {
            style.borderColor = `${props.color} transparent transparent transparent`;
        }

        return style;
    }, [props.color, props.variant]);

    // endregion


    // region [Templates]
    // endregion


    return (
        <div id={props.id} className={`t-loading-indicator ${rootClass}`} style={rootStyle} data-testid={'t-loading-indicator-root'}>
            <div className='t-loading-indicator__body'>
                {props.variant === 'default' && <TDefaultSpinner style={spinnerStyle}/>}
                {props.variant === 'sun' && <TSunSpinner/>}
            </div>
            {props.message && (<p className={'t-loading-indicator__message'}>{props.message}</p>)}
        </div>
    );
};

TLoadingIndicator.defaultProps = {
    variant: 'default',
    size: 'medium',
};

export default memo(TLoadingIndicator);
