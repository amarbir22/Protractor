/* SuperCalcSpec.js */
var CalculatorPageModel = require('../pages/pageObject.js');
var CalculatorDataProvider = require('../testData/testData.js');

describe('Test the add functionality', function () {
    var calcPage = new CalculatorPageModel();
    var calcData = new CalculatorDataProvider();

    beforeEach(function () {
        calcPage.loadPage(); //loads the base url
    });

    it('To add two positive integers and verify result', function () {
        calcPage.fillEquation(calcData.addPosNumber.firstValue,
            calcData.addPosNumber.secondValue, calcPage.Operator.ADD);

        calcPage.goBtn.click();

        calcPage.result.getText().then(function (value) {
            expect(parseInt(value)).toBe(calcData.addPosNumber.expectedValue);
        });

    });
});
