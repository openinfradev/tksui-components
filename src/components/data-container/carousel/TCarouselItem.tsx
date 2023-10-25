import {useMemo} from 'react';
import {TCarouselItemProps} from '@/components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TCarouselItem = (props: TCarouselItemProps) => {

    const rootStyle: string = useMemo(() => {

        return props.cover ? 't-carousel-item--cover' : '';

    }, [props.cover]);

    return (<div className={`t-carousel-item ${rootStyle}`}>
        {props.children}
    </div>);
};


export default TCarouselItem;
