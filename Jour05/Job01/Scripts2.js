document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('#btn');  // Connexion button

    function verify_password() {
        let email = document.querySelector("#mail").value;
        let password = document.querySelector('#pss').value;
        let isValid = true;  // Initially true, set to false if any validation fails
        let messages = [];   // Array to store multiple error messages

        if (password.length < 8) {
            isValid = false;
            messages.push("Password is too short! Must be at least 8 characters.");
        }

        if (!/\d/.test(email)) {
            isValid = false;
            messages.push("Email must contain at least one number.");
        }

        if (!/\d/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one number.");
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one special character.");
        }

        document.querySelector('#message').innerHTML = messages.length > 0 ? messages.join("<br>") : "Password is Correct";

        return isValid;
    }

    btn.addEventListener('click', function(event) {
        event.preventDefault();  
        verify_password();      
    });
});
