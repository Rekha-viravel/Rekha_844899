package com.practiceautomation.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions 
	(
		features = "src/main/resources/Feature/TestCase.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@TC-01_Register,@TC-02_Login_Functionlity,@TC_03_Adding_books_from_JavaScript_Category,@TC_04_Filtering_The_Price_from_high_to_low,@TC_05_Filtering_The_Price_from_high_to_low_and_remove_item_from_cart"},
		//tags = {"@TC_03_Adding_books_from_JavaScript_Category"},
		glue = {"com.practiceautomation.stepdefinition"},
		monochrome = true
	)
public class PracticeAutomationRunnerClass 
{
	
	@AfterClass
	   public static void extendReport()
	{ 
		Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	    Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	    Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
	    Reporter.setSystemInfo("Selinium", "3.141.59");
		Reporter.setSystemInfo("Maven", "4.0.0");
		Reporter.setSystemInfo("Java Version", "1.8.0_131");
	
	}
	}

