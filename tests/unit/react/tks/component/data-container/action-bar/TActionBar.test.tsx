import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TActionBar from '~/data-container/action-bar/TActionBar';
import TButton from '~/button/button/TButton';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TActionBar', () => {

    const mockFn = jest.fn();

    beforeEach(() => { mockFn.mockClear(); });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TActionBar className={'class-name-prop'}/>);
            const root = screen.getByTestId('t-action-bar-root');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TActionBar style={{width: '100%'}}/>);
            const root = screen.getByTestId('t-action-bar-root');

            // Assert

            expect(root)
                .toHaveStyle({width: '100%'});
        });

        it('LeftAction prop applies to root', () => {


            // Arrange
            render(<TActionBar leftAction={<TButton>left action button</TButton>}/>);

            // eslint-disable-next-line testing-library/no-node-access
            const root = screen.getByRole('button').parentElement;
            // Assert

            expect(root).toHaveClass('t-action-bar__container__left-action');
        });

        it('CenterAction prop applies to root', () => {


            // Arrange
            render(<TActionBar centerAction={<TButton>center action button</TButton>}/>);

            // eslint-disable-next-line testing-library/no-node-access
            const container = screen.getByTestId('t-action-bar__container');
            // Assert

            expect(container).toHaveClass('t-action-bar__container--center-alone');
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

    describe('Action button', () => {

        it('LeftAction button click invokes the provided onClick handler', async () => {

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

        it('CenterAction button click invokes the provided onClick handler', async () => {

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

        it('RightAction button click invokes the provided onClick handler', async () => {

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
