package com.practiceautomation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

public class DeleteItemPage extends LoginPage
{
	By shopbutton = By.xpath("//*[@id=\"menu-item-40\"]");
	By defaultsorting = By.xpath("//*[@id=\"content\"]/form");
	By orderby = By.name("orderby");
	By addtobasket1= By.xpath("//*[@id=\"content\"]/ul/li[1]/a[2]");
	By addtobasket2=By.xpath("//*[@id=\"content\"]/ul/li[3]/a[2]");
	By viewcart=By.xpath("//*[@id=\"wpmenucartli\"]/a/span[2]");
	By removeclick= By.xpath("//*[@id=\"page-34\"]/div/div[1]/form/table/tbody/tr[1]/td[1]/a");
	
		//To select price high to low in default sorting drop down box and delete  book
		public void additemandelete() throws InterruptedException
		{
			Thread.sleep(5000);
			driver.findElement(shopbutton).click();
			
			Thread.sleep(5000);
			driver.findElement(defaultsorting).click();
			
			Select dropdown = new Select(driver.findElement(orderby));
			dropdown.selectByIndex(5);
			
			Thread.sleep(5000);
			driver.findElement(addtobasket1).click();
			
			Thread.sleep(5000);
			driver.findElement(addtobasket2).click();
			
			Thread.sleep(6000);
		    driver.findElement(viewcart).click();
			
			Thread.sleep(7000);
			driver.findElement(removeclick).click();
			  		
          }		
		
     }