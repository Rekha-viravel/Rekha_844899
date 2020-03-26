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
  "duration": 9025771138,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 6500733855,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.enter_the_Email_and_password_in_register()"
});
formatter.result({
  "duration": 59359936858,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_the_Register_button()"
});
formatter.result({
  "duration": 4121805037,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.take_the_screenshot()"
});
formatter.result({
  "duration": 3445942603,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.close_the_browser()"
});
formatter.result({
  "duration": 7106569593,
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
  "duration": 3407083701,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.opens_Practice_automation_website()"
});
formatter.result({
  "duration": 5720334042,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 92139511982,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_Login_Button()"
});
formatter.result({
  "duration": 3802382103,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.closing_the_browser()"
});
formatter.result({
  "duration": 5096112416,
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
  "duration": 3368508078,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.opens_the_Practiceautomation_website()"
});
formatter.result({
  "duration": 59992156990,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.enter_the_Email_and_password_Login()"
});
formatter.result({
  "duration": 7780989975,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.click_the_Login_Button()"
});
formatter.result({
  "duration": 14354264108,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.click_the_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 100122764180,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.view_the_cart_js_book()"
});
formatter.result({
  "duration": 12408826992,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptSteps.close_browser()"
});
formatter.result({
  "duration": 7143125319,
  "status": "passed"
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
  "duration": 4985571283,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.practice_automation_website_is_opened()"
});
formatter.result({
  "duration": 45585219033,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.entering_the_Email_and_password_in_the_Login_page()"
});
formatter.result({
  "duration": 7454233112,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.login_Button_is_clicked()"
});
formatter.result({
  "duration": 3701918902,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.click_Shop_icon_and_in_Dropdown_select_the_prices_from_high_to_low()"
});
formatter.result({
  "duration": 169803549600,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.screenshot_is_taken_in_the_website()"
});
formatter.result({
  "duration": 5675978413,
  "status": "passed"
});
formatter.match({
  "location": "SortingHighToLowSteps.browser_is_closed()"
});
formatter.result({
  "duration": 5249402909,
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
  "duration": 3658099039,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.practice_automation_website_is_opened_in_the_system()"
});
formatter.result({
  "duration": 6163641440,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.enter_the_valid_Email_and_password_in_Login_page()"
});
formatter.result({
  "duration": 25012733666,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.login_Button_is_clicked_in_the_system()"
});
formatter.result({
  "duration": 9229399973,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.click_Shop_icon_and_in_Dropdown_select_the_prices_from_high_to_low_and_remove_item_from_cart()"
});
formatter.result({
  "duration": 57497675271,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.browser_is_closed_in_the_system()"
});
formatter.result({
  "duration": 7151760174,
  "status": "passed"
});
});