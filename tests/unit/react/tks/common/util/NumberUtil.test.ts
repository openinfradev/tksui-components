import NumberUtil from '@/common/util/NumberUtil';

describe('NumberUtil', () => {

    it('Separate numeric values by three-digit commas', () => {
        // Arrange
        const testNumberValue = 1000000000;
        const expectedCommaCount = Math.floor((testNumberValue.toString().length - 1) / 3);

        const containCommaValue = NumberUtil.toLocaleString(testNumberValue);
        const resultCommaArr = containCommaValue.split('').filter(str => str === ',');

        // Assert
        expect(typeof testNumberValue).toBe('number');
        expect(resultCommaArr.length).toEqual(expectedCommaCount);
    });

});
