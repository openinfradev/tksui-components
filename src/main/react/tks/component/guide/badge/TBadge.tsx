import 'react-toastify/dist/ReactToastify.css';
import {CSSProperties, useMemo} from 'react';
import {TBadgeProps} from '~/tks/component/guide/badge/TBadge.interface';

const TBadge = (props: TBadgeProps) => {


    // region [Styles]
    const rootStyle = useMemo((): CSSProperties => {

        let style: CSSProperties = {};

        if (props.style) style = {...style, ...props.style};

        return style;
    }, [props.style]);

    const rootClass = useMemo(() => {
        const clazz = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);


    const badgeClass = useMemo(() => {
        const clazz = [];

        if (props.dot) {
            clazz.push('t-badge-content--dot');
        } else {
            clazz.push('t-badge-content--detail');
        }
        if (props.inline) {
            clazz.push('t-badge-content--inline');
        }

        return clazz.join(' ');
    }, [props.dot, props.inline]);

    const badgeStyle = useMemo((): CSSProperties => {

        let style: CSSProperties = {};

        if (props.color) style = {...style, backgroundColor: props.color};

        return style;
    }, [props.color]);


    const badgeContent = useMemo(() => {
        if (props.max && props.content > props.max) {
            return `${props.max}+`;
        }
        return `${props.content}`;

    }, [props.content, props.max]);

    // endregion


    return (
        <div className={`t-badge ${rootClass}`} style={rootStyle}>
            {props.children && props.children}

            {
                (props.content > 0 || (props.content === 0 && props.showZero)) && (
                    <div className={`t-badge-content ${badgeClass}`} style={badgeStyle}>
                        {!props.dot && badgeContent}
                    </div>

                )
            }
        </div>
    );
};

TBadge.defaultProps = {};

export default TBadge;
