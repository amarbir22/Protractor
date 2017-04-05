var AngularJsHomePageModel = function () {
    this.baseUrl = "https://angularjs.org";

    this.loadPage = function (url) {
        url = url || this.baseUrl;
        browser.get(url);
    };

    this.learnBtn = element(by.xpath("//li[@class='dropdown']/a[text()='Learn']"));
    this.tutorialBtn = element(by.xpath("//ul[@class='dropdown-menu']//a[text()='Tutorial']"));

    //This is on tutorial page
    this.selectVersion = element(by.model("$ctrl.selectedVersion"));

    //this on search page auto complete frame
    this.searchField = element(by.name("as_q"));
    this.searchItemElement = element(by.xpath("//a[@class='ng-binding' and text()='angular.element']"));

};

module.exports = AngularJsHomePageModel;