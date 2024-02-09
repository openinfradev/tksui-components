import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {TDatePicker} from '~/input/date-picker';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

const datePickerTestId = 't-date-picker';
const invalidDates = ['2029199', '20999999', '20100000', '20100099', '21230010', '00000000', '01232323'];
const invalidMonths = ['219900', '000000', '999999', '01021201', '123413', '202577'];
const invalidYears = ['0000', '999', '123', '1', '66', '00004'];

describe('TDatePicker', () => {

    const mockFn = jest.fn();

    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${date.getFullYear()}${month < 10 ? `0${month}` : month}${day < 10 ? `0${day}` : day}`;


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
            render(<TDatePicker view={'date'} value={today} style={testStyle}/>);
            const root = screen.getByTestId(datePickerTestId);

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('Value prop applies to date type root', () => {

            // Arrange
            const testDateValue = '20240207';
            render(<TDatePicker view={'date'} value={testDateValue}/>);
            const datePickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(datePickerRoot).toHaveValue(testDateValue);
        });

        it('value prop applies to month type root', () => {

            // Arrange
            const testDateValue = '20240207';
            render(<TDatePicker view={'date'} value={testDateValue}/>);
            const datePickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(datePickerRoot).toHaveValue(testDateValue);
        });

        it('value prop applies to year type root', () => {

            // Arrange
            const testMonthValue = '202412';
            render(<TDatePicker view={'month'} value={testMonthValue}/>);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(testMonthValue);
        });

        it('value prop applies to root', () => {

            // Arrange
            const testYearValue = '2029';
            render(<TDatePicker view={'year'} value={testYearValue}/>);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(testYearValue);
        });

        it('Dropdown displays on the screen correctly to date view type root', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'date'} value={'20241212'}/>);
            const calendarIcon = screen.getByRole('img');

            await act(async () => { await user.click(calendarIcon); });

            const daySelectorRoot = screen.getByTestId('t-day-selector');

            // Assert
            expect(daySelectorRoot).toBeInTheDocument();
        });

        it('Dropdown displays on the screen correctly to month view type root', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'month'} value={'202412'}/>);
            const calendarIcon = screen.getByRole('img');

            await act(async () => { await user.click(calendarIcon); });

            const monthSelectorRoot = screen.getByTestId('t-month-selector');

            // Assert
            expect(monthSelectorRoot).toBeInTheDocument();
        });

        it('Dropdown displays on the screen correctly to month view type root', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'year'} value={'2024'}/>);
            const calendarIcon = screen.getByRole('img');

            await act(async () => { await user.click(calendarIcon); });

            const yearSelectorRoot = screen.getByTestId('t-year-selector');

            // Assert
            expect(yearSelectorRoot).toBeInTheDocument();
        });

        it('When user opens a calendar, today\'s date is displayed normally to DaySelector', async () => {

            // Arrange
            const user = userEvent.setup();
            const todayDate = new Date().getDate();
            render(<TDatePicker view={'date'} />);
            const calendarIcon = screen.getByRole('img');

            // Act
            await act(async () => { await user.click(calendarIcon); });

            // Arrange
            const todaySpan = screen.getByText(todayDate);

            // Assert
            expect(todaySpan).toHaveClass('t-day-selector__content__day-container__item__day--today');
        });

        it('When user opens a calendar, today\'s month is displayed normally to DaySelector', async () => {

            // Arrange
            const user = userEvent.setup();
            const todayDate = new Date().getDate();
            render(<TDatePicker view={'date'} />);
            const calendarIcon = screen.getByRole('img');

            // Act
            await act(async () => { await user.click(calendarIcon); });

            // Arrange
            const todaySpan = screen.getByText(todayDate);

            // Assert
            expect(todaySpan).toHaveClass('t-day-selector__content__day-container__item__day--today');
        });

        it('The selected, today, and disabled designs are normally displayed in the DaySelector.', async () => {

            // Arrange
            const user = userEvent.setup();

            const openFromDay = '07';
            const openToDay = '27';

            const openFrom = `${date.getFullYear()}${month < 10 ? `0${month}` : month}${openFromDay}`;
            const openTo = `${date.getFullYear()}${month < 10 ? `0${month}` : month}${openToDay}`;

            render(<TDatePicker value={today} view={'date'} openFrom={openFrom} openTo={openTo} />);
            const calendarIcon = screen.getByRole('img');

            // Act
            await act(async () => { await user.click(calendarIcon); });

            // Arrange
            const todaySpan = screen.getByText(day);
            const disabledFromSpan = screen.getByText(Number(openFromDay) - 1);
            const disabledToSpan = screen.getByText(Number(openToDay) + 1);

            // Assert
            expect(todaySpan).toHaveClass('t-day-selector__content__day-container__item__day--today');
            expect(todaySpan).toHaveClass('t-day-selector__content__day-container__item__day--selected');
            expect(disabledFromSpan).toHaveClass('t-day-selector__content__day-container__item__day--disabled');
            expect(disabledToSpan).toHaveClass('t-day-selector__content__day-container__item__day--disabled');
        });

    });

    describe('Props', () => {

        it('Displays correctly when incorrect value is provided to date type root', () => {

            // Arrange
            const validFullDate = '20291212';
            const pollutedDate = `${validFullDate} !@# ${9999}`;
            render(<TDatePicker view={'date'} value={pollutedDate}/>);
            const datePickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(datePickerRoot).toHaveValue(validFullDate);
        });


        it('Displays correctly when incorrect value is provided to month type root', () => {

            // Arrange
            const validMonthDate = '202912';
            const pollutedDate = `${validMonthDate} !@# ${9999}`;
            render(<TDatePicker view={'month'} value={pollutedDate}/>);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(validMonthDate);
        });

        it('Displays correctly when incorrect value is provided to year type root', () => {

            // Arrange
            const validYearDate = '2029';
            const pollutedDate = `${validYearDate} !@# ${9999}`;
            render(<TDatePicker view={'year'} value={pollutedDate}/>);
            const yearPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(yearPickerRoot).toHaveValue(validYearDate);
        });

        it.each(invalidDates)('Displays correctly when incorrect value is provided to date type root. data: #%s', (invalidDate) => {

            // Arrange
            render(<TDatePicker view={'date'} value={invalidDate}/>);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue('');
        });

        it.each(invalidMonths)('Displays correctly when incorrect value is provided to month type root: #%s', (invalidDate) => {

            // Arrange
            render(<TDatePicker view={'month'} value={invalidDate}/>);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue('');
        });

        it.each(invalidYears)('Displays correctly when incorrect value is provided to year type root. data: #%s', (invalidDate) => {

            // Arrange
            render(<TDatePicker view={'year'} value={invalidDate}/>);
            const root = screen.getByTestId('text-field-input');

            // Assert
            expect(root).toHaveValue('');
        });
    });


    describe('Event', () => {

        it('When user opens the date calendar and clicks Day 1, the date changes normally.', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'date'} />);
            const calendarIcon = screen.getByRole('img');

            // Act
            await act(async () => { await user.click(calendarIcon); });

            // Arrange
            const oneDaySpan = screen.getByText('1');

            // Assert
            expect(oneDaySpan).toBeInTheDocument();

            // Act
            await act(async () => { await user.click(oneDaySpan); });

            // Arrange
            const datePickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(datePickerRoot).not.toHaveValue('');
        });

        it(
            'When user opens the date calendar and clicks next Month or prev Month or Today Button, the date changes normally.',
            async () => {

                // Arrange
                const user = userEvent.setup();
                const monthText = month === 12 ? `${month - 1}월` : `${month + 1}월`;
                render(<TDatePicker value={today} />);
                const calendarIcon = screen.getByRole('img');

                // Act
                await act(async () => { await user.click(calendarIcon); });

                // Arrange
                const controlRoot = screen.getByTestId('t-day-selector-control') as HTMLDivElement;

                /* eslint-disable testing-library/no-node-access */
                const prevMonthButton = controlRoot.children[0];
                const todayButton = controlRoot.children[1];
                const nextMonthButton = controlRoot.children[2];

                // Act
                if (month === 12) {
                    await act(async () => { await user.click(prevMonthButton); });
                } else {
                    await act(async () => { await user.click(nextMonthButton); });
                }

                // Arrange
                const displayMonthRoot = screen.getByText(monthText);

                // Assert
                expect(displayMonthRoot).toBeInTheDocument();

                // Act
                if (month === 12) {
                    await act(async () => { await user.click(nextMonthButton); });
                } else {
                    await act(async () => { await user.click(prevMonthButton); });
                }

                // Arrange
                const expectMonthText = `${month}월`;
                const displayMonth2Root = screen.getByText(expectMonthText);

                // Assert
                expect(displayMonth2Root).toBeInTheDocument();

                // Act
                await act(async () => { await user.click(todayButton); });

                // Assert
                const todayMonthExpectRoot = screen.getByText(`${month}월`);

                expect(todayMonthExpectRoot).toBeInTheDocument();
            },
        );

        // TODO: YearSelector, MonthSelector Test

    });

});
