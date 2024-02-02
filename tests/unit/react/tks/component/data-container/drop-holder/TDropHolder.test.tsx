import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TDropHolder from '~/data-container/drop-holder/TDropHolder';
import TButton from "../../../../../../../src/components/button/button/TButton";

describe('TDropHolder', () => {
    const mockOnClickItem = jest.fn();
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
            const testData = 'test-class'
            render(<TDropHolder {...baseProps} className={testData}>button test</TDropHolder>);


            const root = screen.getByTestId('drop-holder-root')

            expect(root)
                .toHaveClass('test-class');
        })

        it('Style Prop applies to root', () => {
            const testData = {border: '1px solid blue'}
            render(<TDropHolder {...baseProps} style={testData}>button test</TDropHolder>);


            const root = screen.getByTestId('drop-holder-root');

            expect(root)
                .toHaveStyle(testData);

        })

        it('ID Prop applies to root', () => {
            const testData = 'test-id'
            render(<TDropHolder {...baseProps} id={testData}>button test</TDropHolder>);


            const root = screen.getByTestId('drop-holder-root')

            expect(root)
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);
        })

    })

    describe('Render', () => {

        it('Renders without errors', () => {

            // Arrange
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);

            // Assert
            expect(screen.getByTestId('drop-holder-root')).toBeInTheDocument();
        });

        it('Child nodes render without error : t-drop-holder__anchor ', () => {

            // Arrange
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root.getElementsByClassName('t-drop-holder__anchor').length).toBe(1);

        });

        it('Child nodes render without error : t-drop-holder__holder ', () => {

            // Arrange
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Assert
            expect(root.getElementsByClassName('t-drop-holder__holder').length).toBe(1);

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
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(root).toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');
        });

        it('When user clicks outside, TDropHolder closes', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');
            const outsideElement = document.createElement('div');
            document.body.appendChild(outsideElement);

            // Act
            await act(async () => {
                await user.click(root);
            });

            // Assert
            expect(root).toHaveClass('t-drop-holder--open');

            // Act
            await act(async () => {
                await user.click(outsideElement);
            });

            // Assert
            expect(root).not.toHaveClass('t-drop-holder--open');
        });

        it('When user clicks and opens TDropHolder, item elements are displayed', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDropHolder {...baseProps} >Test DropHolder</TDropHolder>);
            const root = screen.getByTestId('drop-holder-root');

            // Act
            await act(async () => {
                await user.click(root);
            });

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
            for (const item of baseProps.items) {

                await act(async () => {
                    await user.click(root);
                });

                const itemElement = screen.getByText(item.text);

                await act(async () => {
                    await userEvent.click(itemElement);
                })
            }

            // Assert
            expect(mockOnClickItem).toHaveBeenCalledTimes(baseProps.items.length);
        });
    });

});