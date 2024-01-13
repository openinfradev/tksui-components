import {Meta, StoryObj} from '@storybook/react';
import TButton from '@/components/button/button/TButton';
import TSection from '~/data-container/section/TSection';
import {TSectionProps} from '@/components';
import useInputState from '@/common/hook/UseInputState';
import TToast, {notify} from '@/components/guide/toast/TToast';
import {useEffect, useMemo, useRef, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {ColDef} from 'ag-grid-community/dist/lib/entities/colDef';
import TDataGrid from '../../../../src/components/data-container/data-grid/TDataGrid';


const meta: Meta<typeof TSection> = {
    title: 'DataContainer/TSection',
    component: TSection,
};
export default meta;

type Story = StoryObj<typeof TSection>;


const Template = (args: TSectionProps) => {

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
        <TButton onClick={() => notify.info('생성하기 이벤트 발생')}>생성하기</TButton>
        <TButton onClick={() => notify.info('삭제 이벤트 발생')} disabled={selectedRows.value.length === 0}>삭제</TButton>
        <TButton onClick={() => notify.info('수정 이벤트 발생')} disabled={selectedRows.value.length !== 1}>수정</TButton>
        <TButton onClick={() => notify.info('다운로드 이벤트 발생')}>다운로드</TButton>
    </>), [selectedRows.value.length]);

    const leftAction = () => (
        <TButton onClick={() => notify.info('목록 돌아가기 이벤트 발생')}>목록</TButton>
    );

    const rightAction = () => (<>
        <TButton onClick={() => notify.info('취소 이벤트 발생')}>취소</TButton>
        <TButton main onClick={() => notify.info('저장 이벤트 발생')}>저장</TButton>
    </>);


    return (
        <>
            <TToast/>
            <TSection label={'Basic Properties'} {...args} leftAction={leftAction()} rightAction={rightAction()}>
                <TDataGrid ref={gridRef}
                           rowData={rowData}
                           rowSelection={'multiple'}
                           rightAction={gridRightAction}
                           columnDefs={columnDefs}
                           onChange={selectedRows.onChange}
                />
            </TSection>
        </>
    );
};

export const Default: Story = {
    render: Template,
};
