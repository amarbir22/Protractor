describe ('Test zoo site for bla bla', function(){
    it ('To text input field and check test output', function(){
        browser.get('https://docs.angularjs.org/tutorial');
        element(by.model("q")).sendKeys("sdsdssssssssd");
		 element(by.model("$ctrl.selectedVersion")).click();
		 browser.sleep(4000);
    });
});