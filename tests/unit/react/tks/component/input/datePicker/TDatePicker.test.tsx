import {act, render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {CSSProperties, useRef} from 'react';
import {TDatePicker} from '~/input/date-picker';
import TButton from '../../../../../../../src/components/button/button/TButton';


const datePickerTestId = 't-date-picker';
const invalidDates = ['2029199', '20999999', '20100000', '20100099', '21230010', '00000000', '01232323'];
const invalidMonths = ['219900', '000000', '999999', '01021201', '123413', '202577'];
const invalidYears = ['0000', '999', '123', '1', '66', '00004'];

describe('TDatePicker', () => {

    const mockFn = jest.fn();

    beforeEach(() => { mockFn.mockClear(); });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testClass = 'test-class-name-prop';
            render(<TDatePicker view={'date'} value={'20240101'} className={testClass}/>);
            const root = screen.getByTestId(datePickerTestId);

            // Assert
            expect(root).toHaveClass(testClass);
        });

        it('Style prop applies to root', () => {

            // Arrange
            const testStyle = {background: 'red', fontSize: '20px'};
            render(<TDatePicker view={'date'} value={'20240101'} style={testStyle}/>);
            const root = screen.getByTestId(datePickerTestId);

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('Value prop applies to date type root', () => {

            // Arrange
            const testDateValue = '20240207';
            render(<TDatePicker view={'date'} value={testDateValue} />);
            const datePickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(datePickerRoot).toHaveValue(testDateValue);
        });

        it('value prop applies to month type root', () => {

            // Arrange
            const testDateValue = '20240207';
            render(<TDatePicker view={'date'} value={testDateValue} />);
            const datePickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(datePickerRoot).toHaveValue(testDateValue);
        });

        it('value prop applies to year type root', () => {

            // Arrange;
            const testMonthValue = '202412';
            render(<TDatePicker view={'month'} value={testMonthValue} />);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(testMonthValue);
        });

        it('value prop applies to root', () => {

            // Arrange;
            const testYearValue = '2029';
            render(<TDatePicker view={'year'} value={testYearValue} />);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(testYearValue);
        });

        it('Dropdown displays on the screen correctly to date view type root', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'date'} value={'20241212'} />);
            const calendarIcon = screen.getByRole('img');

            await user.click(calendarIcon);

            const daySelectorRoot = screen.getByTestId('t-date-selector');

            // Assert
            expect(daySelectorRoot).toBeInTheDocument();
        });

        it('Dropdown displays on the screen correctly to month view type root', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'month'} value={'202412'} />);
            const calendarIcon = screen.getByRole('img');

            await user.click(calendarIcon);

            const monthSelectorRoot = screen.getByTestId('t-month-selector');

            // Assert
            expect(monthSelectorRoot).toBeInTheDocument();
        });

        it('Dropdown displays on the screen correctly to month view type root', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'year'} value={'2024'} />);
            const calendarIcon = screen.getByRole('img');

            await user.click(calendarIcon);

            const yearSelectorRoot = screen.getByTestId('t-year-selector');

            // Assert
            expect(yearSelectorRoot).toBeInTheDocument();
        });


    });

    describe('validate', () => {

        it('Displays correctly when incorrect value is provided to date type root', () => {

            // Arrange;
            const validTestDate = '20291212';
            const invalidDate = `${validTestDate} !@# ${9999}`;
            render(<TDatePicker view={'date'} value={invalidDate} />);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue(validTestDate);
        });


        it('Displays correctly when incorrect value is provided to month type root', () => {

            // Arrange;
            const validTestDate = '202912';
            const invalidDate = `${validTestDate} !@# ${9999}`;
            render(<TDatePicker view={'month'} value={invalidDate} />);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(validTestDate);
        });

        it('Displays correctly when incorrect value is provided to year type root', () => {

            // Arrange;
            const validTestDate = '2029';
            const invalidDate = `${validTestDate} !@# ${9999}`;
            render(<TDatePicker view={'year'} value={invalidDate} />);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue(validTestDate);
        });

        it.each(invalidDates)('Displays correctly when incorrect value is provided to date type root. data: #%s', (invalidDate) => {

            // Arrange;
            render(<TDatePicker view={'date'} value={invalidDate} />);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue('');
        });

        it.each(invalidMonths)('Displays correctly when incorrect value is provided to month type root: #%s', (invalidDate) => {

            // Arrange;
            render(<TDatePicker view={'month'} value={invalidDate} />);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue('');
        });

        it.each(invalidYears)('Displays correctly when incorrect value is provided to year type root. data: #%s', (invalidDate) => {

            // Arrange;
            render(<TDatePicker view={'year'} value={invalidDate} />);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue('');
        });


    });
});
