"use strict";

//-------------------------------
// DARK MODE 
function darkModeToggle(){
    let element = document.body;
    element.classList.toggle("darkStyles");
}
// Event handler for dark mode button
document.getElementById("darkMode").addEventListener("click", darkModeToggle);

//-------------------------------
// PRODUCT DISPLAY
// Declare variable for product #1 container
let product1 = document.getElementById("product1");
// Declare variable for sunrise sweetness button
let sunrise = document.getElementById("sunrise");

// Declare variable for product #2 container
let product2 = document.getElementById("product2");
// Declare variable for mild monday button 
let mildMonday = document.getElementById("mildMonday");

// Declare variable for product #3 container
let product3 = document.getElementById("product3");
// Declare variable for dark daisy button
let darkDaisy = document.getElementById("darkDaisy");

// Function to display product 1
function productDisplay1(){
    
    // Add and remove hide class to product containers
    product1.classList.remove("hide");
    product2.classList.add("hide");
    product3.classList.add("hide"); 

    // Add and remove active class for product list name
    sunrise.classList.add("active");
    mildMonday.classList.remove("active");
    darkDaisy.classList.remove("active"); 
}
// Event handler for product #1
document.getElementById("sunrise").addEventListener("click", productDisplay1);

// Function to display product 2
function productDisplay2(){
    
    // Add and remove hide class to product containers
    product1.classList.add("hide");
    product2.classList.remove("hide");
    product3.classList.add("hide"); 

    // Add and remove active class for product list name
    sunrise.classList.remove("active");
    mildMonday.classList.add("active");
    darkDaisy.classList.remove("active");       
}
// Event handler for product #2
document.getElementById("mildMonday").addEventListener("click", productDisplay2);

// Function to display product 3
function productDisplay3(){
    
    // Add and remove hide class to product containers
    product1.classList.add("hide");
    product2.classList.add("hide");
    product3.classList.remove("hide"); 

    // Add and remove active class for product list name
    sunrise.classList.remove("active");
    mildMonday.classList.remove("active");
    darkDaisy.classList.add("active");  
}
// Event handler for product #3
document.getElementById("darkDaisy").addEventListener("click", productDisplay3);

//-------------------------------
// REWARDS GAME
// Variable for submit button
let testSubmit = document.getElementById("testSubmit");
// Variable for "Try again" message
let userGuessWrong = document.getElementById("userGuessWrong");
// Variable for "You won!" message
let userGuessCorrect = document.getElementById("userGuessCorrect");
// Variables for spans to display results
let correctResult = document.getElementById("correctResult");
let wrongResult = document.getElementById("wrongResult");

// This function compares the random number generated from getRandomNumber() to the userGuess.value
function testYourLuck (){
    let userGuess = document.getElementById("userGuess").value;
    // getRandomNumber's min and max are 1 and 10
    let randomNum = getRandomNumber(1, 10);
    if(userGuess == randomNum){
        // Show the "You won!" message
        userGuessCorrect.classList.remove("hide");
        // Hide the "Try again" message
        userGuessWrong.classList.add("hide");
        // Tell the user what the correct number is and what his or her guess is 
        correctResult.innerHTML = "The randonmly generated number is " + "<strong>" + randomNum + "</strong>" + " and your guess is " + "<strong>" + userGuess + "</strong>" + ".";
    } else{
        // Show the "Try again" message
        userGuessWrong.classList.remove("hide");
        // Hide the "You won!" message
        userGuessCorrect.classList.add("hide");
        // Tell the user what the correct number is and what his or her guess is 
        wrongResult.innerHTML = "The randonmly generated number is " + "<strong>" + randomNum + "</strong>" + " and your guess is " + "<strong>" + userGuess + "</strong>" + ".";
    }
}
// This function generates a random number betwwen a given min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
// Event listener for the submit button
testSubmit.addEventListener("click", testYourLuck);

//-------------------------------
// CONTACT FORM VALIDATION
// Variables for the spans that will display the messages
let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let commentError = document.getElementById("commentError");
let contactPrefError = document.getElementById("contactPrefError");
let submitConfirmation = document.getElementById("submitConfirmation");

// What is the contact prefence?
let contactPref = "";

// Inputs
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let userEmail = document.getElementById("userEmail");
let userPhoneNumber = document.getElementById("userPhoneNumber");
let comment = document.getElementById("comment");

// Error messages
let empty = "This field is required";

// Global array to store user input data to make a user object
let userSubmissions = [];

// This function adds the required attribute to the email input if the email radio is checked
function setPrefEmail(){
    contactPref = "email";
    userEmail.setAttribute("required", "");
    userPhoneNumber.removeAttribute("required", "");
}
// Event handler for radio button email preference
document.getElementById("emailPref").addEventListener("click", setPrefEmail);

// This function adds the required attribute to the phone input if the phone radio is checked
function setPrefPhone(){
    contactPref = "phone";
    userEmail.removeAttribute("required", "");
    userPhoneNumber.setAttribute("required", "");
}
// Event handler for radio button phone preference
document.getElementById("phonePref").addEventListener("click", setPrefPhone);

// This function validates all required fields on submit
function validateForm(event){
    // Prevent browser default submission
    event.preventDefault();

    // Is form valide
    let isFormValid = true;

    // User information object
    let userObject = {};

    // Clear the submit confirmation output
    submitConfirmation.innerHTML = "";
    // Empty output string
    let output = "";

    // Check first name input
    if (firstName.value == ""){
        isFormValid = false;
        // Display the span that holds the error message
        firstNameError.classList.remove("hide");
        // Display error message
        firstNameError.innerHTML = empty;
        // Add a red border to input
        firstName.style.setProperty("border", "2px solid #b33b23");
    }else{
        // Add a green border to input
        firstName.style.setProperty("border", "2px solid green");
        // Hide the span that holds the error message
        firstNameError.classList.add("hide");
    }

    // Check last name input
    if (lastName.value == ""){
        isFormValid = false;
        // Display the span that holds the error message
        lastNameError.classList.remove("hide");
        // Display error message
        lastNameError.innerHTML = empty;
        // Add a red border to input
        lastName.style.setProperty("border", "2px solid #b33b23");
    }else{
        // Add a green border to input
        lastName.style.setProperty("border", "2px solid green");
        // Hide the span that holds the error message
        lastNameError.classList.add("hide");
    }

    // If the email is selected as the contact preference, check email input
    if(contactPref == "email"){
        // Hide the span that holds the phone error message
        phoneError.classList.add("hide");
        // Remove the red border from the phone input
        userPhoneNumber.style.removeProperty("border", "2px solid #b33b23");

        // Check email input 
        let emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        if(!emailregex.test(userEmail.value)){
            isFormValid = false;
            // Add a red border to input
            userEmail.style.setProperty("border", "2px solid #b33b23");
            // Display the span that holds the error message
            emailError.classList.remove("hide");
            // Display the error message
            emailError.innerHTML = "Invalid or missing email address.";
        }else{
            // Hide the span that holds the error message
            emailError.classList.add("hide");
            // Remove the red border from input
            userEmail.style.removeProperty("border", "2px solid #b33b23");
            // Add green border to input
            userEmail.style.setProperty("border", "2px solid green");
        }
    } 
    // Check phone input if selected as contact preference 
    if (contactPref == "phone"){
        // Hide the span that holds the email error message
        emailError.classList.add("hide");
        // Remove the red border from the email input
        userEmail.style.removeProperty("border", "2px solid #b33b23");
        // Clear email input
        userEmail.value = "";

        // Check phone input
        let phoneregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(!phoneregex.test(userPhoneNumber.value)){
            isFormValid = false;
            // Add a red border to input
            userPhoneNumber.style.setProperty("border", "2px solid #b33b23");
            // Display the span that holds the error message
            phoneError.classList.remove("hide");
            // Display the error message
            phoneError.innerHTML = "Invalid or missing phone number.";
        }else{
            // Hide the span that holds the error message
            phoneError.classList.add("hide");
            // Remove the red border from input
            userPhoneNumber.style.removeProperty("border", "2px solid #b33b23");
            // Add green border to input
            userPhoneNumber.style.setProperty("border", "2px solid green");
        }
    }
    // Check comment input
    if (comment.value == ""){
        isFormValid = false;
        // Display error message
        commentError.innerHTML = "Please write a comment";
        // Display span that holds the error message
        commentError.classList.remove("hide");
        // Add a red border to the input
        comment.style.setProperty("border", "2px solid #b33b23");
    }else{
        // Hide the span that holds the error message
        commentError.classList.add("hide");
        // Add a green border to the input
        comment.style.setProperty("border", "2px solid green");
    }

    // Check if a radio input is checked
    if (contactPref == ""){
        isFormValid = false;
        // Display the span that holds the error message
        contactPrefError.classList.remove("hide");
        // Display the error message
        contactPrefError.innerHTML = "Please select a contact preference";
    }else{
        // Hide the span that holds the error message
        contactPrefError.classList.add("hide");
    }
    
    // If the form is valid, submit the data, display the data to the user and clear the form inputs
    if (isFormValid !== false){
        // Add data to userObject object
        userObject = {
            name: firstName.value + " " + lastName.value,
            contact: userEmail.value || userPhoneNumber.value,
            comment: comment.value
        };
        // Add user data to user submissions array
        userSubmissions.push(userObject);
        console.log(userSubmissions);
        // Iterate through each user in user submissions array and output confirmation message
        for(let user of userSubmissions){
            output += "<strong style='color: green;'>Submission Successful:</strong>" + "</br> Thank you, " + "<strong>" + user.name + "</strong>" + ". </br>" + "We have recieved your comment, '" + "<strong>" + user.comment + "</strong>" + "'. </br>" + "We will reach out to " + "<strong>" + user.contact + "</strong>" + " as soon as possible. </br>Thank you for your time, have a nice day. </br> </br>";
        }
        // Add the output to html
        submitConfirmation.innerHTML = output;
        // Display submitConfirmation span
        submitConfirmation.classList.remove("hide");

        // Reset form
        firstName.value = "";
        lastName.value = "";
        userEmail.value = "";
        userPhoneNumber.value = "";
        comment.value = "";
        firstName.style.removeProperty("border", "2px solid green");
        lastName.style.removeProperty("border", "2px solid green");
        userEmail.style.removeProperty("border", "2px solid green");
        userPhoneNumber.style.removeProperty("border", "2px solid green");
        comment.style.removeProperty("border", "2px solid green");
    }
}

// Event listener for the submit button
document.getElementById("formSubmit").addEventListener("click", validateForm);