
var AngularHomePageModel = require('../pages/angularHome.js')
fdescribe('Test the Menu Bar Navigation', function () {
    var angularPage = new AngularHomePageModel();

    it('Clicking on LEARN should expand the menu', function () {
        angularPage.loadPage();
        angularPage.learnBtn.click();
        angularPage.tutorialBtn.click();

        //Select version on tutorial page
      //  angularPage.selectVersion.sendKeys("v1.4.11");
        angularPage.searchField.sendKeys("ang");
    //    angularPage.searchField.sendKeys("  ");

       // browser.sleep(3000);
        angularPage.searchItemElement.click();

        browser.sleep(10000);


        });


});