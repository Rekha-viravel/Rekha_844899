package com.practiceautomation.stepdefinition;

import com.practiceautomation.pages.DeleteItemPage;
import com.practiceautomation.pages.LoginPage;
import com.practiceautomation.pages.RegisterPage;
import com.practiceautomation.pages.SortingHighToLowPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class DeleteItemSteps 
{

	LoginPage login = new LoginPage();
	RegisterPage register = new RegisterPage();
	DeleteItemPage removeitem = new DeleteItemPage();

	@Given("^chrome page is launched in the system$")
	public void chrome_page_is_launched_in_the_system()
	{
		login.launchChrome();
	}

	@Then("^Practice automation website is opened in the system$")
	public void practice_automation_website_is_opened_in_the_system() throws InterruptedException 
	{
	   
		login.openWebsite();
	}

	@Then("^Enter the  valid Email and password in Login page$")
	public void enter_the_valid_Email_and_password_in_Login_page() throws Exception 
	{
		login.loginDetails();  
	}

	@Then("^Login Button is clicked in the system$")
	public void login_Button_is_clicked_in_the_system() throws InterruptedException 
	{

	    login.clickLoginButton();
	}

	@Then("^Click Shop icon and in Dropdown select the prices from high to low and remove item from cart$")
	public void click_Shop_icon_and_in_Dropdown_select_the_prices_from_high_to_low_and_remove_item_from_cart() throws InterruptedException 
	{

		 removeitem.additemandelete();
		 
	}
	

		@Then("^browser is closed in the system$")
		public void browser_is_closed_in_the_system() throws Throwable {
		    login.closeBrowser();
		}



}
