import {render, screen} from '@testing-library/react';
import TTooltip from '~/guide/tooltip/TTooltip';
import userEvent from '@testing-library/user-event';
import ResizeObserver from 'resize-observer-polyfill'

global.ResizeObserver = ResizeObserver;

describe('TTooltip', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';

            render(<TTooltip className={testData} isOpen={true} content={testData}/>);

            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveClass(testData);

        });

        it('Renders without errors', () => {

            // Assign
            const testData = 'test content';

            render(<TTooltip isOpen={true} content={testData}/>);

            const content = screen.getByText(testData);

            // Assert
            expect(content).toBeInTheDocument();

        });

    });

    describe('Event', () => {

        it('When you hover over a icon, tooltip is displayed', async () => {

            // Arrange
            const testData = 'tooltip content test';
            const tooltipId = 'tooltip-test';
            const spanContent = 'span content';

            render(
                <>
                    <TTooltip id={tooltipId}/>
                    <span data-tooltip-id={tooltipId}
                          data-tooltip-content={testData}
                          data-tooltip-place={'left'}
                          children={spanContent}/>
                </>
            );

            const item = screen.getByText(spanContent);

            const user = userEvent.setup();

            // Act
            await user.hover(item);

            // Arrange
            const content = screen.getByText(testData);

            // Assert
            expect(content).toBeInTheDocument();
        });

    });

});