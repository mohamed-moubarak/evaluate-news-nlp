jest.mock('./../client/js/nameChecker');
const nameChecker = require('./../client/js/nameChecker').checkForName;


describe("Name Checker function", () => {
    test("it should simulate name checker function and fail", () => {

        expect(nameChecker('test')).toEqual(undefined);
    });
});