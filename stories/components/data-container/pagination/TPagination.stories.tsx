import {Meta, StoryObj} from '@storybook/react';
import {ReactNode, useState} from 'react';
import TPagination from '@/components/data-container/pagination/TPagination';
import {TPaginationProps} from '@/components/data-container/pagination/TPagination.interface';


const meta: Meta<typeof TPagination> = {
    title: 'DataContainer/TPagination',
    component: TPagination,

};
export default meta;

type Story = StoryObj<typeof TPagination>;


// region [Normal]

const Container = ({label, children}: { label?: string, children: ReactNode }) => {
    return (
        <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '16px', width: '100%'}}>
            <p style={{fontSize: '14px'}}>{label}</p>
            <div style={{display: 'flex', alignItems: 'center', border: '1px solid lightgray', padding: '32px 16px', width: '100%'}}>
                {children}
            </div>
        </div>
    );
};

const NormalTemplate = (args: TPaginationProps) => {
    const [pageNumber, setPageNumber] = useState<number>(1);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px', width: '100%'}}>
            <Container label={'Normal'}>
                <TPagination {...args} pageNumber={pageNumber} onChangePageNumber={(number) => { setPageNumber(number); }}/>
            </Container>

            <Container label={'Jumper'}>
                <TPagination {...args} pageNumber={pageNumber} onChangePageNumber={(number) => { setPageNumber(number); }}/>
            </Container>

            <Container label={'Custom Jumper Text'}>
                <TPagination {...args} pageNumber={pageNumber} jumperText={'Go'}
                             onChangePageNumber={(number) => { setPageNumber(number); }}/>
            </Container>
        </div>);
};


export const Default: Story = {
    render: NormalTemplate,
    args: {
        totalPages: 23,
    },
};


// endregion
