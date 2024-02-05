import {PlacesType, Tooltip as ReactTooltip} from 'react-tooltip';
import {TTooltipProps} from './TTooltip.interface';


// region [Tooltip]

const TTooltip = (props: TTooltipProps) => (
    <ReactTooltip {...props} isOpen={true}
                  className={`t-tooltip ${props.className}`}
    />
);

TTooltip.defaultProps = {
    place: 'bottom' as PlacesType,
    offset: '16',
};

// endregion


export default TTooltip;

export {TTooltip};
