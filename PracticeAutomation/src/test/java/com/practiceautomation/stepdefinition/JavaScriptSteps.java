package com.practiceautomation.stepdefinition;

import java.io.IOException;

import org.junit.Assert;

import com.practiceautomation.pages.JavaScriptPage;
import com.practiceautomation.pages.LoginPage;
import com.practiceautomation.pages.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class JavaScriptSteps
{
	LoginPage login = new LoginPage();
	RegisterPage register = new RegisterPage();
	JavaScriptPage js = new JavaScriptPage();
	
	@Given("^Launch the chrome browser in the  system$")
	public void launch_the_chrome_browser_in_the_system() 
	{
		 login.launchChrome();
	}

	@Then("^opens the Practiceautomation website$")
	public void opens_the_Practiceautomation_website() throws InterruptedException 
	{
		   login.openWebsite();
	}
	@Then("^Enter the Email and password  Login$")
	public void enter_the_Email_and_password_Login() throws Exception 
	{
		login.loginDetails();
	}

	@Then("^Click the  Login Button$")
	public void click_the_Login_Button() throws InterruptedException 
	{
		login.clickLoginButton();
	}

	//To check if the user is able to buy books from javaScript category
	@Then("^Click the  Shop icon, Click JavaScript and buy the book$")
	public int click_the_Shop_icon_Click_JavaScript_and_buy_the_book() throws InterruptedException 
	{
		js.javascriptBookCategory();
		int javascript=js.javascriptBookCategory();
		boolean script;
		if(javascript==0)
		{
			script=false;
			System.out.println("OUT OF STOCK");
			Assert.assertTrue(script);
		}
		else
		{
			System.out.println("STOCKS ARE AVAILABLE ,YOU CAN BUY THE BOOK");	
		}
		return javascript;
	}

	@Then("^View the cart js book$")
	public void view_the_cart_js_book() throws InterruptedException
	{
	    js.viewCartJavaScript();
	}
	
	@Then("^Close  browser$")
	public void close_browser() throws InterruptedException 
	{
	    login.closeBrowser();
	}


}
