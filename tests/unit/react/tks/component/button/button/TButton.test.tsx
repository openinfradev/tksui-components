import {act, render, screen, within} from '@testing-library/react';
import {useState} from 'react';

import userEvent from '@testing-library/user-event';
import TButton from '~/button/button/TButton';
import {buttonVariant, buttonSize} from '~/button/button/TButton.interface';

const variantList = Object.values(buttonVariant);
const sizeList = Object.values(buttonSize);

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TButton', () => {

    describe('style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TButton className={'test-class'}>button test</TButton>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveClass('test-class');
        });


        it('Style prop applies to the root', () => {

            // Arrange
            render(<TButton style={{color: 'red'}}>button test</TButton>);
            const button = screen.getByRole('button');

            // Assert
            expect(button).toHaveStyle({color: 'red'});
        });

        it.each(variantList)('Variant prop applies to the root', (variant) => {

            // Arrange
            render(<TButton variant={variant}>TButton</TButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass(`t-button--${variant}`);
        });

        it.each(variantList)('All variant in the boolean type are applies to the root', (variant) => {

            // Arrange
            const variantProp = {};
            variantProp[variant] = true;
            render(<TButton {...variantProp}>TButton</TButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass(`t-button--${variant}`);
        });

        it.each(sizeList)('Size prop applies to the root', (size) => {

            // Arrange
            render(<TButton size={size}>TButton</TButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass(`t-button--${size}`);
        });

        it.each(sizeList)('All size in the boolean type are applies to the root', (size) => {

            // Arrange
            const sizeProp = {};
            sizeProp[size] = true;
            render(<TButton {...sizeProp}>TButton</TButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass(`t-button--${size}`);
        });
    });


    describe('size', () => {

        it('When valid size is entered, it will be applied in the classname', () => {

            // Arrange
            render(<>
                <TButton size={'xsmall'}>xsmall button</TButton>
                <TButton size={'small'}>small button</TButton>
                <TButton size={'medium'}>medium button</TButton>
                <TButton size={'large'}>large button</TButton>
            </>);
            const buttons = screen.getAllByRole('button');

            // Assert
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

            // Arrange
            render(<>
                <TButton size={'invalid'}>button</TButton>
                <TButton>button</TButton>
            </>);
            const buttons = screen.getAllByRole('button');

            // Assert
            expect(buttons[0])
                .toHaveClass('t-button--medium');
            expect(buttons[1])
                .toHaveClass('t-button--medium');
        });

        it('When xsmall is applied, button size will be xsmall', () => {

            // Arrange
            render(<TButton xsmall>button</TButton>);
            const button = screen.getByRole('button');

            // Assert
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

            // Arrange
            render(<TButton medium>button</TButton>);
            const button = screen.getByRole('button');

            // Assert
            expect(button)
                .toHaveClass('t-button--medium');
        });

        it('When large is applied, button size will be large', () => {

            // Arrange
            render(<TButton large>button</TButton>);
            const button = screen.getByRole('button');

            // Assert
            expect(button)
                .toHaveClass('t-button--large');
        });

        it('When both size and shortcut prop are applied, size prop will be applied.', () => {

            // Arrange
            render(<TButton size={'large'} small>button</TButton>);
            const button = screen.getByRole('button');

            // Assert
            expect(button)
                .toHaveClass('t-button--large');
        });


        it('When the width prop is used, button width will be it', () => {

            // Arrange
            const widthValue = '50%';
            render(<TButton icon={'link'} width={widthValue}>icon test</TButton>);
            const button = screen.getByRole('button');

            // Assert
            expect(button)
                .toHaveStyle({width: widthValue, minWidth: widthValue});
        });


    });


    describe('content', () => {
        it('Children prop is rendered as button content', () => {

            // Arrange
            render(<TButton>button test</TButton>);
            const button = screen.getByRole('button');
            const buttonContent = within(button)
                .getByText('button test');

            // Assert
            expect(buttonContent)
                .toHaveClass('t-button__content');
        });

        it('When the icon prop is used, the TIcon is positioned after the content', () => {

            // Arrange
            render(<TButton icon={'link'}>icon test</TButton>);
            const button = screen.getByRole('button');
            const iconElement = within(button)
                .getByText('link');

            // Assert
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

            // Arrange
            render(<TButton disabled>button test</TButton>);
            const button = screen.getByRole('button');

            // Assert
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

            // Arrange
            let buttonContent = within(button)
                .queryByText('false');

            // Assert
            expect(buttonContent)
                .toHaveTextContent('false');

            // Arrange
            buttonContent = within(button)
                .queryByText('true');

            // Assert
            expect(buttonContent)
                .not
                .toBeInTheDocument();
        });
    });


    describe('loading', () => {
        it('When loading prop is applied, loading slices will be rendered instead of content', async () => {

            // Arrange
            render(<TButton loading>button test</TButton>);
            const button = screen.getByRole('button');

            // Assert
            expect(button)
                .toHaveClass('t-button--loading');

            // Arrange
            const buttonContent = within(button)
                .queryByText('button test');

            // Assert
            expect(buttonContent)
                .not
                .toBeInTheDocument();

            // Arrange
            const buttonContentLoading = within(button)
                .queryAllByText('')
                .filter((n) => n.className === 't-button__content--loading__slice');

            // Assert
            expect(buttonContentLoading.length)
                .toEqual(3);

        });

    });

});

