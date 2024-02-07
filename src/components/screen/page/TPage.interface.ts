import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';


export type TPageMode = 'read' | 'write' | 'update';

export const contentDirection = {tb: 'top-bottom', lr: 'left-right'} as const;
type contentDirection = typeof contentDirection[keyof typeof contentDirection];


export interface TPageProps extends TBaseProps {
    children: ReactNode,

    title?: string,
    infoPanelContent?: ReactNode,

    contentDirection?: contentDirection,

}

