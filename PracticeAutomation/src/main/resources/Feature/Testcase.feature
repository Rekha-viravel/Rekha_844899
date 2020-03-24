@Practice_Automation
Feature: Testing the practice automation website

@TC-01_Register
Scenario: To check if the user is able to register with valid details
Given Launch the chrome browser 
Then open the Practice automation website
Then  Enter the Email and password in register
And Click the Register button
Then Close the browser

@TC-02_Login_Functionlity
Scenario: To check if the user is able to login with valid details
Given Launch the chrome browser in system
Then opens  Practice automation website
Then  Enter the Email and password in Login
And Click Login Button
Then Closing the  browser

@TC_03_Adding_books_from_JavaScript_Category
Scenario: To check if the user is able to buy books from javascipt category
Given Launch the chrome browser in the  system
Then opens the Practiceautomation website
Then  Enter the Email and password  Login
And Click the  Login Button
Then Click the  Shop icon, Click JavaScript and buy the book
Then  View the cart js book
Then Close  browser

@TC_04_Filtering_The_Price_from_high_to_low
Scenario: To check if the user is able to sort the prices from high to low
Given chrome page is launched
Then  Practice automation website is opened
Then  Entering the Email and password in the  Login page
And Login Button is clicked
Then Click Shop icon and in Dropdown select the prices from high to low
Then  browser is closed

@TC_05_Filtering_The_Price_from_high_to_low_and_remove_item_from_cart
Scenario: To check if the user is able to sort the prices from high to low
Given chrome page is launched in the system
Then  Practice automation website is opened in the system
Then  Enter the  valid Email and password in Login page
And Login Button is clicked in the system
Then Click Shop icon and in Dropdown select the prices from high to low and remove item from cart
Then  browser is closed in the system

