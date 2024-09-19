window.open = function(){
    let btn = document.querySelector('#submit-btn')
    let doc = document.querySelector('#form-control')
    let email = document.querySelector('#email')
    btn.addEventListener('click', function(){
        let isValid = true;  
        let messages = [];   

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
)}