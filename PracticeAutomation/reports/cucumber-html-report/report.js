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
  "line": 40,
  "name": "To check if the user is able to sort the prices from high to low",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-sort-the-prices-from-high-to-low",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TC_05_Filtering_The_Price_from_high_to_low_and_remove_item_from_cart"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "chrome page is launched in the system",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Practice automation website is opened in the system",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Enter the  valid Email and password in Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Login Button is clicked in the system",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Click Shop icon and in Dropdown select the prices from high to low and remove item from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "browser is closed in the system",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteItemSteps.chrome_page_is_launched_in_the_system()"
});
formatter.result({
  "duration": 11176557196,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.practice_automation_website_is_opened_in_the_system()"
});
formatter.result({
  "duration": 5678646628,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.enter_the_valid_Email_and_password_in_Login_page()"
});
formatter.result({
  "duration": 24530066226,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.login_Button_is_clicked_in_the_system()"
});
formatter.result({
  "duration": 11482448303,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.click_Shop_icon_and_in_Dropdown_select_the_prices_from_high_to_low_and_remove_item_from_cart()"
});
formatter.result({
  "duration": 66707767312,
  "status": "passed"
});
formatter.match({
  "location": "DeleteItemSteps.browser_is_closed_in_the_system()"
});
formatter.result({
  "duration": 5396400008,
  "status": "passed"
});
});