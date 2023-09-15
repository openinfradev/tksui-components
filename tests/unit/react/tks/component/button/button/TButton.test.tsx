import {act, render, screen, within} from '@testing-library/react';
import {useState} from 'react';

import userEvent from '@testing-library/user-event';
import TButton from '~/button/button/TButton';


jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TButton', () => {

    describe('style', () => {

        it('Classname prop applies to root', () => {
            render(<TButton className={'test-class'}>button test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('test-class');
        });


        it('Style prop applies to the root', () => {
            render(<TButton style={{color: 'red'}}>button test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveStyle({color: 'red'});
        });


        it('When main prop is applied, root has t-button--main class', () => {
            render(<TButton main>button test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--main');
        });


        it('When primary prop is applied, root has t-button--primary class', () => {
            render(<TButton primary>button test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--primary');
        });

        it('When rounded prop is applied, root has t-button--rounded class', () => {
            render(<TButton rounded>button test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--rounded');
        });

        it('When point prop is applied, root has t-button--point class', () => {
            render(<TButton point>button test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--point');
        });
    });


    describe('size', () => {

        it('When valid size is entered, it will be applied in the classname', () => {
            render(<>
                <TButton size={'xsmall'}>xsmall button</TButton>
                <TButton size={'small'}>small button</TButton>
                <TButton size={'medium'}>medium button</TButton>
                <TButton size={'large'}>large button</TButton>
            </>);

            const buttons = screen.getAllByRole('button');

            expect(buttons[0])
                .toHaveClass('t-button--xsmall');
            expect(buttons[1])
                .toHaveClass('t-button--small');
            expect(buttons[2])
                .toHaveClass('t-button--medium');
            expect(buttons[3])
                .toHaveClass('t-button--large');
        });


        it('When invalid size is entered or not entered, medium size will is applied', () => {
            render(<>
                <TButton size={'invalid'}>button</TButton>
                <TButton>button</TButton>
            </>);

            const buttons = screen.getAllByRole('button');

            expect(buttons[0])
                .toHaveClass('t-button--medium');
            expect(buttons[1])
                .toHaveClass('t-button--medium');
        });

        it('When xsmall is applied, button size will be xsmall', () => {
            render(<TButton xsmall>button</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--xsmall');
        });

        it('When small is applied, button size will be small', () => {
            render(<TButton small>button</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--small');
        });

        it('When medium is applied, button size will be medium', () => {
            render(<TButton medium>button</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--medium');
        });

        it('When large is applied, button size will be large', () => {
            render(<TButton large>button</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--large');
        });

        it('When both size and shortcut prop are applied, size prop will be applied.', () => {
            render(<TButton size={'large'} small>button</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--large');
        });


        it('When the width prop is used, button width will be it', () => {
            const widthValue = '50%';
            render(<TButton icon={'link'} width={widthValue}>icon test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveStyle({width: widthValue, minWidth: widthValue});
        });


    });


    describe('content', () => {
        it('Children prop is rendered as button content', () => {
            render(<TButton>button test</TButton>);

            const button = screen.getByRole('button');
            const buttonContent = within(button)
                .getByText('button test');

            expect(buttonContent)
                .toHaveClass('t-button__content');
        });

        it('When the icon prop is used, the TIcon is positioned after the content', () => {
            render(<TButton icon={'link'}>icon test</TButton>);

            const button = screen.getByRole('button');
            const iconElement = within(button)
                .getByText('link');

            expect(iconElement)
                .toHaveClass('t-button__content__icon');
        });

    });


    describe('onClick & disabled', () => {

        it('When button is clicked, onClick event handler will be executed', async () => {

            // Arrange
            const TButtonWithClickHandler = () => {
                const [isClicked, setIsClicked] = useState<boolean>(false);
                return <TButton onClick={() => setIsClicked(true)}>{isClicked.toString()}</TButton>;
            };

            render(<TButtonWithClickHandler/>);
            const button = screen.getByRole('button');

            // Assert
            let buttonContent = within(button)
                .queryByText('false');
            expect(buttonContent)
                .toHaveTextContent('false');

            // Act
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => { await userEvent.click(button); });


            // Assert
            buttonContent = within(button)
                .queryByText('true');
            expect(buttonContent)
                .toHaveTextContent('true');
        });

        it('When enter key is typed, onClick event handler will be executed', async () => {

            // Arrange
            const TButtonWithEnterHandler = () => {
                const [isClicked, setIsClicked] = useState<boolean>(false);
                return <TButton onClick={() => setIsClicked(true)}>{isClicked.toString()}</TButton>;
            };

            render(<TButtonWithEnterHandler/>);
            const button = screen.getByRole('button');

            // Assert
            let buttonContent = within(button)
                .queryByText('false');
            expect(buttonContent)
                .toHaveTextContent('false');

            // Act
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => { await userEvent.type(button, '{enter}'); });

            // Assert
            buttonContent = within(button)
                .queryByText('true');
            expect(buttonContent)
                .toHaveTextContent('true');
        });

        it('When disabled prop is applied, root has t-button--disabled class', () => {
            render(<TButton disabled>button test</TButton>);

            const button = screen.getByRole('button');
            expect(button)
                .toHaveClass('t-button--disabled');
        });


        it('When disabled prop is applied, clicking the button does not raise an onClick event', async () => {

            // Arrange
            const DisabledTButton = () => {
                const [isClicked, setIsClicked] = useState<boolean>(false);
                return <TButton disabled onClick={() => setIsClicked(true)}>{isClicked.toString()}</TButton>;
            };

            render(<DisabledTButton/>);
            const button = screen.getByRole('button');

            // Act
            await userEvent.click(button);

            // Assert
            let buttonContent = within(button)
                .queryByText('false');
            expect(buttonContent)
                .toHaveTextContent('false');

            buttonContent = within(button)
                .queryByText('true');
            expect(buttonContent)
                .not
                .toBeInTheDocument();
        });
    });


    describe('loading', () => {
        it('When loading prop is applied, loading slices will be rendered instead of content', async () => {

            render(<TButton loading>button test</TButton>);

            const button = screen.getByRole('button');

            expect(button)
                .toHaveClass('t-button--loading');

            const buttonContent = within(button)
                .queryByText('button test');

            expect(buttonContent)
                .not
                .toBeInTheDocument();

            const buttonContentLoading = within(button)
                .queryAllByText('')
                .filter((n) => n.className === 't-button__content--loading__slice');

            expect(buttonContentLoading.length)
                .toEqual(3);

        });

    });

});

