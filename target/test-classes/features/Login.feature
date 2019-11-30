Feature: Appplication Login using simple parameters

@regression
Scenario: Home page default login
Given user is on netbanking landing Page
When user login into Application with "sandeep" and "123456"
Then Home page is populated
And Cards "is" displayed

@smoke
Scenario: Home page default login
Given user is on netbanking landing Page
When user login into Application with "carl" and "test"
Then Home page is populated
And Cards "not" displayed