'use strict';
describe('Ensure that the plugin works', function() {
	it('should not really do much.', function() {
		browser.sleep(3000);
		browser.driver.get(browser.baseUrl+'#');
		browser.waitForAngular();
		browser.wait(function() {
			return element(by.id('new-todo')).isPresent();
		});

	});
});
