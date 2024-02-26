import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TDropHolder from '~/data-container/drop-holder/TDropHolder';
import {TDropHolderItem} from '@/components';

describe('TDropHolder', () => {
    const mockOnClickItem = jest.fn();
    const mockOnOpen = jest.fn();
    const mockOnClose = jest.fn();
    const baseProps = {
        children: <div>Holder Content</div>,
        items: [
            {text: 'Item 1', onClick: mockOnClickItem},
            {text: 'Item 2', onClick: mockOnClickItem},
        ],
        alignment: 'bottom-center' as 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right',
    };

    beforeEach(() => {
        mockOnClickItem.mockClear();
    });


    describe('Style', () => {

        it('ClassName Prop applies to root', () => {

            // Arrange
            const testClass = 'test-class';
            render(<TDropHolder {...baseProps} className={testClass}>button test</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root).toHaveClass('test-class');
        });

        it('Style Prop applies to root', () => {

            // Arrange
            const testStyle = {border: '1px solid blue'};
            render(<TDropHolder {...baseProps} style={testStyle}>button test</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root).toHaveStyle(testStyle);

        });

        it('ID Prop applies to root', () => {

            // Arrange
            const testId = 'test-id';
            render(<TDropHolder {...baseProps} id={testId}>button test</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testId);
        });

    });

    describe('Render', () => {

        it('Renders without errors', () => {

            // Arrange
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);

            // Assert
            expect(screen.getByTestId('drop-holder-root')).toBeInTheDocument();
        });

        it('Child nodes render without error : t-drop-holder__anchor ', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => { await user.click(root); });

            const dropHolderItemsRoot = screen.getByTestId('t-drop-holder__items');

            // Assert
            expect(dropHolderItemsRoot).toBeInTheDocument();
        });

        it('Child nodes render without error : t-drop-holder__holder', () => {

            // Arrange
            const testClassName = 't-drop-holder__holder';
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const holderRoot = screen.getByTestId('drop-holder-holder');

            // Assert
            expect(holderRoot).toHaveClass(testClassName);

        });

        it('When title props is applied, title element will be displayed', async () => {

            // Arrange
            const title = 'Test Title';
            render(<TDropHolder {...baseProps} title={title}>Test DropHolder</TDropHolder>);

            const user = userEvent.setup();
            const root = screen.getByTestId('drop-holder-root');
            await act(async () => { await user.click(root); });

            const titleElement = screen.getByTestId('drop-holder-title');

            // Assert
            expect(titleElement).toBeInTheDocument();
            expect(titleElement).toHaveTextContent(title);
        });

    });


    describe('Item', () => {

        it('When an item is provided with an icon attribute, TIcon should be displayed before the text', async () => {

            // Arrange

            const icons = ['manage_accounts', 'logout'];

            const items: TDropHolderItem[] = [
                {text: 'Item 1', icon: icons[0]},
                {text: 'Item 2', icon: icons[1]},
            ];

            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} items={items}>Test DropHolder</TDropHolder>);

            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => { await user.click(root); });

            // Arrange
            const itemElements = screen.getAllByRole('listitem');

            // Assert
            expect(itemElements[0]).toHaveTextContent(icons[0]);
            expect(itemElements[1]).toHaveTextContent(icons[1]);
        });
    });

    describe('Event', () => {

        it('When user clicks root, TDropHolder opens and then closes', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => { await user.click(root); });

            // Assert
            expect(root).toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => { await user.click(root); });

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');
        });

        it('When the onOpen prop is provided and user clicks root, it will be called exactly once.', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} onOpen={mockOnOpen}>Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(mockOnOpen).toHaveBeenCalledTimes(1);
        });

        it('When the onClose prop is provided and the user clicks the root element twice, it will be called exactly once.', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} onClose={mockOnClose}>Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => {
                await user.click(root);
            });
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(mockOnClose).toHaveBeenCalledTimes(1);
        });

        it('When user clicks outside, TDropHolder closes', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');
            const outsideElement = document.createElement('div');
            document.body.appendChild(outsideElement);

            // Act
            await act(async () => { await user.click(root); });

            // Assert
            expect(root).toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => { await user.click(outsideElement); });

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');
        });

        it('When user clicks and opens TDropHolder, item elements are displayed', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => { await user.click(root); });

            // Assert
            baseProps.items.forEach((item) => {
                const itemElement = screen.getByText(item.text);
                expect(itemElement).toBeInTheDocument();
            });
        });

        it('When user clicks an item, onClickItem is called', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            // eslint-disable-next-line no-restricted-syntax
            for (const item of baseProps.items) {

                // eslint-disable-next-line no-await-in-loop
                await act(async () => {
                    await user.click(root);
                });

                const itemElement = screen.getByText(item.text);

                // eslint-disable-next-line no-await-in-loop
                await act(async () => { await userEvent.click(itemElement); });
            }

            // Assert
            expect(mockOnClickItem).toHaveBeenCalledTimes(baseProps.items.length);
        });

        it('When a user clicks the TDropHolder that is provided with customItem, custom item elements are displayed', async () => {

            // Arrange
            const user = userEvent.setup();
            const customTestId = 'test-custom-element';
            const CustomElement = () => (<div data-testid={customTestId}>👻</div>);

            render(<TDropHolder alignment={'top-center'} customItem={<CustomElement/>}>Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => { await user.click(root); });

            // Assert
            const customItemRoot = screen.getByTestId(customTestId);
            expect(customItemRoot).toBeInTheDocument();

        });
    });

});
