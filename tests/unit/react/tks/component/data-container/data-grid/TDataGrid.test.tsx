import {findByText, render, screen} from '@testing-library/react';
import TDataGrid from '~/data-container/data-grid/TDataGrid';

describe('TDataGrid', () => {

    const mockOnChange = jest.fn();

    const baseProps = {
        columnDefs: [
            {field: 'title'},
            {field: 'content'},
            {field: 'count'},
            {field: 'color'},
        ],
        rowData: [
            {
                title: 'Test Title',
                content: 'Test Content',
                count: '10',
                color: 'blue',
            },
            {
                title: 'Test Title2',
                content: 'Test Content2',
                count: '20',
                color: 'red',
            },
        ],
        onChange: mockOnChange,
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(<TDataGrid {...baseProps} className={testClassName}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('Style prop applies to root', () => {

            // Arrange
            const testStyle = {width: '300px', color: 'red'};
            render(<TDataGrid {...baseProps} style={testStyle}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });


        it('ID prop applies to root', () => {

            // Arrange
            const testId = 'test-class';
            render(<TDataGrid {...baseProps} id={testId}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testId);

        });

        it('Renders without errors', () => {

            // Arrange
            render(<TDataGrid {...baseProps} />);

            // Assert
            expect(screen.getByTestId('data-grid-root')).toBeInTheDocument();
        });


    });

    describe('Render', () => {



        it('ColumnDefs prop applies to root', async () => {

            // Arrange
            render(<TDataGrid {...baseProps} />);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(await findByText(root, 'Title')).toBeInTheDocument();
            expect(await findByText(root, 'Content')).toBeInTheDocument();
            expect(await findByText(root, 'Count')).toBeInTheDocument();
            expect(await findByText(root, 'Color')).toBeInTheDocument();
        });

        it('If noHeader property is false, grid header is displayed.', () => {

            // Arrange
            render(<TDataGrid {...baseProps} noHeader={false}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root.getElementsByClassName('t-data-grid__header').length).toBe(1);
        });

        it('If noPagination property is false, pagination is displayed.', () => {

            // Arrange
            render(<TDataGrid {...baseProps} noPagination={false}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root.getElementsByClassName('t-data-grid__pagination').length).toBe(1);
        });

        it('If noTotalRows property is false, header total rows is displayed.', () => {

            // Arrange
            render(<TDataGrid {...baseProps} noTotalRows={false}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root.getElementsByClassName('t-data-grid__header__pagination').length).toBe(1);
        });

        it('If leftAction exists, the left action area is exposed.', () => {

            // Arrange
            const leftAction = <button>left button</button>
            render(<TDataGrid {...baseProps} leftAction={leftAction}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root.getElementsByClassName('t-data-grid__header__left-action').length).toBe(1);
        });

        it('If rightAction exists, the right action area is exposed.', () => {

            // Arrange
            const rightAction = <button>right button</button>
            render(<TDataGrid {...baseProps} rightAction={rightAction}/>);
            const root = screen.getByTestId('data-grid-root');

            // Assert
            expect(root.getElementsByClassName('t-data-grid__header__right-action').length).toBe(1);
        });

    });
});