package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksInCucumber {
	
	@Before("@regression")
	public void setUp() {
		System.out.println("Before");
	}
	
	@After
	public void tearDown() {
		System.out.println("After");
	}

}
