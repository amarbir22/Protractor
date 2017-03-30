/* calcHome.pageObject.js */

var CalculatorPageModel = function () {
    this.baseUrl = 'http://juliemr.github.io/protractor-demo/';

    this.Operator = {
        ADD: "+",
        SUB: "-",
        DIVIDE: "/",
        MULTIPLY: "*",
        MODULUS: "%"
    };

    this.loadPage = function (url) {
        url = url || this.baseUrl;
        browser.get(url);
    };

    this.firstInput = element(by.model('first'));
    this.secondInput = element(by.model('second'));
    this.operator = element(by.model('operator'));
    this.goBtn = element(by.css('#gobutton'));
    this.result = element(by.binding("latest"));

    this.fillEquation = function (first, second, operator) {
        this.firstInput.sendKeys(first);
        this.secondInput.sendKeys(second);
        this.operator.sendKeys(operator);
    };
};
module.exports = CalculatorPageModel;