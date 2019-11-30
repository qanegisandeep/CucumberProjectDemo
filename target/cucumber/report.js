$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Appplication Login using Data Table",
  "description": "",
  "id": "appplication-login-using-data-table",
  "keyword": "Feature"
});
formatter.before({
  "duration": 841234,
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
  "duration": 243838562,
  "status": "passed"
});
formatter.match({
  "location": "DataDrivenSteps.user_signup_with_following_details(DataTable)"
});
formatter.result({
  "duration": 3273511,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 86174,
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
  "duration": 2527395,
  "status": "passed"
});
formatter.after({
  "duration": 89541,
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
  "duration": 318976,
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
  "duration": 117499,
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
  "duration": 172078,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 59880,
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
  "duration": 325442,
  "status": "passed"
});
formatter.after({
  "duration": 628589,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Home page default login",
  "description": "",
  "id": "appplication-login-using-simple-parameters;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on netbanking landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user login into Application with \"carl\" and \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Cards \"not\" displayed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 386365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carl",
      "offset": 34
    },
    {
      "val": "test",
      "offset": 45
    }
  ],
  "location": "LoginSteps.user_login_into_Application_with_and(String,String)"
});
formatter.result({
  "duration": 130693,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 376767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not",
      "offset": 7
    }
  ],
  "location": "LoginSteps.cards_displayed(String)"
});
formatter.result({
  "duration": 126164,
  "status": "passed"
});
formatter.after({
  "duration": 66639,
  "status": "passed"
});
formatter.uri("ParameterizationWithExampleKeyword.feature");
formatter.feature({
  "line": 1,
  "name": "Appplication Login using Example Keyword",
  "description": "",
  "id": "appplication-login-using-example-keyword",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "appplication-login-using-example-keyword;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
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
  "name": "user login with \u003cusername\u003e and \u003cpassword\u003e",
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
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "appplication-login-using-example-keyword;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "appplication-login-using-example-keyword;home-page-default-login;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 12,
      "id": "appplication-login-using-example-keyword;home-page-default-login;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 13,
      "id": "appplication-login-using-example-keyword;home-page-default-login;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 14,
      "id": "appplication-login-using-example-keyword;home-page-default-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Home page default login",
  "description": "",
  "id": "appplication-login-using-example-keyword;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
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
  "name": "user login with user1 and pass1",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 80526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 16
    },
    {
      "val": "pass1",
      "offset": 26
    }
  ],
  "location": "ParameterizationWithExamplesKeywordSteps.user_login_with_and(String,String)"
});
formatter.result({
  "duration": 203668,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 575497,
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
  "duration": 498124,
  "status": "passed"
});
formatter.after({
  "duration": 85676,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Home page default login",
  "description": "",
  "id": "appplication-login-using-example-keyword;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
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
  "name": "user login with user2 and pass2",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 108143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 16
    },
    {
      "val": "pass2",
      "offset": 26
    }
  ],
  "location": "ParameterizationWithExamplesKeywordSteps.user_login_with_and(String,String)"
});
formatter.result({
  "duration": 220373,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 163791,
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
  "duration": 1078342,
  "status": "passed"
});
formatter.after({
  "duration": 2153930,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Home page default login",
  "description": "",
  "id": "appplication-login-using-example-keyword;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
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
  "name": "user login with user3 and pass3",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 769135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 16
    },
    {
      "val": "pass3",
      "offset": 26
    }
  ],
  "location": "ParameterizationWithExamplesKeywordSteps.user_login_with_and(String,String)"
});
formatter.result({
  "duration": 1192069,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_is_populated()"
});
formatter.result({
  "duration": 166925,
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
  "duration": 103477,
  "status": "passed"
});
formatter.after({
  "duration": 69934,
  "status": "passed"
});
});