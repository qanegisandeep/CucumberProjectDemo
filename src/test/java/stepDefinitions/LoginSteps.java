package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class LoginSteps {

    @Given("^user is on netbanking landing Page$")
    public void user_is_on_netbanking_landing_page()    {
         System.out.println("Netbanking Page");
    }

    @When("^user login into Application with username and password$")
    public void user_login_into_application_with_username_and_password()    {
         System.out.println("Login in App");
    }
    
    @When("^user login into Application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_into_Application_with_and(String arg1, String arg2)  {
        System.out.println("User logins using username : "+ arg1 + "  password :" + arg2);  
    }

    @Then("^Home page is populated$")
    public void home_page_is_populated()    {
       System.out.println("On Home Page");  
    }

    
    @And("^Cards \"([^\"]*)\" displayed$")
    public void cards_displayed(String arg1) throws Throwable {
    	System.out.println("Cards " +arg1 + " displayed");
    }

}