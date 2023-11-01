import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export const arrowType = {never: 'never', always: 'always', hover: 'hover'};
type arrowType = typeof arrowType[keyof typeof arrowType];


export interface TCarouselProps extends TBaseProps {
    children: ReactNode,
    height: string,

    showArrow?: arrowType,
    noDots?: boolean,
    autoplay?: boolean,
    autoplaySpeed?: number,
}


export interface TCarouselItemProps extends TBaseProps {
    children: ReactNode,
    cover?: boolean,
}


export interface TCarouselNavPointsProps {
    total: number,
    current: number,
    onClickPoint: (pointNumber: number) => void,
}

