import {render, screen} from '@testing-library/react';
import TStepBox from '~/data-container/step-box/TStepBox';

describe('TStepBox', () => {

    const mockOnChange = jest.fn();
    const stepLabels = ['Step 1', 'Step 2', 'Step 3'];
    const steps = [
        <div data-testid='step-1' key={1}>Step 1 Content</div>,
        <div data-testid='step-2' key={2}>Step 2 Content</div>,
        <div data-testid='step-3' key={3}>Step 3 Content</div>,
    ];

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(
                <TStepBox value={1}
                          stepLabels={stepLabels}
                          onChange={mockOnChange}
                          className={testClassName}
                >
                    {steps}
                </TStepBox>,
            );
            const root = screen.getByTestId('step-box-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('Style prop applies to root', () => {

            // Arrange
            const testStyle = {width: '500px', color: 'blue'};
            render(
                <TStepBox
                    value={1}
                    stepLabels={stepLabels}
                    onChange={mockOnChange}
                    style={testStyle}
                >
                    {steps}
                </TStepBox>,
            );
            const root = screen.getByTestId('step-box-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });


        it('ID prop applies to root', () => {

            // Arrange
            const testId = 'test-class';
            render(
                <TStepBox
                    value={1}
                    stepLabels={stepLabels}
                    onChange={mockOnChange}
                    id={testId}
                >
                    {steps}
                </TStepBox>,
            );
            const root = screen.getByTestId('step-box-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testId);

        });
    });

    describe('Render', () => {

        it('Renders without errors', () => {

            // Arrange
            render(
                <TStepBox
                    value={1}
                    stepLabels={stepLabels}
                    onChange={mockOnChange}
                >
                    {steps}
                </TStepBox>,
            );

            // Assert
            expect(screen.getByTestId('step-box-root')).toBeInTheDocument();
        });

        it('Renders with default labels and buttons', () => {

            // Arrange
            render(
                <TStepBox
                    value={1}
                    stepLabels={stepLabels}
                    onChange={mockOnChange}
                >
                    {steps}
                </TStepBox>,
            );
            const root = screen.getByTestId('step-box-root');

            // Assert
            // eslint-disable-next-line testing-library/no-node-access
            expect(root.getElementsByClassName('t-step-box-header__step__number').length).toBe(3);
            // eslint-disable-next-line testing-library/no-node-access
            expect(root.getElementsByClassName('t-step-box-header__step__label').length).toBe(3);
            // eslint-disable-next-line testing-library/no-node-access
            expect(root.getElementsByClassName('t-step-box-item').length).toBe(1);
            expect(screen.getByRole('button', {name: 'Previous'})).toBeInTheDocument();
            expect(screen.getByRole('button', {name: 'Next'})).toBeInTheDocument();
        });

        it('Renders custom button labels', () => {

            // Arrange
            render(
                <TStepBox value={1}
                          stepLabels={stepLabels}
                          onChange={mockOnChange}
                          prevButtonLabel='Custom Prev'
                          nextButtonLabel='Custom Next'
                >
                    {steps}
                </TStepBox>,
            );

            // Assert
            expect(screen.getByText('Custom Prev')).toBeInTheDocument();
            expect(screen.getByText('Custom Next')).toBeInTheDocument();
        });
    });
});
