$(document).ready(function() {
    let form = document.querySelector('#myForm')
    let btn = document.querySelector('#btn')

    // Verify password function
    function verify_password() {
        let email = document.querySelector("#email").value
        let password = document.querySelector('#pss').value
        let isValid = false;

        if (password.length >= 8) {
            isValid = true;
            document.querySelector('#message').innerHTML = "Password is Correct"
        } else {
            document.querySelector('#message').innerHTML = "Password is Incorrect"
        }

        return isValid
    }

    // Add event listener for button click
    btn.addEventListener('click', async function(event) {
        event.preventDefault() 
        await verify_password()
    })
})
