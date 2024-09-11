window.onload = function(){
    let btn = document.querySelector('#play');
    let message = $("#message");

    $(message).hide(); 

    $(btn).on('click', function() {
        $(message).show(); 
        console.log("yolo");
    });
}
