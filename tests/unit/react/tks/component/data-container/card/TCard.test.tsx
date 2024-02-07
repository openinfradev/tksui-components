import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TCard from '~/data-container/card/TCard';
import TCardHeader from '~/data-container/card/TCardHeader';
import TCardContent from '~/data-container/card/TCardContent';
import {TIconSize} from '@/components/icon/TIcon.interface';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));
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
        iconSize: 'small' as TIconSize,
        iconFill: true,
        iconColor: 'blue',
        width: testStyle.width,
        height: testStyle.height,
        style: {backgroundColor: testStyle.background},
        tooltipId: 'tooltip-id',
        tooltipTitle: 'Tooltip Title',
        tooltipContent: 'Tooltip Content',
        tooltipPlace: 'bottom' as 'top' | 'bottom' | 'right' | 'left',
        tooltipHidden: false,
    };


    beforeEach(() => {
        mockOnClick.mockClear();
    });

    describe('Render', () => {
        it('Renders without errors', () => {

            // Arrange
            render(<TCard {...baseProps}>Card Content</TCard>);

            // Assert
            expect(screen.getByText('Card Content')).toBeInTheDocument();
        });
    });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(<TCard {...baseProps} className={'test-class'}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('Clickable class applies to root', () => {

            // Arrange
            const clickableClass = 't-card--clickable';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(clickableClass);
        });

        it('Selected class applies to root', () => {

            // Arrange
            const selectedClass = 't-card--selected';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(selectedClass);
        });

        it('Dashed class applies to root', () => {

            // Arrange
            const dashedClass = 't-card--dashed';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(dashedClass);
        });

        it('Center class applies to root', () => {

            // Arrange
            const centerClass = 't-card--center';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveClass(centerClass);
        });

        it('Width and height applies to root style', () => {

            // Arrange
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('Icon to applies root style', () => {

            // Arrange
            const iconClass = 't-card-top__icon';
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByRole('img');

            // Assert
            expect(root).toHaveClass(iconClass);
        });

        it('Icon props applies to root', () => {

            // Arrange
            const iconSize = 'large';
            const iconFill = true;
            const iconColor = 'red';
            render(<TCard {...baseProps} icon={'title'} iconSize={iconSize} iconFill={iconFill} iconColor={iconColor}>Card Content</TCard>);
            const iconRoot = screen.getByRole('img');

            // Assert
            expect(iconRoot).toHaveClass('t-icon--large');
            expect(iconRoot).toHaveClass('t-icon-material--fill');
            expect(iconRoot).toHaveStyle({color: iconColor});
        });

        it('IconSize prop applies to root', () => {

            // Arrange
            const iconSize = 'large';
            render(<TCard {...baseProps} iconSize={iconSize}>Card Content</TCard>);
            const root = screen.getByRole('img');

            // Assert
            expect(root).toHaveClass('t-icon--large');
        });

    });

    describe('Action', () => {
        it('Calls onClick handler when clicked', async () => {

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

        it('Tooltip attributes applies to root', () => {

            // Arrange
            render(<TCard {...baseProps}>Card Content</TCard>);
            const root = screen.getByTestId('card-root');

            // Assert
            expect(root).toHaveAttribute('data-tooltip-id', 'tooltip-id');
            expect(root).toHaveAttribute('data-tooltip-place', 'bottom');
            expect(root).toHaveAttribute('data-tooltip-hidden', 'false');
        });
    });


    describe('Card Header, Content Style', () => {

        it('Renders without errors', () => {

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

        it('Custom className applies to root', () => {

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

        it('Custom Style applies to root', () => {

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

        it('Icon props style applies to root', () => {

            // Arrange
            const iconSize = 'large';
            const iconFill = true;
            const iconColor = 'red';
            render(
                <TCard>
                    <TCardHeader title={'Card Title'} icon={'edit'} iconSize={iconSize} iconFill={iconFill} iconColor={iconColor}/>
                </TCard>,
            );
            const iconRoot = screen.getByRole('img');

            // Assert
            expect(iconRoot).toHaveClass('t-icon--large');
            expect(iconRoot).toHaveClass('t-icon-material--fill');
            expect(iconRoot).toHaveStyle({color: iconColor});
        });

        it('SubTitle applies to TCardHeader', () => {

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
