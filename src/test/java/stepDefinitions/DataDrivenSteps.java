package stepDefinitions;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.When;

public class DataDrivenSteps {
	
	@When("^user signup with following details$")
    public void user_signup_with_following_details(DataTable data) {
       System.out.println("Data details");
       
       List<List<String>> obj = data.raw();
       
       // First get will go to row and second get will go to the first column
       System.out.println(obj.get(0).get(0));
       System.out.println(obj.get(0).get(1));
       System.out.println(obj.get(0).get(2));
       System.out.println(obj.get(0).get(3));
       System.out.println(obj.get(0).get(4));
       
    }

}
