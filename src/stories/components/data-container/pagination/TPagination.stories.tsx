import {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import TPagination from '~/tks/component/data-container/pagination/TPagination';
import {TPaginationProps} from '~/tks/component/data-container/pagination/TPagination.interface';


const meta: Meta<typeof TPagination> = {
    title: 'DataContainer/TPagination',
    component: TPagination,

};
export default meta;

type Story = StoryObj<typeof TPagination>;


// region [Normal]

const NormalTemplate = (args: TPaginationProps) => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    return (<>
        <div style={{display: 'flex', height: '80px', border: '1px solid lightgray'}}>
            <TPagination {...args} pageNumber={pageNumber} onChangePageNumber={(number) => { setPageNumber(number); }}/>
        </div>
    </>);
};


export const Default: Story = {
    render: NormalTemplate,
    args: {
        totalPages: 23,
    },
};


// endregion
