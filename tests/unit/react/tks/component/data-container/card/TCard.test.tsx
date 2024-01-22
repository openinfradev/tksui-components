import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TCard from '~/data-container/card/TCard';
import TCardHeader from '~/data-container/card/TCardHeader';
import TCardContent from '~/data-container/card/TCardContent';

describe('TCard', () => {

    const mockOnClick = jest.fn();

    const testStyle = {
        width: '300px',
        height: '200px',
        background: 'red',
    };

    const baseProps = {
        onClick: mockOnClick,
        className: 'custom-class',
        clickable: true,
        selected: true,
        dashed: true,
        center: true,
        icon: 'edit',
        width: testStyle.width,
        height: testStyle.height,
        style: {backgroundColor: testStyle.background},
        tooltipId: 'tooltip-id',
        tooltipContent: 'Tooltip Content',
        tooltipPlace: 'bottom' as 'top' | 'bottom' | 'right' | 'left',
        tooltipHidden: false,
    };


    beforeEach(() => {
        mockOnClick.mockClear();
    });

    describe('Card Style', () => {
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

        it('applies dashed class to root', () => {

            // Arrange
            const dashedClass = 't-card--dashed';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(dashedClass);
        });

        it('applies center class to root', () => {

            // Arrange
            const centerClass = 't-card--center';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(centerClass);
        });

        it('applies width and height to root style', () => {

            // Arrange
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('applies icon to root style', () => {

            // Arrange
            const iconClass = 't-card-top__icon';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByRole('img');

            // Assert
            expect(root).toHaveClass(iconClass);
        });

        it('applies icon props to root style', () => {

            // Arrange
            const iconSize = 'large';
            const iconType = 'outlined';
            const iconColor = 'red';
            render(<TCard iconSize={iconSize} iconType={iconType} iconColor={iconColor} {...baseProps}>Card Content</TCard>);
            const iconRoot = screen.getByRole('img');

            // Assert
            expect(iconRoot).toHaveClass('t-icon--large');
            expect(iconRoot).toHaveClass('material-icons-outlined');
            expect(iconRoot).toHaveStyle({color: iconColor});
        });

        it('applies iconSize to root style', () => {

            // Arrange
            const iconSize = 'large';
            render(<TCard iconSize={iconSize} {...baseProps}>Card Content</TCard>);
            const root = screen.getByRole('img');

            // Assert
            expect(root).toHaveClass('t-icon--large');
        });

    });

    describe('Action', () => {
        it('calls onClick handler when clicked', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            await act(async () => {
                await user.click(root);
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


    describe('Card Header, Content Style', () => {

        it('renders without errors', () => {

            // Arrange
            const cardTitle = 'Card Title';
            const cardContent = 'Card cardContent';
            render(
                <TCard>
                    <TCardHeader title={cardTitle}/>
                    <TCardContent>{cardContent}</TCardContent>
                </TCard>,
            );
            // Assert
            expect(screen.getByText(cardTitle)).toBeInTheDocument();
            expect(screen.getByText(cardContent)).toBeInTheDocument();
        });

        it('applies custom className to root', () => {

            // Arrange
            const customClass = 'card__custom__class';
            render(
                <TCard>
                    <TCardHeader className={customClass}/>
                    <TCardContent className={customClass}>Card Content</TCardContent>
                </TCard>,
            );

            const headerRoot = screen.getByTestId('card-header-root');
            const contentRoot = screen.getByTestId('card-content-root');

            // Assert
            expect(headerRoot).toHaveClass(customClass);
            expect(contentRoot).toHaveClass(customClass);
        });

        it('applies custom Style to root', () => {

            // Arrange
            render(
                <TCard>
                    <TCardHeader title={'Card Title'} style={testStyle}/>
                    <TCardContent style={testStyle}>Card Content</TCardContent>
                </TCard>,
            );
            const headerRoot = screen.getByTestId('card-header-root');
            const contentRoot = screen.getByTestId('card-content-root');

            // Assert
            expect(headerRoot).toHaveStyle(testStyle);
            expect(contentRoot).toHaveStyle(testStyle);
        });

        it('applies icon props Style to root', () => {

            // Arrange
            const iconSize = 'large';
            const iconType = 'outlined';
            const iconColor = 'red';
            render(
                <TCard>
                    <TCardHeader title={'Card Title'} icon={'edit'} iconSize={iconSize} iconType={iconType} iconColor={iconColor}/>
                </TCard>,
            );
            const iconRoot = screen.getByRole('img');

            // Assert
            expect(iconRoot).toHaveClass('t-icon--large');
            expect(iconRoot).toHaveClass('material-icons-outlined');
            expect(iconRoot).toHaveStyle({color: iconColor});
        });

        it('applies subTitle to TCardHeader', () => {

            // Arrange
            const subTitle = 'Card Sub Title';
            render(
                <TCard> <TCardHeader subTitle={subTitle}/> </TCard>,
            );
            const headerRoot = screen.getByText(subTitle);

            // Assert
            expect(headerRoot).toBeInTheDocument();
        });


    });

});
