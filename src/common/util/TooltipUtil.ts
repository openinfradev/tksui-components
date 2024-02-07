import {TBaseTooltipProps} from '@/common/base/TBase.interface';

function generateTooltipHtml({tooltipTitle, tooltipContent}: TBaseTooltipProps): string {
    const divTitle = tooltipTitle !== undefined ? `<div class='t-tooltip__title'>${tooltipTitle}</div>` : '';
    const divContent = tooltipContent !== undefined ? `<div class='t-tooltip__content'>${tooltipContent}</div>` : '';

    return divTitle + divContent;
}


function convertToTooltipAttributes({
    tooltipId,
    tooltipPlace,
    tooltipHidden,
    tooltipHtml,
    tooltipTitle,
    tooltipContent,
}: TBaseTooltipProps) {
    const ret = {};

    ret['data-tooltip-id'] = tooltipId;
    ret['data-tooltip-place'] = tooltipPlace;
    ret['data-tooltip-hidden'] = tooltipHidden;

    if (tooltipHtml) {
        ret['data-tooltip-html'] = tooltipHtml;
    } else {
        try {
            ret['data-tooltip-html'] = generateTooltipHtml({tooltipTitle, tooltipContent});
        } catch (e) {
            ret['data-tooltip-html'] = '';
        }
    }

    return ret;
}


export default {convertToTooltipAttributes};
