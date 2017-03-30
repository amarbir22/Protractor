/* SuperCalcSpec.js */
var CalculatorPageModel = require('../pages/pageObject.js');

describe('Test the add functionality', function () {
    var tt = new CalculatorPageModel();
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('To input two positive integers and verify result', function () {
        tt.fillEquation(23, 33,   tt.Operator.SUB);
        tt.goBtn.click();

        tt.result.getText().then(function (value) {
            console.log(value);
        });
        browser.sleep(10000);
    });
});
