import {act, getAllByRole, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type {CSSProperties} from 'react';
import {useState} from 'react';

import TButtonGroup from '~/button/button-group/TButtonGroup';
import type {
    ButtonGroupVariantType,
    TButtonGroupItem,
    TButtonGroupValue,
} from '~/button/button-group/TButtonGroup.interface';
import {ButtonGroupVariant} from '~/button/button-group/TButtonGroup.interface';

const variantList = Object.values(ButtonGroupVariant);

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
    getLightness: jest.fn(() => 50),
}));

describe('TButtonGroup', () => {
    const ButtonGroup = (props: {
        className?: string;
        style?: CSSProperties;

        value?: TButtonGroupValue;
        items?: TButtonGroupItem[];
        variant?: ButtonGroupVariantType;

        primary?: boolean;
        main?: boolean;

        onChange?(value: TButtonGroupValue): void;

        multiSelect?: boolean;

        disabled?: boolean;

        initialValue?: string | string[]; // additional
    }) => {
        const [buttonGroup, setButtonGroup] = useState<any>(props.initialValue || '');

        const defaultItems = [
            {template: 'Bold', value: 'b'},
            {template: 'Italic', value: 'i'},
        ];
        return (
            <TButtonGroup
                value={buttonGroup}
                onChange={setButtonGroup}
                items={props.items || defaultItems}
                {...props}
            />
        );
    };

    const value = '1d';
    const items = [
        {template: '최근 1주', value: '1W'},
        {template: '1개월', value: '1M'},
        {template: '3개월', value: '3M'},
    ];

    const mockOnChange = jest.fn();

    const baseProps = {value, onChange: mockOnChange, items};

    describe('style', () => {
        it('Classname prop applies to root', () => {
            // Arrange
            render(<ButtonGroup className={'test-class'} />);

            const buttonGroup = screen.getByTestId('button-group-root');

            // Assert
            expect(buttonGroup).toHaveClass('test-class');
        });

        it('When disabled prop is applied, root has t-button-group--disabled class', () => {
            // Arrange
            render(<ButtonGroup disabled />);

            const buttonGroup = screen.getByTestId('button-group-root');
            const buttons = getAllByRole(buttonGroup, 'button');
            // Assert
            expect(buttonGroup).toHaveClass('t-button-group--disabled');

            buttons.forEach((button) => {
                expect(button).toHaveClass('t-button--disabled');
            });
        });

        it('Style prop applies to the root', () => {
            // Arrange
            render(<ButtonGroup style={{color: 'red'}} />);

            const buttonGroup = screen.getByTestId('button-group-root');

            // Assert
            expect(buttonGroup).toHaveStyle({color: 'red'});
        });
    });

    describe('size', () => {
        it('When valid size is entered, it will be applied in the classname', () => {
            // Arrange
            render(
                <>
                    <TButtonGroup {...baseProps} size={'xsmall'} />
                    <TButtonGroup {...baseProps} size={'small'} />
                    <TButtonGroup {...baseProps} size={'medium'} />
                    <TButtonGroup {...baseProps} size={'large'} />
                </>
            );
            const buttonGroups = screen.getAllByTestId('button-group-root');

            // Assert
            expect(buttonGroups[0]).toHaveClass('t-button-group--xsmall');
            expect(buttonGroups[1]).toHaveClass('t-button-group--small');
            expect(buttonGroups[2]).toHaveClass('t-button-group--medium');
            expect(buttonGroups[3]).toHaveClass('t-button-group--large');
        });

        it('When invalid size is entered or not entered, medium size will is applied', () => {
            // Arrange
            render(<TButtonGroup {...baseProps} size={'invalid'} />);
            const root = screen.getByTestId('button-group-root');

            // Assert
            expect(root).toHaveClass('t-button-group--medium');
        });

        it('When xsmall is applied, button group size will be xsmall', () => {
            // Arrange
            render(<TButtonGroup {...baseProps} xsmall />);
            const root = screen.getByTestId('button-group-root');

            // Assert
            expect(root).toHaveClass('t-button-group--xsmall');
        });

        it('When small is applied, button group size will be small', () => {
            // Arrange
            render(<TButtonGroup {...baseProps} small />);
            const root = screen.getByTestId('button-group-root');

            // Assert
            expect(root).toHaveClass('t-button-group--small');
        });

        it('When medium is applied, button group size will be medium', () => {
            // Arrange
            render(<TButtonGroup {...baseProps} medium />);
            const root = screen.getByTestId('button-group-root');

            // Assert
            expect(root).toHaveClass('t-button-group--medium');
        });

        it('When large is applied, button group size will be large', () => {
            // Arrange
            render(<TButtonGroup {...baseProps} large />);
            const root = screen.getByTestId('button-group-root');

            // Assert
            expect(root).toHaveClass('t-button-group--large');
        });
    });

    describe('Value', () => {
        it('When clicking on an item, ButtonGroup with multiSelect=false updates its value', async () => {
            // Arrange
            render(<ButtonGroup initialValue={'b'} multiSelect={false} />);

            const [boldButton, italicButton] = screen.getAllByRole('button');

            // Assert
            expect(boldButton).toHaveClass('t-button-group__button--active');

            expect(italicButton).not.toHaveClass('t-button-group__button--active');

            // Act
            await act(async () => {
                await userEvent.click(italicButton);
            });

            // Assert
            expect(boldButton).not.toHaveClass('t-button-group__button--active');

            expect(italicButton).toHaveClass('t-button-group__button--active');
        });

        it('When clicking on an item, ButtonGroup with multiSelect=true updates its value as an array', async () => {
            // Arrange
            render(<ButtonGroup initialValue={[]} multiSelect={true} />);

            const [boldButton, italicButton] = screen.getAllByRole('button');

            // Assert
            expect(boldButton).toHaveClass('t-button-group__button');
            expect(italicButton).toHaveClass('t-button-group__button');

            // Act
            await act(async () => {
                await userEvent.click(boldButton);
            });

            // Assert
            expect(boldButton).toHaveClass('t-button-group__button--active');

            // Act
            await act(async () => {
                await userEvent.click(italicButton);
            });

            // Assert
            expect(italicButton).toHaveClass('t-button-group__button--active');

            // Act
            await act(async () => {
                await userEvent.click(boldButton);
            });

            // Assert
            expect(boldButton).toHaveClass('t-button-group__button');
            expect(italicButton).toHaveClass('t-button-group__button--active');
        });
    });

    it.each(variantList)('Variant prop applies to the root. %s', (variant) => {
        // Arrange
        render(<ButtonGroup initialValue={[]} variant={variant} multiSelect={true} />);
        const root = screen.getByTestId('button-group-root');

        // Assert
        expect(root).toHaveClass(`t-button-group--${variant}`);
    });

    it('primary prop applies to the root.', () => {
        // Arrange
        const testVariant = 'primary';
        render(<ButtonGroup initialValue={[]} variant={testVariant} multiSelect={true} />);
        const root = screen.getByTestId('button-group-root');

        // Assert
        expect(root).toHaveClass(`t-button-group--${testVariant}`);
    });

    it('main prop applies to the root.', () => {
        // Arrange
        const testVariant = 'main';
        render(<ButtonGroup initialValue={[]} variant={testVariant} multiSelect={true} />);
        const root = screen.getByTestId('button-group-root');

        // Assert
        expect(root).toHaveClass(`t-button-group--${testVariant}`);
    });
});
