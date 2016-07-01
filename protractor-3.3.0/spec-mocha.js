var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-as-promised'));

describe('Protractor Demo App', function() {

  it('can load the page', function() {

    browser.get('http://localhost:8080/');
    expect(browser.getTitle()).eventually.equals('App');
  });

  it('can show the default message', function() {

    expect(element(by.id('message')).getText()).eventually.equals('default');
  });

  it('can mock the message', function() {
    
    // Set the mock which will execute in the browser.
    function mock(){
        angular.module('app').decorator('svc', function($delegate) {
            $delegate.getMessage = function () {
                return 'mock';
            }
            return $delegate;
        });
    }
    // Set the mock, before reloading the page.
    browser.addMockModule('app', mock);
    browser.get('http://localhost:8080/');
    expect(element(by.id('message')).getText()).eventually.equals('mock');
  });
});