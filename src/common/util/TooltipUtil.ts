import {useMemo} from 'react';
import {TBaseTooltipProps} from '@/common/base/TBase.interface';


function generateTooltipHtml({tooltipTitle, tooltipContent}: TBaseTooltipProps): string {

    let outerHtml: string;

    if (tooltipTitle !== undefined) {
        const divTitle = `<div class = 't-tooltip__title'>${tooltipTitle}</div>`;
        let divContent = '';

        if (tooltipContent !== undefined) {
            divContent = `<div class = 't-tooltip__content'>${tooltipContent}</div>`;
        }

        outerHtml = divTitle + divContent;

    } else {
        outerHtml = `<div class = 't-tooltip__content'>${tooltipContent}</div>`;
    }

    return outerHtml;
 
}


function convertToTooltipAttributes(props: TBaseTooltipProps) {

    const ret = {};
    ret['data-tooltip-id'] = props.tooltipId;
    ret['data-tooltip-place'] = props.tooltipPlace;
    ret['data-tooltip-hidden'] = props.tooltipHidden;

    if (props.tooltipHtml) {
        ret['data-tooltip-html'] = props.tooltipHtml;
    } else if (props.tooltipTitle) {
        ret['data-tooltip-html'] = generateTooltipHtml(props);
    } else {
        ret['data-tooltip-content'] = props.tooltipContent;
    }

    return ret;

}


export default {convertToTooltipAttributes};
