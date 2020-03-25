$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "Testing the practice automation website",
  "description": "",
  "id": "testing-the-practice-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To check if the user is able to register with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-register-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter the Email and password in register",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "take the screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.launch_the_chrome_browser()"
});
formatter.result({
  "duration": 5821394078,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 5788415253,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enter_the_Email_and_password_in_register()"
});
formatter.result({
  "duration": 20708174631,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_the_Register_button()"
});
formatter.result({
  "duration": 4094272134,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.take_the_screenshot()"
});
formatter.result({
  "duration": 3427002988,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.close_the_browser()"
});
formatter.result({
  "duration": 7090315989,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@TC-02_Login_Functionlity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "opens  Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter the Email and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Closing the  browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 5564215386,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.opens_Practice_automation_website()"
});
formatter.result({
  "duration": 27360377684,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 9844785062,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_Login_Button()"
});
formatter.result({
  "duration": 3534139136,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.closing_the_browser()"
});
formatter.result({
  "duration": 7299450276,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To check if the user is able to buy books from javascipt category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-javascipt-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@TC_03_Adding_books_from_JavaScript_Category"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Launch the chrome browser in the  system",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "opens the Practiceautomation website",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter the Email and password  Login",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click the  Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click the  Shop icon, Click JavaScript and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "View the cart js book",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Close  browser",
  "keyword": "Then "
});
formatter.match({
  "location": "JavaScriptSteps.launch_the_chrome_browser_in_the_system()"
});
formatter.result({
  "duration": 5658841105,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.opens_the_Practiceautomation_website()"
});
formatter.result({
  "duration": 23489786073,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.enter_the_Email_and_password_Login()"
});
formatter.result({
  "duration": 7551742418,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.click_the_Login_Button()"
});
formatter.result({
  "duration": 11102144396,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.click_the_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 34540093113,
  "error_message": "java.lang.AssertionError: expected:\u003c5\u003e but was:\u003c3\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat com.practiceautomation.stepdefinition.JavaScriptSteps.click_the_Shop_icon_Click_JavaScript_and_buy_the_book(JavaScriptSteps.java:49)\r\n\tat ✽.Then Click the  Shop icon, Click JavaScript and buy the book(src/main/resources/Feature/TestCase.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JavaScriptSteps.view_the_cart_js_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JavaScriptSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "To check if the user is able to sort the prices from high to low",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-sort-the-prices-from-high-to-low",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@TC_04_Filtering_The_Price_from_high_to_low"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "chrome page is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Practice automation website is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Entering the Email and password in the  Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Login Button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Click Shop icon and in Dropdown select the prices from high to low",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "screenshot is taken in the website",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "browser is closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SortingHighToLowSteps.chrome_page_is_launched()"
});
formatter.result({
  "duration": 5245810612,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.practice_automation_website_is_opened()"
});
formatter.result({
  "duration": 25275351609,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.entering_the_Email_and_password_in_the_Login_page()"
});
formatter.result({
  "duration": 7635401367,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.login_Button_is_clicked()"
});
formatter.result({
  "duration": 9581949016,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.click_Shop_icon_and_in_Dropdown_select_the_prices_from_high_to_low()"
});
formatter.result({
  "duration": 44276915285,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.screenshot_is_taken_in_the_website()"
});
formatter.result({
  "duration": 5651021187,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.browser_is_closed()"
});
formatter.result({
  "duration": 5151330638,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To check if the user is able to sort the prices from high to low",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-sort-the-prices-from-high-to-low",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@TC_05_Filtering_The_Price_from_high_to_low_and_remove_item_from_cart"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "chrome page is launched in the system",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Practice automation website is opened in the system",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter the  valid Email and password in Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Login Button is clicked in the system",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click Shop icon and in Dropdown select the prices from high to low and remove item from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "browser is closed in the system",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteItemSteps.chrome_page_is_launched_in_the_system()"
});
formatter.result({
  "duration": 5296109440,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.practice_automation_website_is_opened_in_the_system()"
});
formatter.result({
  "duration": 26290259641,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.enter_the_valid_Email_and_password_in_Login_page()"
});
formatter.result({
  "duration": 7464621520,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.login_Button_is_clicked_in_the_system()"
});
formatter.result({
  "duration": 3647582846,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.click_Shop_icon_and_in_Dropdown_select_the_prices_from_high_to_low_and_remove_item_from_cart()"
});
formatter.result({
  "duration": 90271548906,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.browser_is_closed_in_the_system()"
});
formatter.result({
  "duration": 7162786986,
  "status": "passed"
});
});