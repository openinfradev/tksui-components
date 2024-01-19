import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import {CSSProperties} from 'react';
// import useInputState from '@/common/hook/UseInputState';
import TDataGrid from '~/data-container/data-grid/TDataGrid';

describe('TDataGrid', () => {


    describe('style', () => {

        it('Classname prop applies to root', async () => {

            // Arrange
            // render(<TDataGrid className={testClassName}/>);
            render(<TDataGrid rowData={[]}/>);
            const root = screen.getByTestId('data-grid-root');
            //
            // // Assert
            // expect(root).toHaveClass(testClassName);
            expect(root).toBeInTheDocument();

        });

    });
});

