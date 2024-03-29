import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TStepBoxFooter from '~/data-container/step-box/TStepBoxFooter';
import TStepBoxContext from '~/data-container/step-box/TStepBoxContext';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TStepBoxFooter', () => {

    const mockOnClickPrev = jest.fn();
    const mockOnClickNext = jest.fn();
    const mockValidateStep = jest.fn();
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
        mockOnChangeCurrentStep.mockClear();
    });

    describe('Render', () => {

        it('Renders without errors', () => {

            // Arrange
            render(<TStepBoxFooter {...baseProps} />);

            // Assert
            expect(screen.getByTestId('step-box-footer-root')).toBeInTheDocument();
        });

        it('Renders custom button labels', () => {

            // Arrange
            render(
                <TStepBoxFooter
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

    describe('Event', () => {
        it('Calls onClickPrev when clicking the previous button', async () => {

            // Arrange
            const user = userEvent.setup();
            render(
                <TStepBoxContext.Provider value={baseContext}>
                    <TStepBoxContext.Consumer>
                        {() => <TStepBoxFooter {...baseProps}/>}
                    </TStepBoxContext.Consumer>
                </TStepBoxContext.Provider>,
            );
            const prevButton = screen.getByRole('button', {name: 'Prev'});

            // Assert
            expect(mockOnChangeCurrentStep).toHaveBeenCalledTimes(0);

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
                        {() => <TStepBoxFooter {...baseProps}/>}
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
