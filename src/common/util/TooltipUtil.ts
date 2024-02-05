import {TBaseTooltipProps} from '@/common/base/TBase.interface';

function convertToTooltipAttributes(props: TBaseTooltipProps) {

    const ret = {};
    ret['data-tooltip-id'] = props.tooltipId;
    ret['data-tooltip-place'] = props.tooltipPlace;
    ret['data-tooltip-hidden'] = props.tooltipHidden;

    if (props.tooltipHtml) {
        ret['data-tooltip-html'] = props.tooltipHtml;
    } else if (props.tooltipTitle) {
        // ret['data-tooltip-html'] = getTooltipHtml(props.title, props.content);
    } else {
        ret['data-tooltip-content'] = props.tooltipContent;
    }

    return ret;

}


export default {convertToTooltipAttributes};
