Feature: Appplication Login using Example Keyword

Scenario Outline: Home page default login
Given user is on netbanking landing Page
When user login with <username> and <password>
Then Home page is populated
And Cards "is" displayed

Examples:
| username | password |
| user1    | pass1    |
| user2    | pass2    |
| user3    | pass3    |