import {ReactNode} from 'react';

export interface TPageProps {
    children: ReactNode,
    className?: string,
    style?: { [key: string]: string },

    title?: string,

    isInfoPanelOpened?: boolean,
    infoPanelContent?: ReactNode,
}

export type TPageMode = 'read' | 'write' | 'update';
