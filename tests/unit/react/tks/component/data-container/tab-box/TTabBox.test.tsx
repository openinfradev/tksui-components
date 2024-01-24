import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TTabBox from '~/data-container/tab-box/TTabBox';
import TTabItem from '~/data-container/tab-box/TTabItem';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TTabBox', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    describe('Render', () => {
        it('Renders without errors', () => {

            // Arrange
            render(
                <TTabBox value={0} onChange={mockOnChange}>
                    <TTabItem value={0} label="Tab 1" content={<div>Tab 1 Content</div>}/>
                    <TTabItem value={1} label="Tab 2" content={<div>Tab 2 Content</div>}/>
                </TTabBox>,
            );

            // Assert
            expect(screen.getByTestId('tab-box-root')).toBeInTheDocument();
        });

        it('Renders the correct tab content', () => {

            // Arrange
            render(
                <TTabBox value={1} onChange={mockOnChange}>
                    <TTabItem value={0} label="Tab 1" content={<div>Tab 1 Content</div>}/>
                    <TTabItem value={1} label="Tab 2" content={<div>Tab 2 Content</div>}/>
                </TTabBox>,
            );

            // Assert
            expect(screen.getByText('Tab 2 Content')).toBeInTheDocument();
        });
    });

    describe('Event', () => {
        it('Changes the active tab on click', async () => {

            // Arrange
            const user = userEvent.setup();
            render(
                <TTabBox value={0} onChange={mockOnChange}>
                    <TTabItem value={0} label="Tab 1" content={<div>Tab 1 Content</div>}/>
                    <TTabItem value={1} label="Tab 2" content={<div>Tab 2 Content</div>}/>
                </TTabBox>,
            );
            const tab2 = screen.getByText('Tab 2');

            // Assert
            expect(mockOnChange).toHaveBeenCalledTimes(0);

            // Act
            await user.click(tab2);

            // Assert
            expect(mockOnChange).toHaveBeenCalledTimes(1);
        });
    });
});