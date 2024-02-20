import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TDropdown from '~/input/dropdown/TDropdown';


describe('TDropdown', () => {

    const mockOnChange = jest.fn();
    const mockOnOpen = jest.fn();
    const mockOnClose = jest.fn();
    const baseProps = {value: 'hello', onChange: mockOnChange, items: []};

    beforeEach(() => { mockOnChange.mockClear(); });


    describe('Style', () => {
        it('renders without errors', () => {
            render(<TDropdown {...baseProps}/>);
            expect(screen.getByTestId('dropdown-root')).toBeInTheDocument();
        });

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TDropdown {...baseProps} className={'class-name-prop'}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root)
                .toHaveClass('class-name-prop');
        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TDropdown {...baseProps} style={{width: '300px'}}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveStyle({width: '300px'});
        });

        it('Width prop applies to root', () => {

            // Arrange
            render(<TDropdown {...baseProps} width={'300px'}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root)
                .toHaveStyle({width: '300px'});
        });

        it('Id prop applies to root', () => {

            // Arrange
            const idProp = 'my-id';
            render(<TDropdown {...baseProps} id={idProp}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveAttribute('id', idProp);
        });

        it('When type prop is set to underline, root has t-dropdown--underline class', () => {

            // Arrange
            render(<TDropdown {...baseProps} type={'underline'}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root)
                .toHaveClass('t-dropdown--underline');
        });
    });


    describe('Event', () => {

        it('When the onOpen prop is provided and user clicks root, it will be called exactly once.', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} onOpen={mockOnOpen} />);
            const control = screen.getByTestId('dropdown-control');

            // Act
            await act(async () => {
                await user.click(control);
            });

            // Assert
            expect(mockOnOpen).toHaveBeenCalledTimes(1);
        });

        it('When the onClose prop is provided and the user clicks the root element twice, it will be called exactly once.', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropdown {...baseProps} onClose={mockOnClose} />);
            const control = screen.getByTestId('dropdown-control');


            // Act
            await act(async () => {
                await user.click(control);
            });
            await act(async () => {
                await user.click(control);
            });

            // Assert
            expect(mockOnClose).toHaveBeenCalledTimes(1);
        });
    });
});
