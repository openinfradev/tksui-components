import {ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export interface TPageProps extends TBaseProps {
    children: ReactNode,

    title?: string,

    isInfoPanelOpened?: boolean,
    infoPanelContent?: ReactNode,
}

export type TPageMode = 'read' | 'write' | 'update';
