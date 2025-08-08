import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useState} from 'react';

import TDropdown from '~/input/dropdown/TDropdown';

const testItems = [
    {value: 'test1', text: 'test1'},
    {value: 'test2', text: 'test2'},
    {value: 'test3', text: 'test3'},
    {value: 'apple', text: 'Apple'},
    {value: 'banana', text: 'Banana'},
    {value: 'cherry', text: 'Cherry'},
];

describe('TDropdown', () => {
    const mockOnChange = jest.fn();
    const mockOnOpen = jest.fn();
    const mockOnClose = jest.fn();
    const baseProps = {value: 'hello', onChange: mockOnChange, items: testItems};

    beforeEach(() => {
        mockOnChange.mockClear();
        mockOnOpen.mockClear();
        mockOnClose.mockClear();
    });

    describe('Style', () => {
        it('renders without errors', () => {
            render(<TDropdown {...baseProps} />);
            expect(screen.getByTestId('dropdown-root')).toBeInTheDocument();
        });

        it('Classname prop applies to root', () => {
            // Arrange
            render(<TDropdown {...baseProps} className={'class-name-prop'} />);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveClass('class-name-prop');
        });

        it('Style prop applies to root', () => {
            // Arrange
            render(<TDropdown {...baseProps} style={{width: '300px'}} />);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveStyle({width: '300px'});
        });

        it('Width prop applies to root', () => {
            // Arrange
            render(<TDropdown {...baseProps} width={'300px'} />);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveStyle({width: '300px'});
        });

        it('Id prop applies to root', () => {
            // Arrange
            const idProp = 'my-id';
            render(<TDropdown {...baseProps} id={idProp} />);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveAttribute('id', idProp);
        });

        it('When type prop is set to underline, root has t-dropdown--underline class', () => {
            // Arrange
            render(<TDropdown {...baseProps} type={'underline'} />);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveClass('t-dropdown--underline');
        });

        it('When dense prop is applied, root has t-dropdown--dense class', () => {
            // Arrange
            render(<TDropdown {...baseProps} dense />);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveClass('t-dropdown--dense');
        });

        it('When noClearButton prop is applied, clear icon is not shown', async () => {
            // Arrange
            render(<TDropdown noClearButton {...baseProps} value={testItems[0].value} />);

            // Assert - Only arrow_drop_down icon should be present, no clear icon
            const iconElements = screen.getAllByRole('img');
            const clearIcon = iconElements.find((icon) => icon.textContent === 'cancel');
            expect(clearIcon).toBeUndefined();
        });
    });

    describe('Filterable Feature', () => {
        it('When filterable prop is false, filter input should not be shown', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} filterable={false} />);
            const control = screen.getByTestId('dropdown-control');

            // Act - Open dropdown
            await user.click(control);

            // Assert - Filter input should not exist
            const filterInput = screen.queryByDisplayValue('');
            expect(filterInput).not.toBeInTheDocument();
        });

        it('When filterable prop is true, filter input should be shown when dropdown is opened', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} filterable={true} value={''} />);
            const control = screen.getByTestId('dropdown-control');

            // Act - Open dropdown
            await user.click(control);

            // Assert - Filter input should exist
            await waitFor(() => {
                const filterInput = screen.getByPlaceholderText('검색');
                expect(filterInput).toBeInTheDocument();
            });
        });

        it('When typing in filter input, items should be filtered correctly', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} filterable={true} value={''} />);
            const control = screen.getByTestId('dropdown-control');

            // Act - Open dropdown
            await user.click(control);
            
            // Act - Type in filter
            const filterInput = screen.getByPlaceholderText('검색');
            await user.type(filterInput, 'apple');

            // Assert - Only Apple item should be visible
            await waitFor(() => {
                expect(screen.getByText('Apple')).toBeInTheDocument();
                expect(screen.queryByText('Banana')).not.toBeInTheDocument();
                expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
            });
        });

        it('When filter has no results, "no results" message should be shown', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} filterable={true} value={''} />);
            const control = screen.getByTestId('dropdown-control');

            // Act - Open dropdown
            await user.click(control);
            
            // Act - Type filter that matches nothing
            const filterInput = screen.getByPlaceholderText('검색');
            await user.type(filterInput, 'nonexistent');

            // Assert - No results message should be shown
            await waitFor(() => {
                expect(screen.getByText('검색 결과가 없습니다.')).toBeInTheDocument();
            });
        });

        it('When filterable prop is true and filterPlaceholder is provided, custom placeholder should be used', async () => {
            // Arrange
            const user = userEvent.setup();
            const customPlaceholder = 'Search items...';
            render(<TDropdown {...baseProps} filterable={true} filterPlaceholder={customPlaceholder} value={''} />);
            const control = screen.getByTestId('dropdown-control');

            // Act - Open dropdown
            await user.click(control);

            // Assert - Custom placeholder should be used
            await waitFor(() => {
                expect(screen.getByPlaceholderText(customPlaceholder)).toBeInTheDocument();
            });
        });

        it('When pressing Escape in filter input, dropdown should close', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} filterable={true} value={''} onClose={mockOnClose} />);
            const control = screen.getByTestId('dropdown-control');

            // Act - Open dropdown
            await user.click(control);
            
            // Act - Focus filter and press Escape
            const filterInput = screen.getByPlaceholderText('검색');
            await user.click(filterInput);
            await user.keyboard('{Escape}');

            // Assert - onClose should be called
            expect(mockOnClose).toHaveBeenCalledTimes(1);
        });

        it('When filter input is cleared, all items should be shown again', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} filterable={true} value={''} />);
            const control = screen.getByTestId('dropdown-control');

            // Act - Open dropdown and filter
            await user.click(control);
            const filterInput = screen.getByPlaceholderText('검색');
            await user.type(filterInput, 'apple');
            
            // Act - Clear filter
            await user.clear(filterInput);

            // Assert - All items should be visible again
            await waitFor(() => {
                expect(screen.getByText('Apple')).toBeInTheDocument();
                expect(screen.getByText('Banana')).toBeInTheDocument();
                expect(screen.getByText('Cherry')).toBeInTheDocument();
            });
        });
    });

    describe('Event', () => {
        it('When the onOpen prop is provided and user clicks root, it will be called exactly once.', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} onOpen={mockOnOpen} />);
            const control = screen.getByTestId('dropdown-control');

            // Act
            await user.click(control);

            // Assert
            expect(mockOnOpen).toHaveBeenCalledTimes(1);
        });

        it('When the onClose prop is provided and the user clicks the root element twice, it will be called exactly once.', async () => {
            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} onClose={mockOnClose} />);
            const control = screen.getByTestId('dropdown-control');

            // Act
            await user.click(control);
            await user.click(control);

            // Assert
            expect(mockOnClose).toHaveBeenCalledTimes(1);
        });

        it('Should call onChange prop exactly once when an item is clicked by the user.', async () => {
            // Arrange
            const user = userEvent.setup();

            const TestDropdown = () => {
                const [state, setState] = useState('');
                const onChange = (value: string) => {
                    setState(value);
                    mockOnChange(value);
                };
                return <TDropdown items={testItems} value={state} onChange={onChange} />;
            };

            render(<TestDropdown />);
            const control = screen.getByTestId('dropdown-control');

            // Assert
            expect(mockOnChange).toHaveBeenCalledTimes(0);

            // Act
            await user.click(control);

            // Arrange
            const testItemRoot = screen.getByText(testItems[0].text);

            // Act
            await user.click(testItemRoot);

            // Assert
            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(mockOnChange).toHaveBeenCalledWith(testItems[0].value);
        });
    });
});
