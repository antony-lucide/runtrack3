window.onload = function() {
    let btn = document.querySelector('#btn');
    let counter = 0;

    btn.addEventListener('click', function() {
        counter++; 

        let el = document.createElement('p'); 
        el.innerHTML = counter; 

        document.body.appendChild(el); 
    });
}