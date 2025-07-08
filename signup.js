const email_input = document.getElementById('email');
const password_input = document.getElementById('password');
const signup_btn = document.getElementById('signup_btn');

// Assign function to button
signup_btn.onclick = CheckEmail;

// Function to check whether email input is empty or not
function CheckEmail(){
    if(email_input.value == ""){
        alert("Please enter your email address.");
    }
    else if(email_input.value == "johndoe@gmail.com" && password_input.value == "123456"){
        alert("Welcome back, Cedric!");
    }
}