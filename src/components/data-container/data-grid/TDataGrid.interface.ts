import type {AgGridReact, AgGridReactProps} from 'ag-grid-react';
import type {ReactElement, ReactNode, Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export interface TPageRequestVO {
    pageNumber?: number;
    pageSize?: number;
}

export interface TPageResponseVO extends TPageRequestVO {
    totalPages: number;
    totalRows: number;
}

export interface TDataGridProps extends TBaseProps, AgGridReactProps {
    height?: string;
    maxRowsWithoutScroll?: number;
    minRowsVisible?: number;

    leftAction?: ReactElement;
    centerAction?: ReactElement;
    rightAction?: ReactElement;

    onChange?: (value: unknown[]) => void;
    noTotalRows?: boolean;
    noPagination?: boolean;
    noHeader?: boolean;

    paging?: TPageResponseVO;

    noRowsOverlayComponent?: ReactNode;

    noJumper?: boolean;
    jumperText?: string;

    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    noDataText?: string;
    /**
     * @deprecated This prop will be removed before release v1.0.0.
     */
    noDataContent?: {
        title: string;
        addButtonHandler(): void;
    };

    totalRowsLabels?: {
        prefix: string;
        suffix: string;
    };

    ref?: Ref<AgGridReact>;

    onChangePageNumber?(value): void;
}
