document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');
    let btn = document.querySelector('#btn');

    function verify_password() {
        let email = document.querySelector("#mail").value;
        let password = document.querySelector('#pss').value;
        let isValid = false;
        let message = "";

        // Check if password is at least 8 characters long
        if (password.length >= 8) {
            isValid = true;
        } else {
            message = "Password is too short! Must be at least 8 characters.";
        }

        // Check if email contains at least one number
        if (!/\d/.test(email)) {
            isValid = false;
            message = "Email must contain at least one number.";
        }

        // Check if password contains at least one number
        if (!/\d/.test(password)) {
            isValid = false;
            message = "Password must contain at least one number.";
        }

        // Display the message in the HTML
        document.querySelector('#message').innerHTML = message ? message : "Password is Correct";

        return isValid;
    }

    // Add event listener for the button
    btn.addEventListener('click', async function(event) {
        event.preventDefault();
        await verify_password();
    });
});
