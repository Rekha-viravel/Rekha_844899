package com.practiceautomation.stepdefinition;

import com.practiceautomation.pages.LoginPage;
import com.practiceautomation.pages.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginSteps 
{
	LoginPage login = new LoginPage();
	RegisterPage register = new RegisterPage();
	
	@Given("^Launch the chrome browser in system$")
	public void launch_the_chrome_browser_in_system() 
	{
		 login.launchChrome();
	}

	@Then("^opens  Practice automation website$")
	public void opens_Practice_automation_website() throws InterruptedException 
	{
		   login.openWebsite();
	}

	@Then("^Enter the Email and password in Login$")
	public void enter_the_Email_and_password_in_Login() throws Exception 
	{
		login.loginDetails();
	}

	@Then("^Click Login Button$")
	public void click_Login_Button() throws InterruptedException 
	{
		login.clickLoginButton();
	}

	@Then("^Closing the  browser$")
	public void closing_the_browser() throws InterruptedException
	{
		   login.closeBrowser();
	}

}