import {TBaseTooltipProps} from '@/common/base/TBase.interface';

function generateTooltipHtml({tooltipTitle, tooltipContent}: TBaseTooltipProps): string {
    const divTitle = tooltipTitle !== undefined ? `<div class='t-tooltip__title'>${tooltipTitle}</div>` : '';
    const divContent = tooltipContent !== undefined ? `<div class='t-tooltip__content'>${tooltipContent}</div>` : '';

    return divTitle + divContent;
}


function convertToTooltipAttributes(props: TBaseTooltipProps) {
    const ret = {};

    ret['data-tooltip-id'] = props.tooltipId;
    ret['data-tooltip-place'] = props.tooltipPlace;
    ret['data-tooltip-hidden'] = props.tooltipHidden;

    try {
        ret['data-tooltip-html'] = generateTooltipHtml(props);
    } catch (error) {
        ret['data-tooltip-html'] = '';
    }

    return ret;
}


export default {convertToTooltipAttributes};
