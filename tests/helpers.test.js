const helpers = require('../helpers');

describe('Helper Functions', () => {
    describe('Date Handler', () => {
        
        it('Returns Date String when iso-8601 compliant', () => {
            const value = helpers.convertDate('2016-11-20');
            const expectedValue = '2016-11-20';
            expect(value).toEqual(expectedValue);
        });

        it('Returns Int when passed a number as a string', () => {
            const value = helpers.convertDate('1479663089000');
            const expectedValue = 1479663089000;
            expect(value).toEqual(expectedValue);
        });
    });

    describe('Date Validator' , () => {
        it('Returns True With Vaild Date', () => {
            const date = new Date();
            const value = helpers.isValidDate(date);
            expect(value).toBeTruthy();
        });

        it('Returns False With Invaild Date', () => {
            const date = new Date('abcedefg');
            const value = helpers.isValidDate(date);
            expect(value).toBeFalsy();
        })
    });
});