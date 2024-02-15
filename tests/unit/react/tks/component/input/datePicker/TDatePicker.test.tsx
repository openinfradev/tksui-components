import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Simulate} from 'react-dom/test-utils';
import {TDatePicker} from '~/input/date-picker';
import {useInputState} from '@/common/hook';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

const datePickerTestId = 't-date-picker';
const invalidDates = ['2029199', '20999999', '20100000', '20100099', '21230010', '00000000', '01232323'];
const invalidMonths = ['219900', '000000', '999999', '01021201', '123413', '202577'];
const invalidYears = ['0000', '999', '123', '1', '66', '00004', '0101', '0001'];

const dateFormatter = (date: string): string => {
    const dateLength = date.length;
    const yearStr = date.substring(0, 4);
    const monthStr = date.substring(4, 6);
    const dayStr = date.substring(6, 8);

    if (dateLength < 5) { return yearStr; }
    if (dateLength < 7) { return `${yearStr}-${monthStr}`; }
    return `${yearStr}-${monthStr}-${dayStr}`;
};

describe('TDatePicker', () => {

    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${date.getFullYear()}${month < 10 ? `0${month}` : month}${day < 10 ? `0${day}` : day}`;

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
            expect(datePickerRoot).toHaveValue(dateFormatter(testDateValue));
        });

        it('value prop applies to month type root', () => {

            // Arrange
            const testDateValue = '20240207';
            render(<TDatePicker view={'date'} value={testDateValue}/>);
            const datePickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(datePickerRoot).toHaveValue(dateFormatter(testDateValue));
        });

        it('value prop applies to year type root', () => {

            // Arrange
            const testMonthValue = '202412';
            render(<TDatePicker view={'month'} value={testMonthValue}/>);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(dateFormatter(testMonthValue));
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
            render(<TDatePicker view={'date'}/>);
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
            render(<TDatePicker view={'date'}/>);
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

            render(<TDatePicker value={today} view={'date'} openFrom={openFrom} openTo={openTo}/>);
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
            expect(datePickerRoot).toHaveValue(dateFormatter(validFullDate));
        });


        it('Displays correctly when incorrect value is provided to month type root', () => {

            // Arrange
            const validMonthDate = '202912';
            const pollutedDate = `${validMonthDate} !@# ${9999}`;
            render(<TDatePicker view={'month'} value={pollutedDate}/>);
            const monthPickerRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(monthPickerRoot).toHaveValue(dateFormatter(validMonthDate));
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

        it('Selector components are not displayed when disabled prop is applied', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker disabled view={'date'} value={'20240212'}/>);
            const dropHolderRoot = screen.getByRole('img');

            // Act
            await act(async () => {
                await user.click(dropHolderRoot);
            });

            try {
                // Arrange
                screen.getByTestId('t-day-selector');
            } catch (err) {
                // Assert
                expect(err).not.toBeUndefined();
                return;
            }
            throw Error('Disabled prop not working');
        });

        it('When user opens the date calendar and selects a disabled day, the input value remains unchanged.', async () => {

            // Arrange
            const testValue = '20240210';
            const openFrom = '20240204';
            const openTo = '20240220';
            const user = userEvent.setup();
            const TestDatePicker = () => {
                const dateInput = useInputState(testValue);
                return (
                    <TDatePicker view={'date'} value={dateInput.value} onChange={dateInput.onChange}
                                 openFrom={openFrom} openTo={openTo}/>
                );
            };
            render(<TestDatePicker/>);

            const iconRoot = screen.getByRole('img');

            // Act
            await act(async () => { await user.click(iconRoot); });

            // Arrange
            const testDay1 = Number(openFrom.substring(6, 8)) - 1;
            const testDay2 = Number(openTo.substring(6, 8)) + 1;
            const testDay1Root = screen.getByText(testDay1);
            const testDay2Root = screen.getByText(testDay2);

            // Assert
            expect(testDay1Root).toHaveClass('t-day-selector__content__day-container__item__day--disabled');
            expect(testDay2Root).toHaveClass('t-day-selector__content__day-container__item__day--disabled');

            // Act
            await act(async () => {
                await user.click(testDay1Root);
            });

            // Arrange
            const inputRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(inputRoot).toHaveValue(dateFormatter(testValue));
        });

        it('Displays correctly when separator is provided to date type root', () => {

            // Arrange
            const testDate = '20291212';
            const testSeparator = '+';
            render(<TDatePicker view={'date'} value={testDate} separator={testSeparator} />);
            const dateInputRoot = screen.getByTestId('text-field-input') as HTMLInputElement;

            const splitDate = dateInputRoot.value.split(testSeparator);
            // Assert
            expect(splitDate.length).toBe(3);
        });

        it('Displays correctly when separator is provided to month type root', () => {

            // Arrange
            const testDate = '203004';
            const testSeparator = '/';
            render(<TDatePicker view={'month'} value={testDate} separator={testSeparator} />);
            const dateInputRoot = screen.getByTestId('text-field-input') as HTMLInputElement;

            const splitDate = dateInputRoot.value.split(testSeparator);
            // Assert
            expect(splitDate.length).toBe(2);
        });

    });


    describe('Event', () => {

        it('When user opens the date calendar and clicks Day 1, the date changes normally.', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TDatePicker view={'date'}/>);
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
                const monthText = month === 12 ? (month - 1) : (month + 1);
                render(<TDatePicker value={today}/>);
                const dropDownIcon = screen.getByRole('img');

                // Act
                await act(async () => { await user.click(dropDownIcon); });

                // Arrange
                const prevMonthButtonRoot = screen.queryAllByRole('button')[0];
                const todayButtonRoot = screen.queryAllByRole('button')[1];
                const nextMonthButtonRoot = screen.queryAllByRole('button')[2];

                // Act
                if (month === 12) {
                    await act(async () => { await user.click(prevMonthButtonRoot); });
                } else {
                    await act(async () => { await user.click(nextMonthButtonRoot); });
                }

                // Arrange
                screen.getByText(`${today.substring(0, 4)}년 ${monthText}월`);

                // Act
                if (month === 12) {
                    await act(async () => { await user.click(nextMonthButtonRoot); });
                } else {
                    await act(async () => { await user.click(prevMonthButtonRoot); });
                }

                // Arrange
                const displayMonth2Root = screen.getByText(`${today.substring(0, 4)}년 ${month}월`);

                // Assert
                expect(displayMonth2Root).toBeInTheDocument();

                // Act
                await act(async () => { await user.click(todayButtonRoot); });

                // Assert
                const todayMonthExpectRoot = screen.getByText(`${today.substring(0, 4)}년 ${month}월`);

                expect(todayMonthExpectRoot).toBeInTheDocument();
            },
        );

        it(
            'Verify that when the user opens the date calendar and clicks the next or previous month, '
            + 'the date changes correctly, and the selected year and month are displayed correctly in the text field.',
            async () => {

                // Arrange
                const user = userEvent.setup();
                const nextMonth = month === 12 ? (month - 1) : (month + 1);

                const TestDatePicker = () => {
                    const dateInput = useInputState(today);
                    return (
                        <TDatePicker view={'date'} value={today} onChange={dateInput.onChange}/>
                    );
                };
                render(<TestDatePicker/>);

                const calendarIcon = screen.getByRole('img');

                // Act
                await act(async () => { await user.click(calendarIcon); });

                // Arrange
                const prevMonthButton = screen.queryAllByRole('button')[0];
                const todayButton = screen.queryAllByRole('button')[1];
                const nextMonthButton = screen.queryAllByRole('button')[2];

                // Act
                if (month === 12) {
                    await act(async () => { await user.click(prevMonthButton); });
                } else {
                    await act(async () => { await user.click(nextMonthButton); });
                }

                // Arrange
                const displayMonthRoot = screen.getByText(`${today.substring(0, 4)}년 ${nextMonth}월`);

                // Assert
                expect(displayMonthRoot).toBeInTheDocument();

                // Act
                if (month === 12) {
                    await act(async () => { await user.click(nextMonthButton); });
                } else {
                    await act(async () => { await user.click(prevMonthButton); });
                }

                // Arrange
                screen.getByText(`${today.substring(0, 4)}년 ${month}월`);

                // Act
                await act(async () => { await user.click(todayButton); });

                // Arrange
                screen.getByText(`${today.substring(0, 4)}년 ${Number(today.substring(4, 6))}월`);

                const toggleButton = screen.queryAllByRole('img')[0];

                // Act
                await act(async () => {
                    await user.click(toggleButton);
                });

                // Arrange
                const targetYear = Number(today.substring(0, 4)) - 1;

                const targetYearRoot = screen.getByText(targetYear);

                // Act
                await act(async () => { await user.click(targetYearRoot); });

                // Arrange
                const monthSelectorItem = screen.getByText(`${targetYear}년 ${month}월`);
                const targetMonth = '4';

                // Act
                await act(async () => {
                    await user.click(monthSelectorItem);
                });

                // Arrange
                const monthItem = screen.getByText(targetMonth);

                // Act
                await act(async () => {
                    await user.click(monthItem);
                });

                // Arrange
                screen.getByText(`${targetYear}년 ${targetMonth}월`);
                const targetDay = '19';
                const targetDayItem = screen.getByText(targetDay);

                // Act
                await act(async () => {
                    await user.click(targetDayItem);
                });

                // Arrange
                const inputRoot = screen.getByTestId('text-field-input');
                const padMonth = String(targetMonth).padStart(2, '0');
                const expectedValue = `${targetYear}${padMonth}${targetDay}`;

                // Assert
                expect(inputRoot).toHaveValue(dateFormatter(expectedValue));
            },
        );

        it(
            'Verify that when the user opens the monthly calendar and clicks the next or previous month, '
            + 'the date changes correctly, and the selected year and month are displayed correctly in the text field.',
            async () => {

                // Arrange
                const user = userEvent.setup();
                const testDate = '202401';
                const selectedMonth = Number(testDate.substring(4, 6));
                const currentYearText = `${today.substring(0, 4)}년`;
                const prevYearText = `${Number(today.substring(0, 4)) - 1}년`;
                const nextYearText = `${Number(today.substring(0, 4)) + 1}년`;
                const targetDate = '202607';
                const TestDatePicker = () => {
                    const dateInput = useInputState(testDate);
                    return (
                        <TDatePicker view={'month'} value={dateInput.value} onChange={dateInput.onChange}/>
                    );
                };
                render(<TestDatePicker/>);
                const calendarIcon = screen.getByRole('img');

                // Act
                await act(async () => { await user.click(calendarIcon); });

                // Arrange
                const selectedMonthRoot = screen.getByText(selectedMonth);
                const todayMonthRoot = screen.getByText(month);

                // Assert
                expect(selectedMonthRoot).toHaveClass('t-month-selector__content__month-container__item__month--selected');
                expect(todayMonthRoot).toHaveClass('t-month-selector__content__month-container__item__month--today');

                // Arrange
                screen.getByText(currentYearText);
                const prevButton = screen.queryAllByRole('button')[0];
                const nextButton = screen.queryAllByRole('button')[1];

                // Act
                await act(async () => { await user.click(prevButton); });

                // Arrange
                const yearTextRoot = screen.getByText(prevYearText);

                // Assert
                expect(yearTextRoot).toBeInTheDocument();

                // Act
                await act(async () => {
                    await user.click(nextButton);
                    await user.click(nextButton);
                });

                // Arrange
                const toggleButton = screen.queryAllByRole('img')[0];

                // Act
                await act(async () => { await user.click(toggleButton); });

                // Arrange
                const selectedYearRoot = screen.getByText(today.substring(0, 4));

                // Assert
                expect(selectedYearRoot).toHaveClass('t-year-selector__content__year-container__item__year--selected');

                // Arrange
                const currentYearRoot = screen.getByText(targetDate.substring(0, 4));

                // Act
                await act(async () => { await user.click(currentYearRoot); });

                // Arrange
                screen.getByTestId('t-month-selector');
                const targetMonthRoot = screen.getByText(Number(targetDate.substring(4, 6)));

                // Act
                await act(async () => { await user.click(targetMonthRoot); });

                // Arrange
                const dateInputRoot = screen.getByTestId('text-field-input');

                // Assert
                expect(dateInputRoot).toHaveValue(dateFormatter(targetDate));
            },
        );

        it('When user opens the year calendar and selects a disabled year, the input value remains unchanged.', async () => {

            // Arrange
            const testYear = '2026';
            const openFrom = '2022';
            const openTo = '2027';
            const user = userEvent.setup();
            const TestDatePicker = () => {
                const dateInput = useInputState(testYear);
                return (
                    <TDatePicker view={'year'} value={dateInput.value} onChange={dateInput.onChange}
                                 openFrom={openFrom} openTo={openTo}/>
                );
            };
            render(<TestDatePicker/>);

            const dropDownIcon = screen.getByRole('img');

            // Act
            await act(async () => { await user.click(dropDownIcon); });

            // Arrange
            const yearFromTargetRoot = screen.getByText(Number(openFrom) - 1);
            const yearToTargetRoot = screen.getByText(Number(openTo) + 1);

            // Assert
            expect(yearFromTargetRoot).toHaveClass('t-year-selector__content__year-container__item__year--disabled');
            expect(yearToTargetRoot).toHaveClass('t-year-selector__content__year-container__item__year--disabled');

            // Act
            await act(async () => { await user.click(yearFromTargetRoot); });

            // Arrange
            const inoutRoot = screen.getByTestId('text-field-input');

            // Assert
            expect(inoutRoot).toHaveValue(testYear);
        });

        it('If the user enters the blur state after entering the date, the value changes normally.', async () => {

            // Arrange
            const user = userEvent.setup();
            const openFrom = '20240205';
            const openTo = '20240224';
            const validDate = '20240211';
            const firstInvalidDate = '20240228';
            const secondInvalidDate = '20240202';

            const TestDatePicker = () => {
                const dateInput = useInputState('');
                return (
                    <TDatePicker view={'date'} value={dateInput.value} onChange={dateInput.onChange}
                                 openFrom={openFrom} openTo={openTo}/>
                );
            };
            render(<TestDatePicker/>);
            const textInput = screen.getByTestId('text-field-input');

            // Act
            await act(async () => {
                await user.click(textInput);
                await user.keyboard(validDate);
                await user.tab();
            });

            // Arrange
            const typedTextInput = screen.getByTestId('text-field-input');

            // Assert
            expect(typedTextInput).toHaveValue(dateFormatter(validDate));

            // Act
            await act(async () => {
                await user.clear(typedTextInput);
                await user.keyboard(firstInvalidDate);
                await user.tab();
            });

            // Arrange
            const firstInvalidTypedInput = screen.getByTestId('text-field-input');

            // Assert
            expect(firstInvalidTypedInput).toHaveValue(dateFormatter(validDate));

            // Act
            await act(async () => {
                await user.clear(firstInvalidTypedInput);
                await user.keyboard(secondInvalidDate);
                await user.tab();
            });

            // Assert
            expect(firstInvalidTypedInput).toHaveValue(dateFormatter(validDate));
        });

    });


});
