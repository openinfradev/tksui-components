import {AgReactUiProps} from 'ag-grid-react/lib/shared/interfaces';
import {ReactElement, ReactNode} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';


export interface TPageRequestVO {
    pageNumber?: number,
    pageSize?: number,
}

export interface TPageResponseVO extends TPageRequestVO {
    totalPages: number,
    totalRows: number,
}


export interface TDataGridProps extends TBaseProps, AgReactUiProps {
    height?: string,

    leftAction?: ReactElement
    centerAction?: ReactElement,
    rightAction?: ReactElement

    onChange?: (value: any[]) => void
    noTotalRows?: boolean,
    noPagination?: boolean,
    noHeader?: boolean,

    paging?: TPageResponseVO,
    maxRowsWithoutScroll?: number,

    noRowsOverlayComponent?: () => ReactNode,

    noJumper?: boolean,
    jumperText?: string,

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    noDataText?: string,
    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    noDataContent?: {
        title: string,
        addButtonHandler(): void,
    }

    onChangePageNumber?(value): void,
}
