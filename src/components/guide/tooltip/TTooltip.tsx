'use client';

import {PlacesType, Tooltip as ReactTooltip} from 'react-tooltip';
import {TTooltipProps} from '@/components';


// region [Tooltip]

const TTooltip = ({
    place = 'bottom' as PlacesType,
    ...restProps
}: TTooltipProps) => {

    const props: TTooltipProps = {place, ...restProps};

    return (
        <ReactTooltip {...props}
                      className={`t-tooltip ${props.className}`}
        />
    );
};


// endregion


export default TTooltip;

export {TTooltip};
