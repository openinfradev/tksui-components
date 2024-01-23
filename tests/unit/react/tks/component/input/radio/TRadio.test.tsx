import TRadio from '~/input/radio/TRadio';
import {render, screen} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('TRadio', () => {

    const mockFn = jest.fn();

    beforeEach(() => { mockFn.mockClear(); });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';

            render(<TRadio className={testData} onSelect={mockFn}/>);

            const root = screen.getByTestId('t-radio-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};

            render(<TRadio style={testData} onSelect={mockFn}/>);

            const root = screen.getByTestId('t-radio-root');

            // Assert
            expect(root).toHaveStyle(testData);

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';

            render(<TRadio id={testData} onSelect={mockFn}/>);

            const root = screen.getByTestId('t-radio-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);

        });


        it('When radio selected, icon has t-radio__icon--selected class', () => {

            // Arrange
            render(<TRadio selected={true} onSelect={mockFn}/>);

            const icon = screen.getByRole('img');

            // Assert
            expect(icon).toHaveClass('t-radio__icon--selected');

        });

        it('When radio deselected, icon has t-radio__icon--deselected class', () => {

            // Arrange
            render(<TRadio selected={false} onSelect={mockFn}/>);

            const icon = screen.getByRole('img');

            // Assert
            expect(icon).toHaveClass('t-radio__icon--deselected');

        });

        it('When disabled prop is applied, root has t-radio--disabled class', () => {

            // Arrange
            render(<TRadio disabled={true} onSelect={mockFn}/>);

            const root = screen.getByTestId('t-radio-root');

            // Assert
            expect(root).toHaveClass('t-radio--disabled');

        });

        it('When disabled prop is applied, root will be applied -1 to tabIndex', () => {

            // Arrange
            render(<TRadio disabled onSelect={mockFn}/>);

            const container = screen.getByTestId('t-radio-container');

            // Assert
            expect(container).toHaveAttribute('tabIndex', '-1');

        });

    });

    describe('Event', () => {

        it('When clicking an radio item , onSelect handler is called', async () => {

            // Arrange
            const testChildren = 'test content';

            const user = userEvent.setup();

            render(<TRadio onSelect={mockFn}>{testChildren}</TRadio>);

            const content = screen.getByText(testChildren);

            // Act
            await user.click(content);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('When disabled prop is applied, onSelect is not called', async () => {

            // Arrange
            const testChildren = 'test content';

            const user = userEvent.setup();

            render(<TRadio disabled={true} onSelect={mockFn}>{testChildren}</TRadio>);

            const content = screen.getByText(testChildren);

            // Act
            await user.click(content);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(0);

        });

        it('When pressing Enter on the thumb, onSelect handler is called', async () => {

            // Arrange
            const testChildren = 'test content';

            const user = userEvent.setup();

            render(<TRadio selected={false} onSelect={mockFn}>{testChildren}</TRadio>);

            const content = screen.getByText(testChildren);

            // Act
            await user.tab();
            await user.type(content, '{enter}', {skipClick: true});

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('When pressing Space on the thumb, onSelect handler is called', async () => {

            // Arrange
            const testChildren = 'test content';

            const user = userEvent.setup();

            render(<TRadio selected={false} onSelect={mockFn}>{testChildren}</TRadio>);

            const content = screen.getByText(testChildren);

            // Act
            await user.tab();
            await user.type(content, ' ', {skipClick: true});

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

    });

    describe('Content', () => {

        it('When children prop applied, it should be displayed on content area', () => {

            // Arrange
            const testData = 'test content';

            render(<TRadio onSelect={mockFn}>{testData}</TRadio>);

            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });

        it('When positive value applied and the radio button selected, positive value pass on onSelected handler', async () => {

            // Arrange
            let testData = null;
            const testPositiveValue = 'changePositiveValue';

            const user = userEvent.setup();

            render(<TRadio
                           positiveValue={testPositiveValue}
                           onSelect={(positiveValue) => {
                               testData = positiveValue;
                           }}/>);

            const icon = screen.getByRole('img');

            // Act
            await user.click(icon);

            // Assert
            expect(testData).toBe(testPositiveValue);

        });

    });

});