package com.practiceautomation.pages;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.Select;

public class SortingHighToLowPage  extends LoginPage
{
	By shopbutton = By.xpath("//*[@id=\"menu-item-40\"]");
	By defaultsorting = By.xpath("//*[@id=\"content\"]/form");
	By orderby = By.name("orderby");
	By addtobasket1= By.xpath("//*[@id=\"content\"]/ul/li[1]/a[2]");
	By addtobasket2=By.xpath("//*[@id=\"content\"]/ul/li[3]/a[2]");
		//To select price high to low in default sorting drop down box
		public void priceHighToLow() throws InterruptedException
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
		}
		//To take screenshot for invalid login
		public void screenshot2() throws InterruptedException, IOException
		 {
			Thread.sleep(5000);
			TakesScreenshot snap = (TakesScreenshot)driver;
			File source = snap.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source, new File("Screenshots\\snap2.png"));
		}	
}
