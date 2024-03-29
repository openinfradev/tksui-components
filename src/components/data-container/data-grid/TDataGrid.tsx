import {DomLayoutType} from 'ag-grid-community/dist/lib/entities/gridOptions';
import {CSSProperties, forwardRef, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {SelectionChangedEvent} from 'ag-grid-community';
import {TDataGridProps} from '@/components';
import TPagination from '../pagination/TPagination';
import TActionBar from '~/data-container/action-bar/TActionBar';
import NumberUtil from '@/common/util/NumberUtil';

const TDataGrid = forwardRef((props: TDataGridProps, ref: Ref<AgGridReact>) => {

    // region [Hooks]

    const [selectedRows, setSelectedRows] = useState<any>([]);

    const gridRef = useRef<AgGridReact>(null);

    useImperativeHandle(ref, () => (
        {...(gridRef as any).current}
    ));

    // endregion


    // region [Styles]

    const generatedHeightProps = useMemo((): { height: string, domLayout: DomLayoutType } => {
        if (props.rowData.length === 0) {
            return {height: props.height || '440px', domLayout: 'normal'};
        }
        if (props.rowData.length > props.maxRowsWithoutScroll) {
            return {height: props.height || '640px', domLayout: 'normal'};
        }
        return {height: '', domLayout: 'autoHeight'};
    }, [props.height, props.maxRowsWithoutScroll, props.rowData.length]);

    const rootClass = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle = useMemo((): CSSProperties => {

        let style: CSSProperties = {};

        if (props.style) { style = {...props.style}; }

        return style;
    }, [props.style]);

    // region [Events]

    const onSelectionChanged = useCallback((event: SelectionChangedEvent) => {

        const rows = gridRef.current.api.getSelectedRows();

        setSelectedRows(rows);

        if (props.onChange) {
            props.onChange(rows);
        }

        if (props.onSelectionChanged) {
            props.onSelectionChanged(event);
        }
    }, [props]);

    // endregion


    // region [Templates]

    const noRowsOverlayComponent = useCallback(() => {
        return props.noRowsOverlayComponent || '검색 조건에 맞는 데이터가 없습니다';
    }, [props.noRowsOverlayComponent]);

    // endregion


    return (
        <div className={`t-data-grid ${rootClass}`} style={rootStyle} id={props.id} data-testid={'data-grid-root'}>
            {
                !props.noHeader && (
                    <div className={'t-data-grid__header'} data-testid={'data-grid-header-root'}>
                        {
                            !props.noTotalRows && (
                                <div className={'t-data-grid__header__pagination'}>
                                    총 <strong>{NumberUtil.toLocaleString(props.paging?.totalRows ?? props.rowData.length)}</strong>건
                                </div>
                            )

                        }
                        {
                            selectedRows.length > 0 && (
                                <div className={'t-data-grid__header__select-indicator'}>
                                    {NumberUtil.toLocaleString(selectedRows.length)} 개 선택
                                </div>
                            )
                        }

                        {
                            (props.leftAction || props.rightAction || props.centerAction) && (
                                <TActionBar className={'t-data-grid__header__action-bar'}
                                            leftAction={props.leftAction}
                                            centerAction={props.centerAction}
                                            rightAction={props.rightAction}/>
                            )
                        }
                    </div>
                )
            }


            <div className={'t-data-grid__body ag-theme-material'} data-testid={'data-grid-body-root'}
                 style={{height: generatedHeightProps.height}}>
                <AgGridReact className={''}
                             ref={gridRef}
                             onSelectionChanged={onSelectionChanged}
                             {...props}
                             noRowsOverlayComponent={noRowsOverlayComponent}
                             {...generatedHeightProps}
                />
            </div>

            {
                !props.noPagination && (
                    <TPagination className={'t-data-grid__pagination'}
                                 totalPages={props.paging?.totalPages || 1}
                                 pageNumber={props.paging?.pageNumber || 1}
                                 onChangePageNumber={(value) => props.onChangePageNumber(value)}
                                 noJumper={props.noJumper}
                                 jumperText={props.jumperText}
                    />
                )
            }
        </div>
    );

});

TDataGrid.defaultProps = {
    maxRowsWithoutScroll: 6,
    defaultColDef: {
        sortable: false,
        resizable: true,
        showDisabledCheckboxes: true,
    },
    animateRows: true,
    popupParent: document.body,
    suppressRowClickSelection: true,
    enableCellTextSelection: true,
    headerHeight: 32,
    rowHeight: 40,
};

TDataGrid.displayName = 'TDataGrid';


export default TDataGrid;
