import TValidatorRule from '~/tks/component/common/validator/TValidatorRule';


describe('TValidatorRule', () => {

    describe('requiredArr', () => {

        const defaultMessage = '1개 이상 선택해 주세요';

        it('When input array is not empty, should return true', () => {
            // Arrange
            const checkFunction = TValidatorRule.requiredArr();
            const checkValue = [1, 2, 3];

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input array is empty, should return default message', () => {
            // Arrange
            const checkFunction = TValidatorRule.requiredArr();
            const checkValue: any[] = [];

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input array is empty and error message is given, should return the message', () => {
            // Arrange
            const customMessage = '필수값 입니다.';
            const checkFunction = TValidatorRule.requiredArr(customMessage);
            const checkValue: any[] = [];

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it('When input array is empty and empty string is given as error message, should return empty string', () => {
            // Arrange
            const customMessage = '';
            const checkFunction = TValidatorRule.requiredArr(customMessage);
            const checkValue: any[] = [];

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });
    });


    describe('required', () => {

        const defaultMessage = '값을 입력해 주세요';

        it('When input is not empty, should return true', () => {

            // Arrange
            const checkFunction = TValidatorRule.required();
            const checkValue = 'user input';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });


        it('When input is empty, should return default message', () => {

            // Arrange
            const checkFunction = TValidatorRule.required();
            const checkValue = '';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input is empty and error message is given, should return the message', () => {

            // Arrange
            const customMessage = '필수 값입니다.';
            const checkFunction = TValidatorRule.required(customMessage);
            const checkValue = '';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it('When input is empty and empty string is given as error message, should return empty string', () => {

            // Arrange
            const customMessage = '';
            const checkFunction = TValidatorRule.required(customMessage);
            const checkValue = '';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });
    });


    describe('lengthMin', () => {

        it('When input length is equal to the minimum length, should return true', () => {

            // Arrange
            const minLength = 5;
            const checkFunction = TValidatorRule.lengthMin(minLength);
            const checkValue = '12345';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input length is greater than the minimum length, should return true', () => {

            // Arrange
            const minLength = 5;
            const checkFunction = TValidatorRule.lengthMin(minLength);
            const checkValue = '123456';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input length is less than the minimum length, should return default message', () => {
            // Arrange
            const minLength = 5;
            const defaultMessage = `${minLength}자 이상 입력해 주세요`;
            const checkFunction = TValidatorRule.lengthMin(minLength);
            const checkValue = '1234';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input length is less than the minimum length and error message is given, should return the message', () => {
            // Arrange
            const minLength = 5;
            const customMessage = '최소 5자 이상으로 입력해주세요.';
            const checkFunction = TValidatorRule.lengthMin(minLength, customMessage);
            const checkValue = '123';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it(
            'When input length is less than the minimum length and empty string is given as error message, should return empty string',
            () => {
                // Arrange
                const minLength = 5;
                const customMessage = '';
                const checkFunction = TValidatorRule.lengthMin(minLength, customMessage);
                const checkValue = '123';

                // Act
                const result = checkFunction(checkValue);

                // Assert
                expect(result).toEqual(customMessage);
            },
        );
    });


    describe('lengthMax', () => {

        it('When input length is equal to the maximum length, should return true', () => {
            // Arrange
            const maxLength = 10;
            const checkFunction = TValidatorRule.lengthMax(maxLength);
            const checkValue = '1234567890';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input length is less than the maximum length, should return true', () => {
            // Arrange
            const maxLength = 10;
            const checkFunction = TValidatorRule.lengthMax(maxLength);
            const checkValue = '123456';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input length is greater than the maximum length, should return default message', () => {
            // Arrange
            const maxLength = 10;
            const defaultMessage = `${maxLength}자 이내로 입력해 주세요`;
            const checkFunction = TValidatorRule.lengthMax(maxLength);
            const checkValue = '12345678901';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input length is greater than the maximum length and error message is given, should return the message', () => {
            // Arrange
            const maxLength = 10;
            const customMessage = '최대 10자 이내로 입력해주세요.';
            const checkFunction = TValidatorRule.lengthMax(maxLength, customMessage);
            const checkValue = '12345678901';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it(
            'When input length is greater than the maximum length and empty string is given as error message, should return empty string',
            () => {
                // Arrange
                const maxLength = 10;
                const customMessage = '';
                const checkFunction = TValidatorRule.lengthMax(maxLength, customMessage);
                const checkValue = '12345678901';

                // Act
                const result = checkFunction(checkValue);

                // Assert
                expect(result).toEqual(customMessage);
            },
        );
    });


    describe('lengthBetween', () => {

        it('When input length is equal to the minimum length, should return true', () => {
            // Arrange
            const minLength = 5;
            const maxLength = 10;
            const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength);
            const checkValue = '12345';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input length is equal to the maximum length, should return true', () => {
            // Arrange
            const minLength = 5;
            const maxLength = 10;
            const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength);
            const checkValue = '1234567890';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input length is within the valid range, should return true', () => {
            // Arrange
            const minLength = 5;
            const maxLength = 10;
            const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength);
            const checkValue = '123456';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input length is less than the minimum length, should return default message', () => {
            // Arrange
            const minLength = 5;
            const maxLength = 10;
            const defaultMessage = `${minLength}-${maxLength}자 사이로 입력해 주세요`;
            const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength);
            const checkValue = '123';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input length is greater than the maximum length, should return default message', () => {
            // Arrange
            const minLength = 5;
            const maxLength = 10;
            const defaultMessage = `${minLength}-${maxLength}자 사이로 입력해 주세요`;
            const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength);
            const checkValue = '12345678901';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input length is less than the minimum length and error message is given, should return the message', () => {
            // Arrange
            const minLength = 5;
            const maxLength = 10;
            const customMessage = '5에서 10자 사이로 입력해주세요.';
            const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength, customMessage);
            const checkValue = '123';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it('When input length is greater than the maximum length and error message is given, should return the message', () => {
            // Arrange
            const minLength = 5;
            const maxLength = 10;
            const customMessage = '5에서 10자 사이로 입력해주세요.';
            const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength, customMessage);
            const checkValue = '12345678901';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it(
            'When input length is greater than the maximum length and empty string is given as error message, should return empty string',
            () => {
                // Arrange
                const minLength = 5;
                const maxLength = 10;
                const customMessage = '';
                const checkFunction = TValidatorRule.lengthBetween(minLength, maxLength, customMessage);
                const checkValue = '12345678901';

                // Act
                const result = checkFunction(checkValue);

                // Assert
                expect(result).toEqual(customMessage);
            },
        );
    });


    describe('valueMin', () => {

        it('When input value is greater than or equal to the minimum value, should return true', () => {
            // Arrange
            const minValue = 10;
            const checkFunction = TValidatorRule.valueMin(minValue);
            const checkValue = '15';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is less than the minimum value, should return default message', () => {
            // Arrange
            const minValue = 10;
            const defaultMessage = `${minValue} 이상으로 입력해 주세요`;
            const checkFunction = TValidatorRule.valueMin(minValue);
            const checkValue = '5';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input value is less than the minimum value and error message is given, should return the message', () => {
            // Arrange
            const minValue = 10;
            const customMessage = '10 이상의 값으로 입력해주세요.';
            const checkFunction = TValidatorRule.valueMin(minValue, customMessage);
            const checkValue = '5';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it('When input value is less than the minimum value and empty string is given as error message, should return empty string', () => {
            // Arrange
            const minValue = 10;
            const customMessage = '';
            const checkFunction = TValidatorRule.valueMin(minValue, customMessage);
            const checkValue = '5';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });
    });


    describe('valueMax', () => {

        it('When input value is less than or equal to the maximum value, should return true', () => {
            // Arrange
            const maxValue = 100;
            const checkFunction = TValidatorRule.valueMax(maxValue);
            const checkValue = '100';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is greater than the maximum value, should return default message', () => {
            // Arrange
            const maxValue = 100;
            const defaultMessage = `${maxValue} 이하로 입력해 주세요`;
            const checkFunction = TValidatorRule.valueMax(maxValue);
            const checkValue = '101';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input value is greater than the maximum value and error message is given, should return the message', () => {
            // Arrange
            const maxValue = 100;
            const customMessage = '100 이하의 값으로 입력해주세요.';
            const checkFunction = TValidatorRule.valueMax(maxValue, customMessage);
            const checkValue = '101';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it(
            'When input value is greater than the maximum value and empty string is given as error message, should return empty string',
            () => {
                // Arrange
                const maxValue = 100;
                const customMessage = '';
                const checkFunction = TValidatorRule.valueMax(maxValue, customMessage);
                const checkValue = '101';

                // Act
                const result = checkFunction(checkValue);

                // Assert
                expect(result).toEqual(customMessage);
            },
        );
    });


    describe('valueBetween', () => {

        it('When input value is within the valid range, should return true', () => {
            // Arrange
            const minValue = 10;
            const maxValue = 100;
            const checkFunction = TValidatorRule.valueBetween(minValue, maxValue);
            const checkValue = '50';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is equal to the minimum value, should return true', () => {
            // Arrange
            const minValue = 10;
            const maxValue = 100;
            const checkFunction = TValidatorRule.valueBetween(minValue, maxValue);
            const checkValue = '10';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is equal to the maximum value, should return true', () => {
            // Arrange
            const minValue = 10;
            const maxValue = 100;
            const checkFunction = TValidatorRule.valueBetween(minValue, maxValue);
            const checkValue = '100';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is less than the minimum value, should return default message', () => {
            // Arrange
            const minValue = 10;
            const maxValue = 100;
            const defaultMessage = `${minValue}-${maxValue} 사이로 입력해 주세요`;
            const checkFunction = TValidatorRule.valueBetween(minValue, maxValue);
            const checkValue = '5';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input value is greater than the maximum value, should return default message', () => {
            // Arrange
            const minValue = 10;
            const maxValue = 100;
            const defaultMessage = `${minValue}-${maxValue} 사이로 입력해 주세요`;
            const checkFunction = TValidatorRule.valueBetween(minValue, maxValue);
            const checkValue = '150';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input value is less than the minimum value and error message is given, should return the message', () => {
            // Arrange
            const minValue = 10;
            const maxValue = 100;
            const customMessage = '10에서 100 사이의 값으로 입력해주세요.';
            const checkFunction = TValidatorRule.valueBetween(minValue, maxValue, customMessage);
            const checkValue = '5';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it('When input value is greater than the maximum value and error message is given, should return the message', () => {
            // Arrange
            const minValue = 10;
            const maxValue = 100;
            const customMessage = '10에서 100 사이의 값으로 입력해주세요.';
            const checkFunction = TValidatorRule.valueBetween(minValue, maxValue, customMessage);
            const checkValue = '150';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it(
            'When input value is greater than the maximum value and empty string is given as error message, should return empty string',
            () => {
                // Arrange
                const minValue = 10;
                const maxValue = 100;
                const customMessage = '';
                const checkFunction = TValidatorRule.valueBetween(minValue, maxValue, customMessage);
                const checkValue = '150';

                // Act
                const result = checkFunction(checkValue);

                // Assert
                expect(result).toEqual(customMessage);
            },
        );
    });


    describe('valueSpecified', () => {

        it('When input value is one of the specified values, should return true', () => {
            // Arrange
            const values = [1, 2, 3, 4, 5];
            const checkFunction = TValidatorRule.valueSpecified(values);
            const checkValue = '3';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is not one of the specified values, should return default message', () => {
            // Arrange
            const values = [1, 2, 3, 4, 5];
            const defaultMessage = `[${values.join(', ')}] 중 선택해 주세요`;
            const checkFunction = TValidatorRule.valueSpecified(values);
            const checkValue = '6';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input value is not one of the specified values and error message is given, should return the message', () => {
            // Arrange
            const values = [1, 2, 3, 4, 5];
            const customMessage = '1에서 5 중 하나를 선택해주세요.';
            const checkFunction = TValidatorRule.valueSpecified(values, customMessage);
            const checkValue = '6';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it(
            'When input value is not one of the specified values and empty string is given as error message, should return empty string',
            () => {
                // Arrange
                const values = [1, 2, 3, 4, 5];
                const customMessage = '';
                const checkFunction = TValidatorRule.valueSpecified(values, customMessage);
                const checkValue = '6';

                // Act
                const result = checkFunction(checkValue);

                // Assert
                expect(result).toEqual(customMessage);
            },
        );
    });


    describe('equal', () => {

        it('When input value is equal to the specified value, should return true', () => {
            // Arrange
            const valueToEqual = 'abc';
            const checkFunction = TValidatorRule.equal(valueToEqual);
            const checkValue = 'abc';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is not equal to the specified value, should return default message', () => {
            // Arrange
            const valueToEqual = 'abc';
            const defaultMessage = '올바른 값을 입력해 주세요';
            const checkFunction = TValidatorRule.equal(valueToEqual);
            const checkValue = 'def';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input value is not equal to the specified value and error message is given, should return the message', () => {
            // Arrange
            const valueToEqual = 'abc';
            const customMessage = '올바른 값이 아닙니다.';
            const checkFunction = TValidatorRule.equal(valueToEqual, customMessage);
            const checkValue = 'def';

            // Act
            const result = checkFunction(checkValue);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it(
            'When input value is not equal to the specified value and empty string is given as error message, should return empty string',
            () => {
                // Arrange
                const valueToEqual = 'abc';
                const customMessage = '';
                const checkFunction = TValidatorRule.equal(valueToEqual, customMessage);
                const checkValue = 'def';

                // Act
                const result = checkFunction(checkValue);

                // Assert
                expect(result).toEqual(customMessage);
            },
        );
    });


    describe('email', () => {

        it('When input value is a valid email address, should return true', () => {
            // Arrange
            const checkFunction = TValidatorRule.email();
            const validEmail = 'user@example.com';

            // Act
            const result = checkFunction(validEmail);

            // Assert
            expect(result).toEqual(true);
        });

        it('When input value is an invalid email address, should return default message', () => {
            // Arrange
            const defaultMessage = '올바른 형태의 이메일을 입력해 주세요';
            const checkFunction = TValidatorRule.email();
            const invalidEmail = 'not_a_valid_email@ee';

            // Act
            const result = checkFunction(invalidEmail);

            // Assert
            expect(result).toEqual(defaultMessage);
        });

        it('When input value is an invalid email address and error message is given, should return the message', () => {
            // Arrange
            const customMessage = '올바른 이메일 형식으로 입력해주세요.';
            const checkFunction = TValidatorRule.email(customMessage);
            const invalidEmail = 'not_a_valid_email@ee.';

            // Act
            const result = checkFunction(invalidEmail);

            // Assert
            expect(result).toEqual(customMessage);
        });

        it('When input value is an invalid email address and empty string is given as error message, should return empty string', () => {
            // Arrange
            const customMessage = '';
            const checkFunction = TValidatorRule.email(customMessage);
            const invalidEmail = '@ee.com';

            // Act
            const result = checkFunction(invalidEmail);

            // Assert
            expect(result).toEqual(customMessage);
        });
    });


    describe('RegExp', () => {

        describe('RegExp - App Serving Environment Variables', () => {

            const errorMessage = '{"KEY": "VALUE", ...} 형식으로 입력해 주세요';
            const checkFunction: (string) => true | string =  TValidatorRule.regexp(
                /^(\s*{\s*"[a-z0-9가-힣 _-]+"\s*:\s*"[a-z0-9가-힣 _-]*"\s*(,\s*"[a-z0-9가-힣 _-]+"\s*:\s*"[a-z0-9가-힣 _-]*"\s*)*\s*}\s*)?$/i,
                '{"KEY": "VALUE", ...} 형식으로 입력해 주세요',
            );

            it('Should allow inputs in the specified format', () => {

                // Arrange
                const validValues = [
                    '',
                    '{"KEY1":""}',
                    '{"KEY1":"VALUE1"}',
                    '  {"KEY1":"VALUE1"}',
                    '{  "KEY1":"VALUE1"}',
                    '{"KEY1"  :"VALUE1"}',
                    '{"KEY1":  "VALUE1"}',
                    '{"KEY1":"VALUE1"  }',
                    '{"KEY1":"VALUE1"}  ',

                    '{"KEY1":"","KEY2":""}',
                    '{"KEY1":"VALUE1","KEY2":"VALUE2"}',
                    '{  "KEY1":"VALUE1","KEY2":"VALUE2"}',
                    '{"KEY1"  :"VALUE1","KEY2":"VALUE2"}',
                    '{"KEY1":  "VALUE1","KEY2":"VALUE2"}',
                    '{"KEY1":"VALUE1"  ,"KEY2":"VALUE2"}',
                    '{"KEY1":"VALUE1",  "KEY2":"VALUE2"}',
                    '{"KEY1":"VALUE1","KEY2"  :"VALUE2"}',
                    '{"KEY1":"VALUE1","KEY2":  "VALUE2"}',
                    '{"KEY1":"VALUE1","KEY2":"VALUE2"  }',
                    '{"KEY1":"VALUE1","KEY2":"VALUE2"}  ',

                    ' { "KEY1" : "VALUE1" , "KEY2" : "VALUE2" , "KEY3" : "VALUE3" } ',
                    ' { "안녕" : "VALUE1" , "KEY2" : "VALUE2" , "KEY3" : "VALUE3" } ',
                    '  {  "key1"  :  "value1"  ,  "key2"  :  "value2"  ,  "key3"  :  "value3"  }  ',
                    '  {  "안-녕"  :  "하_세_요"  ,  " 한 글 "  :  "됩니다"  ,  " 대 한 "  :  " 민 국 "  }  ',
                ];

                // Act
                const results = validValues.map((value) => checkFunction(value));

                // Assert
                expect(results).toContain(true);
                expect(results).not.toContain(errorMessage);
            });

            it('Should not allow inputs in invalid formats', () => {

                // Arrange
                const invalidValues = [
                    ' ',
                    '"KEY1":"VALUE1"',
                    '{}',
                    '{ }',
                    '{"":""}',
                    '{"":"VALUE1"}',
                    '{"DOT.DOT":"VALUE1"}',
                    '"KEY1":"VALUE1"}',
                    '{"KEY1":"VALUE1"',
                    '{"KEY1":"VALUE1" "KEY2":"VALUE2"}',
                    '{"KEY1":"VALUE1" ㄴ  "KEY2":"VALUE2"}',
                ];

                // Act
                const results = invalidValues.map((value) => checkFunction(value));

                // Assert
                expect(results).toContain(errorMessage);
                expect(results).not.toContain(true);
            });


        });
    });
});
