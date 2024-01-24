import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TStepBoxItem from '~/data-container/step-box/TStepBoxItem';
import TStepBoxContext from '~/data-container/step-box/TStepBoxContext';
``
jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TStepBoxItem', () => {
    const mockOnClickPrev = jest.fn();
    const mockOnClickNext = jest.fn();
    const mockValidateStep = jest.fn(() => true);
    const mockOnChangeCurrentStep = jest.fn();

    const baseProps = {
        prevButtonLabel: 'Prev',
        nextButtonLabel: 'Next',
        completeButtonLabel: 'Complete',
        onClickPrev: mockOnClickPrev,
        onClickNext: mockOnClickNext,
        validateStep: mockValidateStep,
    };

    const baseContext = {
        totalStep: 0,
        currentStep: 0,
        onChangeCurrentStep: mockOnChangeCurrentStep,
        prevButtonLabel: '',
        nextButtonLabel: '',
        completeButtonLabel: '',
    };

    beforeEach(() => {
        mockOnClickPrev.mockClear();
        mockOnClickNext.mockClear();
        mockValidateStep.mockClear();
    });

    describe('Render', () => {
        it('Renders without errors', () => {

            // Arrange
            render(<TStepBoxItem {...baseProps}>Content</TStepBoxItem>);

            // Assert
            expect(screen.getByTestId('step-box-item-root')).toBeInTheDocument();
        });

        it('Renders custom button labels', () => {

            // Arrange
            render(
                <TStepBoxItem
                    prevButtonLabel={'Custom Prev'}
                    nextButtonLabel={'Custom Next'}
                    completeButtonLabel={'Custom CompleteButton'}
                />,
            );

            // Assert
            expect(screen.getByRole('button', {name: 'Custom Prev'})).toBeInTheDocument();
            expect(screen.getByRole('button', {name: 'Custom CompleteButton'})).toBeInTheDocument();
        });

    });

    describe('Style', () => {
        it('Classname prop applies to root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(
                <TStepBoxItem {...baseProps} className={testClassName}>
                    Content
                </TStepBoxItem>,
            );
            const root = screen.getByTestId('step-box-item-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('Style prop applies to root', () => {

            // Arrange
            const testStyle = {width: '500px', color: 'blue'};
            render(
                <TStepBoxItem {...baseProps} style={testStyle}>
                    Content
                </TStepBoxItem>,
            );
            const root = screen.getByTestId('step-box-item-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });
    });

    describe('Event', () => {
        it('Calls onClickPrev when previous button is clicked', async () => {
            // Arrange
            const user = userEvent.setup();
            render(
                <TStepBoxContext.Provider value={baseContext}>
                    <TStepBoxContext.Consumer>
                        {() => <TStepBoxItem {...baseProps}/>}
                    </TStepBoxContext.Consumer>
                </TStepBoxContext.Provider>,
            );
            const prevButton = screen.getByRole('button', {name: 'Prev'});

            // Assert
            expect(mockOnClickPrev).toHaveBeenCalledTimes(0);

            // Act
            await user.click(prevButton);

            // Assert
            expect(mockOnChangeCurrentStep).toHaveBeenCalledTimes(1);
        });

        it('Calls onClickNext and onChangeCurrentStep when clicking the next button if validation passes', async () => {

            // Arrange
            const user = userEvent.setup();
            mockValidateStep.mockReturnValue(true);
            render(
                <TStepBoxContext.Provider value={baseContext}>
                    <TStepBoxContext.Consumer>
                        {() => <TStepBoxItem {...baseProps}/>}
                    </TStepBoxContext.Consumer>
                </TStepBoxContext.Provider>,
            );
            const nextButton = screen.getByRole('button', {name: 'Complete'});

            // Assert
            expect(mockValidateStep).toHaveBeenCalledTimes(0);

            // Act
            await user.click(nextButton);

            // Assert
            expect(mockValidateStep).toHaveBeenCalledTimes(1);
        });
    });
});