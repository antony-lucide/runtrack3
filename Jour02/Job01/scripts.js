window.onload = function() {
    let btn = document.querySelector('#press');

    function Citation() {
        let content = document.querySelector('#contenue');
        console.log(content.textContent); 
    }

    btn.addEventListener('click', (event) => {
        event.preventDefault(); 
        Citation(); 
    });
}
