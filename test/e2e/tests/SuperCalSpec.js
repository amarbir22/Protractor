/* SuperCalcSpec.js */
var CalculatorPageModel = require('../pages/pageObject.js');

describe('Test the add functionality', function () {
    var tt = new CalculatorPageModel();
    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('To add two positive integers and verify result', function () {
        var first = 20, second = 10, expectedSum = first + second;
        tt.fillEquation(first, second, tt.Operator.ADD);
        tt.goBtn.click();

        tt.result.getText().then(function (value) {
            expect(expectedSum).toBe(parseInt(value));
           // browser.sleep(10000);
        });
    });
});
