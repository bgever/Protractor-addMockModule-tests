Protractor addMockModule tests
==============================

This repo is to test an issue with addMockModule not being executed.

Test
----

Install the [Bower](https://bower.io) packages first, ensure you have bower installed globally.

`$ cd app`  
`$ bower install`

Then prepare for Protractor tests:

`$ cd protractor-3.3.0`
`$ npm install`  
`$ npm run webdriver-manager update`  
`> npm run webdriver-manager-win update`

Then run the protractor tests by running the following commands in separate console windows.

Start the WebDriver.  
`$ npm run webdriver-manager start`  
`> npm run webdriver-manager-win start`

Host the app on localhost:8080.  
`$ npm run server ../app`  
`> npm run server-win ../app`

Run Protractor.  
`$ npm run e2e`  
`> npm run e2e-win`
