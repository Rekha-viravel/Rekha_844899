package com.practiceautomation.stepdefinition;

import com.practiceautomation.pages.LoginPage;
import com.practiceautomation.pages.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class RegisterSteps
{
	LoginPage login = new LoginPage();
RegisterPage register = new RegisterPage();
	
	@Given("^Launch the chrome browser$")
	public void launch_the_chrome_browser() 
	{
		 login.launchChrome();
	}

	@Then("^open the Practice automation website$")
	public void open_the_Practice_automation_website() throws InterruptedException
	{
		   login.openWebsite();
	}

	@Then("^Enter the Email and password in register$")
	public void enter_the_Email_and_password_in_register() throws InterruptedException 
	{
		register.register();
	}

	@Then("^Click the Register button$")
	public void click_the_Register_button() throws InterruptedException 
	{
		 register.clickRegisterButton();
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws InterruptedException 
	{
		  login.closeBrowser(); 
	}



}
