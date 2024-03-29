import {render, screen} from '@testing-library/react';
import TStepBoxHeader from '~/data-container/step-box/TStepBoxHeader';

describe('TStepBoxHeader', () => {
    const baseProps = {
        content: [
            {stepNumber: 1, label: 'Step 1'},
            {stepNumber: 2, label: 'Step 2'},
            {stepNumber: 3, label: 'Step 3'},
        ],
    };

    describe('Render', () => {

        it('Renders without errors', () => {

            // Arrange
            render(<TStepBoxHeader {...baseProps} />);

            // Assert
            expect(screen.getByTestId('step-box-header-root')).toBeInTheDocument();
        });

        it('Renders steps with correct numbering and labels', () => {

            // Arrange
            render(<TStepBoxHeader {...baseProps} />);

            // Assert

            const listItems = screen.getAllByRole('listitem');

            expect(listItems.length).toBe(baseProps.content.length);

            baseProps.content.forEach((item, index) => {
                expect(listItems[index]).toHaveTextContent(item.stepNumber.toString());
                expect(listItems[index]).toHaveTextContent(item.label);
            });

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testId = 'test-id';
            render(<TStepBoxHeader content={[]} id={testId}/>);
            const root = screen.getByTestId('step-box-header-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testId);

        });

    });

});
