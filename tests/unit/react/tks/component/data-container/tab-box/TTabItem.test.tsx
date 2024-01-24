import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TTabItem from '~/data-container/tab-box/TTabItem';
import TTabBoxContext from '~/data-container/tab-box/TTabBoxContext';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TTabItem', () => {

    const mockOnChangeActiveTab = jest.fn();

    const baseProps = {
        index: 1,
        label: 'Tab 1',
        value: 1,
        content: <div>Tab 1 Content</div>,
    };

    const tab2Props = {
        index: 2,
        label: 'Tab 2',
        value: 2,
        content: <div>Tab 2 Content</div>,
    };

    const baseContext = {
        activeTab: 1,
        onChangeActiveTab: mockOnChangeActiveTab,
    };

    beforeEach(() => {
        mockOnChangeActiveTab.mockClear();
    });

    describe('Render', () => {
        it('Renders without errors', () => {

            // Arrange
            render(<TTabItem {...baseProps} />);

            // Assert
            expect(screen.getByTestId('tab-box-item-root')).toBeInTheDocument();
        });

        it('Applies active class when activeTab matches value', () => {

            // Arrange
            render(
                <TTabBoxContext.Provider value={baseContext}>
                    <TTabBoxContext.Consumer>
                        {() => <TTabItem {...baseProps}/>}
                    </TTabBoxContext.Consumer>
                </TTabBoxContext.Provider>,
            );
            const root = screen.getByTestId('tab-box-item-root');

            // Assert
            expect(root).toHaveClass('t-tab-item-label--active');
        });
    });

    describe('Event', () => {
        it('Registers ripple effect on mouse click', async () => {

            // Arrange
            const user = userEvent.setup();
            render(
                <TTabBoxContext.Provider value={baseContext}>
                    <TTabBoxContext.Consumer>
                        {() => <TTabItem {...tab2Props}/>}
                    </TTabBoxContext.Consumer>
                </TTabBoxContext.Provider>,
            );
            const root = screen.getByTestId('tab-box-item-root');

            // Act
            await user.click(root);

            // Assert
            expect(root.getElementsByClassName('t-ripple')).toHaveLength(1);
        });

        it('Calls onChangeActiveTab, when click the disabled tab', async () => {

            // Arrange
            const user = userEvent.setup();
            render(
                <TTabBoxContext.Provider value={baseContext}>
                    <TTabBoxContext.Consumer>
                        {() => <TTabItem {...tab2Props}/>}
                    </TTabBoxContext.Consumer>
                </TTabBoxContext.Provider>,
            );
            const root = screen.getByTestId('tab-box-item-root');

            // Assert
            expect(mockOnChangeActiveTab).toHaveBeenCalledTimes(0);

            // Act
            await user.click(root);

            // Assert
            expect(mockOnChangeActiveTab).toHaveBeenCalledTimes(1);
        });
    });

});