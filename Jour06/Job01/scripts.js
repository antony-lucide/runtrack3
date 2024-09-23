function initializeModal() {
    let $btn = $('#submit-btn'); 
    let $modal = $("#myModal");
    let $span = $(".close").first();    
    let $emailInput = $('#email'); 
    let $passwordInput = $('#password'); 
    let $content = $('.col-md-6 ul'); 

    // Show modal on specific button click
    $('.card .btn-primary').on('click', function(){
        console.log("Card Button Clicked");
        $modal.show();
    });

    // Update content on pagination link click
    $('.pagination .page-link2').on('click', function(event){
        event.preventDefault(); 
        
        // Remove 'active' class from all pagination items
        $('.pagination .page-item').removeClass('active');

        // Add 'active' class to the clicked item
        $(this).parent().addClass('active');

        // Check which link was clicked based on its text content
        switch ($(this).text().trim()) {
            case '1':
                console.log("First Page Link Clicked");
                $content.html('<li>Blade runner est cool</li>'); 
                break;
            case '2':
                console.log("Second Page Link Clicked");
                $content.html('<li>Blade runner est cool (ou pas)</li>');
                break;
            case '3':
                console.log("Third Page Link Clicked");
                $content.html('<li>Portal est cool aussi</li>');
                break;
        }
    });

    // Hide modal on close button click
    $span.on('click', function(){
        $modal.hide();
    });

    // Form submission validation
    $btn.on('click', function(event){
        event.preventDefault(); 
        console.log("Submit Button Clicked");

        let isValid = true;  
        let messages = [];   

        let email = $emailInput.val().trim();
        let password = $passwordInput.val().trim();

        if (password.length < 8) {
            isValid = false;
            messages.push("Password is too short! Must be at least 8 characters.");
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        if (!/\d/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one number.");
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            isValid = false;
            messages.push("Password must contain at least one special character.");
        }
        
        $('#message').html(messages.length > 0 ? messages.join("<br>") : "Password is Correct");

        if (isValid) {
            $modal.hide();
            alert("Form submitted successfully!");
        }

        return isValid;
    });
}

$(document).ready(initializeModal);
