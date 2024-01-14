import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TActionBar from '~/data-container/action-bar/TActionBar';
import TButton from '~/button/button/TButton';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TPagination', () => {

    const mockFn = jest.fn();

    beforeEach(() => { mockFn.mockClear(); });

    describe('style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TActionBar className={'class-name-prop'}/>);
            const root = screen.getByRole('group');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TActionBar style={{width: '100%'}}/>);
            const root = screen.getByRole('group');

            // Assert

            expect(root)
                .toHaveStyle({width: '100%'});
        });

        it('leftAction prop applies to root', () => {


            // Arrange
            render(<TActionBar leftAction={<TButton>left action button</TButton>}/>);

            // eslint-disable-next-line testing-library/no-node-access
            const root = screen.getByRole('button').parentElement;
            // Assert

            expect(root).toHaveClass('t-action-bar__container__left-action');
        });

        it('centerAction prop applies to root', () => {


            // Arrange
            render(<TActionBar centerAction={<TButton>center action button</TButton>}/>);

            // eslint-disable-next-line testing-library/no-node-access
            const root = screen.getByRole('button').parentElement;
            // Assert

            expect(root).toHaveClass('t-action-bar__container__center-action--alone');
        });

        it('rightAction prop applies to root', () => {


            // Arrange
            render(<TActionBar rightAction={<TButton>right action button</TButton>}/>);

            // eslint-disable-next-line testing-library/no-node-access
            const root = screen.getByRole('button').parentElement;
            // Assert

            expect(root).toHaveClass('t-action-bar__container__right-action');
        });

    });

    describe('action button', () => {

        it('leftAction button click invokes the provided onClick handler', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TActionBar leftAction={<TButton onClick={mockFn}>left action button</TButton>}/>);
            const root = screen.getByText('left action button');
            // Assert

            expect(mockFn).toHaveBeenCalledTimes(0);

            // Act
            await user.click(root);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('centerAction button click invokes the provided onClick handler', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TActionBar centerAction={<TButton onClick={mockFn}>left action button</TButton>}/>);
            const root = screen.getByText('left action button');
            // Assert

            expect(mockFn).toHaveBeenCalledTimes(0);

            // Act
            await user.click(root);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('rightAction button click invokes the provided onClick handler', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TActionBar rightAction={<TButton onClick={mockFn}>left action button</TButton>}/>);
            const root = screen.getByText('left action button');
            // Assert

            expect(mockFn).toHaveBeenCalledTimes(0);

            // Act
            await user.click(root);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

    });

});
