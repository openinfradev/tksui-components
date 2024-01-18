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

        it('renders without errors', () => {

            // Arrange
            render(<TDataGrid {...baseProps} />);

            // Assert
            expect(screen.getByTestId('data-grid-root')).toBeInTheDocument();
        });

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
    });
});