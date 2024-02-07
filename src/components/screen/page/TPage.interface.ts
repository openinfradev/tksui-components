import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';


export type contentDirection = 'top-bottom' | 'left-light';
export type TPageMode = 'read' | 'write' | 'update';
export interface TPageProps extends TBaseProps {
    children: ReactNode,

    title?: string,
    infoPanelContent?: ReactNode,

    contentDirection?: contentDirection,

}

