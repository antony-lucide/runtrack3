window.onload = function() {
    let play = document.querySelector('#kodami');
    let corp = document.querySelector('body');

    play.addEventListener('input', function() {
        if (play.value === "upup") {
            corp.style.backgroundColor = "blue";
        }
    });
}