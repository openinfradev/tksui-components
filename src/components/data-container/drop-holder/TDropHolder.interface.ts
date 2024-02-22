import {MouseEvent, ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';

export type DropHolderAlignment =
    'top-left' | 'top-center' | 'top-right' |
    'bottom-left' | 'bottom-center' | 'bottom-right';

export interface TDropHolderItem {
    [key: string]: any,
    disabled?: boolean,
    onClick?: (event?: MouseEvent) => void,
    divideSection?: boolean,
    icon?: string,
}

export interface TDropHolderProps extends TBaseProps {
    children: ReactNode,
    alignment: DropHolderAlignment,
    title?: string,
    items?: TDropHolderItem[],
    itemTemplate?: (item: TDropHolderItem) => ReactNode,
    textKey?: string,
    customItem?: ReactNode,
    offset?: string,

    onOpen?(): void,
    onClose?(): void,
}


export interface TDropHolderRef {
    open(): void,
    close(): void,
}
