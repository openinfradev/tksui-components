import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TTextField from '~/input/text-field/TTextField';
import TDropdown from '~/input/dropdown/TDropdown';


describe('TDropdown', () => {

    const mockOnChange = jest.fn();
    const baseProps = {value: 'hello', onChange: mockOnChange, items: []};

    beforeEach(() => { mockOnChange.mockClear(); });


    describe('style', () => {
        it('renders without errors', () => {
            render(<TDropdown {...baseProps}/>);
            expect(screen.getByTestId('dropdown-root')).toBeInTheDocument();
        });

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TDropdown {...baseProps} className={'class-name-prop'}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root)
                .toHaveClass('class-name-prop');
        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TDropdown {...baseProps} style={{width: '300px'}}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveStyle({width: '300px'});
        });

        it('Width prop applies to root', () => {

            // Arrange
            render(<TDropdown {...baseProps} width={'300px'}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root)
                .toHaveStyle({width: '300px'});
        });

        it('Id prop applies to root', () => {

            // Arrange
            const idProp = 'my-id';
            render(<TDropdown {...baseProps} id={idProp}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root).toHaveAttribute('id', idProp);
        });

        it('When type prop is set to underline, root has t-dropdown--underline class', () => {

            // Arrange
            render(<TDropdown {...baseProps} type={'underline'}/>);

            // Assert
            const root = screen.getByTestId('dropdown-root');

            expect(root)
                .toHaveClass('t-dropdown--underline');
        });
    })

});
