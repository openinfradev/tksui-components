import type {CSSProperties} from 'react';

import {TTooltip} from '@/components';

import themeToken from '~style/designToken/ThemeToken.module.scss';

import type {TFormColumnProps} from '~/data-container/form/TForm.interface';
import TIcon from '~/icon/TIcon';

const gapSize = Number(themeToken.tSpacing40?.replace(/[^0-9]/g, '')) * 2 || 80;

const TFormColumn = ({span = 1, ...restProps}: TFormColumnProps) => {
    const props: TFormColumnProps = {span, ...restProps};

    const tooltipId = Math.random().toString();

    // region [Styles]

    const rootClass = (): string => {
        const clazz: string[] = [];

        if (props.className) {
            clazz.push(props.className);
        }
        if (props.required) {
            clazz.push('t-form-item--required');
        }

        return clazz.join(' ');
    };

    const excludedGap = () => {
        if (props.column === props.span) {
            return '0px';
        }

        return `${gapSize * (props.column - 1)}px`;
    };

    const includedGap = () => {
        if (props.column === props.span || props.span === 1) {
            return '0px';
        }

        return `(${gapSize}px * ${props.span - 1})`;
    };

    const rootStyle = (): CSSProperties => {
        const style: CSSProperties = props.style ? props.style : {};

        style.width = `calc(((100% - ${excludedGap()}) / ${props.column} * ${props.span}) + ${includedGap()})`;

        return style;
    };

    const labelStyle = (): CSSProperties => {
        const style: CSSProperties = {};

        style.minWidth = props.labelWidth;
        style.maxWidth = props.labelWidth;

        if (props.labelVerticalAlign === 'middle') {
            style.alignItems = 'center';
        }
        if (props.labelVerticalAlign === 'top') {
            style.alignItems = 'flex-start';
        }

        return style;
    };

    const contentStyle = (): CSSProperties => {
        let style: CSSProperties = {};

        if (props.labelVerticalAlign === 'middle') {
            style.alignItems = 'center';
        }
        if (props.labelVerticalAlign === 'top') {
            style.alignItems = 'flex-start';
        }

        style = {...style, ...props.contentStyle};

        return style;
    };

    // endregion

    return (
        <span className={`t-form-item ${rootClass()}`} style={rootStyle()} role={'group'} key={props.key}>
            {props.label && (
                <label className={'t-form-item__label'} style={labelStyle()}>
                    <span className={'t-form-item__label__text'}>{props.label}</span>

                    {props.information && (
                        <TIcon
                            className={'t-form-item__label__info-icon'}
                            small
                            tooltipContent={props.information}
                            tooltipId={tooltipId}
                            clickable
                        >
                            info
                        </TIcon>
                    )}
                </label>
            )}
            <div className={'t-form-item__content'} style={contentStyle()}>
                {props.content}{' '}
            </div>
            {props.information && <TTooltip id={tooltipId} openOnClick />}
        </span>
    );
};

export default TFormColumn;
