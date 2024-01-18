import {render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TCard from '~/data-container/card/TCard';

describe('TCard', () => {

    const mockOnClick = jest.fn();
    const baseProps = {
        onClick: mockOnClick,
        className: 'custom-class',
        clickable: true,
        selected: true,
        width: '300px',
        height: '200px',
        style: {backgroundColor: 'red'},
        tooltipId: 'tooltip-id',
        tooltipContent: 'Tooltip Content',
        tooltipPlace: 'bottom' as 'top' | 'bottom' | 'right' | 'left',
        tooltipHidden: false,
    };

    beforeEach(() => {
        mockOnClick.mockClear();
    });

    describe('Style', () => {
        it('renders without errors', () => {

            // Arrange
            render(<TCard {...baseProps}>Card Content</TCard>);

            // Assert
            expect(screen.getByText('Card Content')).toBeInTheDocument();
        });

        it('applies custom className to root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(<TCard {...baseProps} className={'test-class'}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('applies clickable class to root', () => {

            // Arrange
            const clickableClass = 't-card--clickable';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(clickableClass);
        });

        it('applies selected class to root', () => {

            // Arrange
            const selectedClass = 't-card--selected';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(selectedClass);
        });

        it('applies width and height to root style', () => {

            // Arrange
            const testStyle = {
                width: '300px',
                height: '200px',
                backgroundColor: 'red',
            };
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });
    });

    describe('Action', () => {
        it('calls onClick handler when clicked', async () => {

            // Arrange
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            await act(async () => {
                await userEvent.click(root);
            });
            expect(mockOnClick).toHaveBeenCalledTimes(1);
        });

        it('applies tooltip attributes to root', () => {

            // Arrange
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveAttribute('data-tooltip-id', 'tooltip-id');
            expect(root).toHaveAttribute('data-tooltip-content', 'Tooltip Content');
            expect(root).toHaveAttribute('data-tooltip-place', 'bottom');
            expect(root).toHaveAttribute('data-tooltip-hidden', 'false');
        });
    });
});