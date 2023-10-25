import {useCallback, useMemo} from 'react';
import {TCarouselNavPointsProps} from './TCarousel.interface';

const TCarouselNavPoints = (props: TCarouselNavPointsProps) => {


    // region [Events]

    const onClickPoint = useCallback((pointNumber: number) => {
        props.onClickPoint(pointNumber);
    }, [props]);

    // endregion

    // region [Styles]

    const itemClass = useCallback((itemNumber): string => {

        return (itemNumber === props.current) ? 't-carousel-nav-points__item--selected' : '';

    }, [props]);


    // endregion

    return (
        <div className={'t-carousel-nav-points'}>
            {
                Array.from({length: props.total})
                    .map((_, index) => {
                        return <div key={index}
                                    className={`t-carousel-nav-points__point ${itemClass(index + 1)}`}
                                    onClick={() => onClickPoint(index + 1)}
                        />;
                    })
            }

        </div>
            
    );
};

TCarouselNavPoints.defaultProps = {};

TCarouselNavPoints.displayName = 'TCarouselNavPoints';


export default TCarouselNavPoints;
