import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TDropHolder from '~/data-container/drop-holder/TDropHolder';

describe('TDropHolder', () => {
    const mockOnClickItem = jest.fn();
    const baseProps = {
        children: <div>Holder Content</div>,
        items: [
            {text: 'Item 1', onClick: mockOnClickItem},
            {text: 'Item 2', onClick: mockOnClickItem},
        ],
        alignment: 'bottom-center' as 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right',
    };

    beforeEach(() => {
        mockOnClickItem.mockClear();
    });
    describe('Render', () => {

        it('renders without errors', () => {

            // Arrange
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);

            // Assert
            expect(screen.getByTestId('drop-holder-root')).toBeInTheDocument();
        });

        it('child nodes render without error : t-drop-holder__anchor ', () => {

            // Arrange
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root.getElementsByClassName('t-drop-holder__anchor').length).toBe(1);

        });

        it('child nodes render without error : t-drop-holder__holder ', () => {

            // Arrange
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root.getElementsByClassName('t-drop-holder__holder').length).toBe(1);

        });

    });

    describe('Event', () => {
        it('opens and closes on click', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(root).toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');
        });

        it('closes on outside click', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');
            const outsideElement = document.createElement('div');
            document.body.appendChild(outsideElement);

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(root).toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => {
                await user.click(outsideElement);
            });

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');
        });

        it('renders items with correct text', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            baseProps.items.forEach((item) => {
                const itemElement = screen.getByText(item.text);
                expect(itemElement).toBeInTheDocument();
            });
        });

        it('calls onClickItem when an item is clicked', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            baseProps.items.forEach(async (item) => {
                const itemElement = screen.getByText(item.text);
                await act(async () => {
                    await userEvent.click(itemElement);
                });
                expect(mockOnClickItem).toHaveBeenCalledWith(expect.anything());
            });
        });
    });

});