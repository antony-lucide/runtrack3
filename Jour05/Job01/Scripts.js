document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('#btn');

    function verify_password() {
        let email = document.querySelector("#mail").value;
        let password = document.querySelector('#pss').value;
        let isValid = true;  // Set true initially, but will set to false if any validation fails
        let messages = [];   // Use an array to store multiple error messages

        // Check if password is at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push("Password is too short! Must be at least 8 characters.");
        }

        // Check if email contains at least one number
        if (!/\d/.test(email)) {
            isValid = false;
            messages.push("Email must contain at least one number.");
        }

        // Check if password contains at least one number
        if (!/\d/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one number.");
        }

        // Check if password contains at least one special character
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one special character.");
        }

        // Display all validation messages or success message
        document.querySelector('#message').innerHTML = messages.length > 0 ? messages.join("<br>") : "Password is Correct";

        return isValid;
    }

    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        verify_password();      // Call the password verification function
    });
});
