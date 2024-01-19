import {render, screen} from '@testing-library/react';
import TInputValidationHint from '~/guide/input-validation-hint/TInputValidationHint';

describe('TInputValidationHint', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';

            render(<TInputValidationHint className={testData} value={'test value'} rules={[]} />);

            const root = screen.getByTestId('t-input-validation-hint-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};

            render(<TInputValidationHint style={testData} value={'test value'} rules={[]} />);

            const root = screen.getByTestId('t-input-validation-hint-root');

            // Assert
            expect(root).toHaveStyle(testData);

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-text';

            render(<TInputValidationHint id={testData} value={'test value'} rules={[]} />);

            const root = screen.getByTestId('t-input-validation-hint-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);

        });

        it('When value invalid, it should be applied invalid style to hint area', () => {

            // Arrange
            const testData = 'under 8';
            const description = '8자에서 16자 사이로 입력해 주세요.';

            render(<TInputValidationHint value={testData}
                                         rules={[{rule: (v) => (v.length >= 8 && v.length <= 16), description: description},]} />);

            const hint = screen.getByText(`${description} (X)`);

            // Assert
            expect(hint).toHaveClass('t-input-validation-hint__rules__item--invalid');

        });

        it('When value valid, it should be applied valid style to hint area', () => {

            // Arrange
            const testData = 'length over 8';
            const description = '8자에서 16자 사이로 입력해 주세요.';

            render(<TInputValidationHint value={testData}
                                         rules={[{rule: (v) => (v.length >= 8 && v.length <= 16), description: description},]} />);

            const hint = screen.getByText(`${description} (O)`);

            // Assert
            expect(hint).toHaveClass('t-input-validation-hint__rules__item--valid');

        });

    });

    describe('Content', () => {

        it('When describe props is applied, it should be displayed on root area', () => {

            // Arrange
            const testData = 'test description';

            render(<TInputValidationHint value={'test value'} rules={[]} description={testData}/>);

            const content = screen.getByTestId('t-input-validation-hint-root');

            // Assert
            expect(content).toHaveTextContent(testData);

        });

        it('When value is an invalid, it should be displayed description with (X) on hint area', () => {

            // Arrange
            const description = '8자에서 16자 사이로 입력해 주세요.';
            const testData = `${description} (X)`;

            render(<TInputValidationHint value={'under 8'}
                                         rules={[{rule: (v) => (v.length >= 8 && v.length <= 16), description: description},]} />);

            const hint = screen.getByText(testData);

            // Assert
            expect(hint).toHaveTextContent(testData);

        });

        it('When value valid, it should be displayed description with (O) on hint area', () => {

            // Arrange
            const description = '8자에서 16자 사이로 입력해 주세요.';
            const testData = `${description} (O)`;

            render(<TInputValidationHint value={'length over 8'}
                                         rules={[{rule: (v) => (v.length >= 8 && v.length <= 16), description: description},]} />);

            const hint = screen.getByText(testData);

            // Assert
            expect(hint).toHaveTextContent(testData);

        });

    });

});