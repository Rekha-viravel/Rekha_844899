package com.practiceautomation.stepdefinition;

import java.io.IOException;

import com.practiceautomation.pages.LoginPage;
import com.practiceautomation.pages.RegisterPage;
import com.practiceautomation.pages.SortingHighToLowPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SortingHighToLowSteps {
	LoginPage login = new LoginPage();
	RegisterPage register = new RegisterPage();
	SortingHighToLowPage hightolow = new SortingHighToLowPage();
	@Given("^chrome page is launched$")
	public void chrome_page_is_launched() 
	{
		login.launchChrome();
	}

	@Then("^Practice automation website is opened$")
	public void practice_automation_website_is_opened() throws InterruptedException 
	{
		login.openWebsite();  
	}

	@Then("^Entering the Email and password in the  Login page$")
	public void entering_the_Email_and_password_in_the_Login_page() throws Exception
	{
		login.loginDetails();
	}

	@Then("^Login Button is clicked$")
	public void login_Button_is_clicked() throws InterruptedException 
	{
		 login.clickLoginButton();
	}

	@Then("^Click Shop icon and in Dropdown select the prices from high to low$")
	public void click_Shop_icon_and_in_Dropdown_select_the_prices_from_high_to_low() throws InterruptedException 
	{

	    hightolow.priceHighToLow();
	}

	@Then("^screenshot is taken in the website$")
	public void screenshot_is_taken_in_the_website() throws InterruptedException, IOException 
	{
	    hightolow.screenshot2();
	}
	@Then("^browser is closed$")
	public void browser_is_closed() throws InterruptedException 
	{
		  login.closeBrowser();
	}


	
	
	
	
}
