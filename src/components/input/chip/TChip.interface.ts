import {MouseEvent, ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';


export const chipSize = {xsm: 'xsmall', sm: 'small', md: 'medium', lg: 'large', xlg: 'xlarge'};
type chipSize = typeof chipSize[keyof typeof chipSize];
const chipType = ['outlined', 'filled'] as const;
type chipType = typeof chipType[number];


export interface TChipProps extends TBaseProps {
    
    children?: ReactNode,
    
    type?: chipType,
    
    primary?: boolean,
    icon?: string,
    removeIcon?: string,
    
    size?: chipSize,
    xsmall?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    xlarge?: boolean,
    
    onRemove?: (event?: MouseEvent) => void,
}


export interface TChipRef {
    remove(): void,
}
