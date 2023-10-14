import {Meta, StoryObj} from '@storybook/react';
import {useEffect, useMemo, useRef, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {ColDef} from 'ag-grid-community/dist/lib/entities/colDef';
import TDataGrid from '@/components/data-container/data-grid/TDataGrid';
import TButton from '@/components/button/button/TButton';
import useInputState from '@/common/hook/UseInputState';


const meta: Meta<typeof TDataGrid> = {
    title: 'DataContainer/TDataGrid',
    component: TDataGrid,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof TDataGrid>;


const Template = () => {

    const gridRef = useRef<AgGridReact>(null);

    const [rowData, setRowData] = useState([]);

    const selectedRows = useInputState([]);

    const fruits = ['peach', 'banana', 'mango', 'apple', 'cherry', 'melon', 'water melon', 'strawberry', 'peach'];

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then((result) => result.json())
            .then((rows) => rows.map((row) => ({...row, fruit: fruits[Math.floor(Math.random() * fruits.length)]})))
            .then((rows) => setRowData(rows));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [columnDefs] = useState<ColDef[]>([
        {
            headerName: '모델',
            tooltipField: 'price',
            field: 'model',
            pinned: 'left',
            lockPinned: true,
            lockPosition: true,
            headerCheckboxSelection: true,
            checkboxSelection: true,
            showDisabledCheckboxes: true,
        },
        {headerName: '브랜드', field: 'make'},
        {headerName: '가격', field: 'price', type: 'rightAligned'},
        {headerName: '과일', field: 'fruit', flex: 1},
    ]);

    const gridRightAction = useMemo(() => (<>
        <TButton>생성하기</TButton>
        <TButton disabled={selectedRows.value.length === 0}>삭제</TButton>
        <TButton disabled={selectedRows.value.length !== 1}>수정</TButton>
        <TButton>다운로드</TButton>
    </>), [selectedRows.value.length]);

    return (<>
        <TDataGrid ref={gridRef}
                   rowData={rowData}
                   rowSelection={'multiple'}
                   columnDefs={columnDefs}
                   rightAction={gridRightAction}
                   onChange={selectedRows.onChange}
        />

        <br/><br/>

    </>);
};


export const Default: Story = {
    render: Template,
};
