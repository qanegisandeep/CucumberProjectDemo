Feature: Appplication Login using Data Table

Scenario: Home page default login
Given user is on netbanking landing Page
When user signup with following details
| jenny | 1234 | j@gmail.com | Australia | 3245656 |

Then Home page is populated
And Cards "is" displayed