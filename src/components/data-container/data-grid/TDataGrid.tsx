import {CSSProperties, forwardRef, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {DomLayoutType, SelectionChangedEvent} from 'ag-grid-community';
import {TDataGridProps} from '@/components';
import TPagination from '../pagination/TPagination';
import TActionBar from '~/data-container/action-bar/TActionBar';
import NumberUtil from '@/common/util/NumberUtil';

const DEFAULT_HEADER_HEIGHT = 32;
const DEFAULT_ROW_HEIGHT = 40;

const TDataGrid = forwardRef(({
    maxRowsWithoutScroll = 10.5,
    defaultColDef = {
        sortable: false,
        resizable: true,
        showDisabledCheckboxes: true,
    },
    animateRows = true,
    popupParent = document.body,
    suppressRowClickSelection = true,
    enableCellTextSelection = true,
    headerHeight = DEFAULT_HEADER_HEIGHT,
    rowHeight = DEFAULT_ROW_HEIGHT,
    onChange,
    onSelectionChanged,
    ...restProps
}: TDataGridProps, ref: Ref<AgGridReact>) => {

    // region [Hooks]

    const props: TDataGridProps = {
        maxRowsWithoutScroll,
        defaultColDef,
        animateRows,
        popupParent,
        suppressRowClickSelection,
        enableCellTextSelection,
        headerHeight,
        rowHeight,
        onChange,
        onSelectionChanged,
        ...restProps,
    };

    const [selectedRows, setSelectedRows] = useState<any>([]);

    const gridRef = useRef<AgGridReact>(null);

    useImperativeHandle(ref, () => (
        {...(gridRef as any).current}
    ));

    // endregion


    // region [Styles]

    const generatedHeightProps: { height: string, domLayout: DomLayoutType } = useMemo(() => {

        if (props.rowData.length === 0) {
            return {
                height: props.height || '440px',
                domLayout: 'normal',
            };
        }
        if (props.rowData.length > props.maxRowsWithoutScroll) {
            return {
                height: props.height || `${props.headerHeight + props.rowHeight * props.maxRowsWithoutScroll}px`,
                domLayout: 'normal',
            };
        }

        if (props.minRowsVisible) {
            return {
                height: props.height || `${props.headerHeight + props.rowHeight * props.minRowsVisible}px`,
                domLayout: 'normal',
            };
        }

        return {
            height: '',
            domLayout: 'autoHeight',
        };
    }, [props.headerHeight, props.height, props.maxRowsWithoutScroll, props.minRowsVisible, props.rowData.length, props.rowHeight]);

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

    const onSelectionChangedAgGrid = useCallback((event: SelectionChangedEvent) => {

        const rows = gridRef.current.api.getSelectedRows();

        setSelectedRows(rows);

        if (onChange) {
            onChange(rows);
        }

        if (onSelectionChanged) {
            onSelectionChanged(event);
        }
    }, [onChange, onSelectionChanged]);

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
                             {...props}
                             noRowsOverlayComponent={noRowsOverlayComponent}
                             suppressPropertyNamesCheck
                             onSelectionChanged={onSelectionChangedAgGrid}
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

TDataGrid.displayName = 'TDataGrid';


export default TDataGrid;
