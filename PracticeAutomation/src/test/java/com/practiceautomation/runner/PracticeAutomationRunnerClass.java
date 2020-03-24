package com.practiceautomation.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions 
	(
		features = "src/main/resources/Feature/TestCase.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@TC_05_Filtering_The_Price_from_high_to_low_and_remove_item_from_cart"},
		glue = {"com.practiceautomation.stepdefinition"},
		monochrome = true
	)
public class PracticeAutomationRunnerClass 
{

}
