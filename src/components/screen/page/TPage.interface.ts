import type {ReactNode} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export type TPageMode = 'read' | 'write' | 'update';

export const contentDirection = {tb: 'top-bottom', lr: 'left-right'} as const;
type contentDirectionType = (typeof contentDirection)[keyof typeof contentDirection];

export interface TPageProps extends TBaseProps {
    children: ReactNode;

    title?: string;
    breadcrumb?: ReactNode;

    infoPanelTitle?: string;
    infoPanelContent?: ReactNode;

    contentDirection?: contentDirectionType;
}
