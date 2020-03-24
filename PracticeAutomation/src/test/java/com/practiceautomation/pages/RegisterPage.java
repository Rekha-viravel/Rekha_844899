package com.practiceautomation.pages;

import org.openqa.selenium.By;

public class RegisterPage extends LoginPage
{
	By myaccountclick = By.xpath("//*[@id=\"menu-item-50\"]/a");
	By registeremail = By.id("reg_email");
	By registerpassword = By.id("reg_password");
	By registerbutton = By.xpath("//*[@id=\"customer_login\"]/div[2]/form/p[3]/input[3]");
     
		//To enter registration details
		public void register() throws InterruptedException
		{
			Thread.sleep(3000);
			driver.findElement(registeremail).sendKeys("sumsuma75@gmail.com");
			driver.findElement(registerpassword).sendKeys("madhurekhavicky");
		}
		
		//To click Register button
		public void clickRegisterButton() throws InterruptedException
		{
			Thread.sleep(4000);
			driver.findElement(registerbutton).click();
		}
}
