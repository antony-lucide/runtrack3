function initializeModal() {
    let $btn = $('#submit-btn'); 
    let $btn2 = $(".btn-primary"); 
    let $modal = $("#myModal");
    let $span = $(".close").first();    
    let $emailInput = $('#email'); 
    let $passwordInput = $('#password'); 

    $btn2.on('click', function(){
        console.log("Second Button Clicked");
        $modal.show();
    });

    $span.on('click', function(){
        $modal.hide();
    });

    $btn.on('click', function(event){
        event.preventDefault(); 
        console.log("First Button Clicked");

        let isValid = true;  
        let messages = [];   

        // Get the values of email and password from the inputs
        let email = $emailInput.val().trim();
        let password = $passwordInput.val().trim();

        // Validate password length
        if (password.length < 8) {
            isValid = false;
            messages.push("Password is too short! Must be at least 8 characters.");
        }

        // Validate that email contains an '@' and a domain
        if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Validate that password contains at least one number
        if (!/\d/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one number.");
        }

        // Validate that password contains at least one special character
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one special character.");
        }
        
        // Display the validation messages or success message
        $('#message').html(messages.length > 0 ? messages.join("<br>") : "Password is Correct");

        // If all validation passed, close the modal and show a success message
        if (isValid) {
            $modal.hide();
            alert("Form submitted successfully!");
        }

        return isValid;
    });
}

// Call the function on window load
$(document).ready(initializeModal);
