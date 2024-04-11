import {CSSProperties, useMemo, memo} from 'react';
import {TSpinnerProps} from '~/guide/spinner/TSpinner.interface';


const TSpinner = (props: TSpinnerProps) => {


    // region [Styles]

    const rootClass: string = useMemo((): string => {

        const clazz: string[] = [];

        if (props.variant) { clazz.push(`t-spinner__${props.variant}`); }
        if (props.size) { clazz.push(`t-spinner__${props.size}`); }
        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className, props.size, props.variant]);

    const rootStyle: CSSProperties = useMemo((): CSSProperties => {

        return {...props.style};
    }, [props.style]);

    const defaultSliceStyle: CSSProperties = useMemo(() => {

        const style = {} as CSSProperties;

        if (props.color) { style.borderColor = `${props.color} transparent transparent transparent`; }

        return style;
    }, [props.color]);

    // endregion


    // region [Templates]

    const defaultSpinner = useMemo(() => (
        <>
            <div className={'t-spinner__slice'} style={defaultSliceStyle}/>
            <div className={'t-spinner__slice'} style={defaultSliceStyle}/>
            <div className={'t-spinner__slice'} style={defaultSliceStyle}/>
        </>
    ), [defaultSliceStyle]);

    // endregion


    return (
        <div className={`t-spinner ${rootClass}`} style={rootStyle}>
            { props.variant === 'default' && defaultSpinner}
        </div>
    );
};

TSpinner.defaultProps = {
    variant: 'default',
    size: 'medium',
};

export default memo(TSpinner);
