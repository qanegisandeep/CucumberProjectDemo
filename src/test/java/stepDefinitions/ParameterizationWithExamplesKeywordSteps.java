package stepDefinitions;

import cucumber.api.java.en.When;

public class ParameterizationWithExamplesKeywordSteps {

	@When("^user login with (.+) and (.+)$")
    public void user_login_with_and(String username, String password) throws Throwable {
        System.out.println("username = " + username + " & password = " + password );
    }
}
