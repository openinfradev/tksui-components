import {act, getAllByRole, render, screen} from '@testing-library/react';
import {CSSProperties} from 'react';
import userEvent from '@testing-library/user-event';
import TButtonGroup from '~/button/button-group/TButtonGroup';
import useInputState from '@/common/hook/UseInputState';
import {
    ButtonGroupVariant,
    ButtonGroupVariantType,
    TButtonGroupItem,
    TButtonGroupValue,
} from '~/button/button-group/TButtonGroup.interface';

const variantList = Object.values(ButtonGroupVariant);

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TButtonGroup', () => {

    const ButtonGroup = (props: {
        className?: string,
        style?: CSSProperties,

        value?: TButtonGroupValue,
        items?: TButtonGroupItem[],
        variant?: ButtonGroupVariantType,

        primary?: boolean,
        main?: boolean,

        onChange?(value: TButtonGroupValue): void,

        multiSelect?: boolean,

        disabled?: boolean,

        initialValue?: string | string[], // additional
    }) => {
        const buttonGroup = useInputState<any>(props.initialValue || '');
        const defaultItems = [{template: 'Bold', value: 'b'}, {template: 'Italic', value: 'i'}];
        return (<TButtonGroup value={buttonGroup.value} onChange={buttonGroup.onChange} items={props.items || defaultItems} {...props} />);
    };


    describe('style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<ButtonGroup className={'test-class'}/>);

            const buttonGroup = screen.getByTestId('button-group-root');

            // Assert
            expect(buttonGroup)
                .toHaveClass('test-class');
        });

        it('When disabled prop is applied, root has t-button-group--disabled class', () => {

            // Arrange
            render(<ButtonGroup disabled/>);

            const buttonGroup = screen.getByTestId('button-group-root');
            const buttons = getAllByRole(buttonGroup, 'button');
            // Assert
            expect(buttonGroup)
                .toHaveClass('t-button-group--disabled');

            buttons.forEach((button) => {
                expect(button)
                    .toHaveClass('t-button--disabled');
            });
        });

        it('Style prop applies to the root', () => {

            // Arrange
            render(<ButtonGroup style={{color: 'red'}}/>);

            const buttonGroup = screen.getByTestId('button-group-root');

            // Assert
            expect(buttonGroup)
                .toHaveStyle({color: 'red'});
        });
    });


    describe('Value', () => {

        it('When clicking on an item, ButtonGroup with multiSelect=false updates its value', async () => {

            // Arrange
            render(<ButtonGroup initialValue={'b'} multiSelect={false}/>);

            const [boldButton, italicButton] = screen.getAllByRole('button');

            // Assert
            expect(boldButton)
                .toHaveClass('t-button-group__button--active');

            expect(italicButton)
                .not.toHaveClass('t-button-group__button--active');

            // Act
            await act(async () => {
                await userEvent.click(italicButton);
            });

            // Assert
            expect(boldButton)
                .not.toHaveClass('t-button-group__button--active');

            expect(italicButton)
                .toHaveClass('t-button-group__button--active');
        });

        it('When clicking on an item, ButtonGroup with multiSelect=true updates its value as an array', async () => {

            // Arrange
            render(<ButtonGroup initialValue={[]} multiSelect={true}/>);

            const [boldButton, italicButton] = screen.getAllByRole('button');

            // Assert
            expect(boldButton).toHaveClass('t-button-group__button');
            expect(italicButton).toHaveClass('t-button-group__button');

            // Act
            await act(async () => {
                await userEvent.click(boldButton);
            });

            // Assert
            expect(boldButton)
                .toHaveClass('t-button-group__button--active');

            // Act
            await act(async () => {
                await userEvent.click(italicButton);
            });

            // Assert
            expect(italicButton)
                .toHaveClass('t-button-group__button--active');

            // Act
            await act(async () => {
                await userEvent.click(boldButton);
            });

            // Assert
            expect(boldButton)
                .toHaveClass('t-button-group__button');
            expect(italicButton)
                .toHaveClass('t-button-group__button--active');
        });

    });

    it.each(variantList)('Variant prop applies to the root. %s', (variant) => {

        // Arrange
        render(<ButtonGroup initialValue={[]} variant={variant} multiSelect={true}/>);
        const root = screen.getByTestId('button-group-root');

        // Assert
        expect(root).toHaveClass(`t-button-group--${variant}`);
    });

    it('primary prop applies to the root.', () => {

        // Arrange
        const testVariant = 'primary';
        render(<ButtonGroup initialValue={[]} variant={testVariant} multiSelect={true}/>);
        const root = screen.getByTestId('button-group-root');

        // Assert
        expect(root).toHaveClass(`t-button-group--${testVariant}`);
    });

    it('main prop applies to the root.', () => {

        // Arrange
        const testVariant = 'main';
        render(<ButtonGroup initialValue={[]} variant={testVariant} multiSelect={true}/>);
        const root = screen.getByTestId('button-group-root');

        // Assert
        expect(root).toHaveClass(`t-button-group--${testVariant}`);
    });

});
