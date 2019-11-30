$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Appplication Login using Data Table",
  "description": "",
  "id": "appplication-login-using-data-table",
  "keyword": "Feature"
});
formatter.before({
  "duration": 466877,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "appplication-login-using-data-table;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on netbanking landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user signup with following details",
  "rows": [
    {
      "cells": [
        "jenny",
        "1234",
        "j@gmail.com",
        "Australia",
        "3245656"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Cards \"is\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 254167808,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenSteps.user_signup_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1647263,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 95219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is",
      "offset": 7
    }
  ],
  "location": "LoginSteps.cards_displayed(String)"
});
formatter.result({
  "duration": 24580125,
  "status": "passed"
});
formatter.after({
  "duration": 264426,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Appplication Login using simple parameters",
  "description": "",
  "id": "appplication-login-using-simple-parameters",
  "keyword": "Feature"
});
formatter.before({
  "duration": 264218,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "appplication-login-using-simple-parameters;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on netbanking landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user login into Application with \"sandeep\" and \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards \"is\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 128454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep",
      "offset": 34
    },
    {
      "val": "123456",
      "offset": 48
    }
  ],
  "location": "LoginSteps.user_login_into_Application_with_and(String,String)"
});
formatter.result({
  "duration": 2406658,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 255501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is",
      "offset": 7
    }
  ],
  "location": "LoginSteps.cards_displayed(String)"
});
formatter.result({
  "duration": 187282,
  "status": "passed"
});
formatter.after({
  "duration": 88951,
  "status": "passed"
});
});