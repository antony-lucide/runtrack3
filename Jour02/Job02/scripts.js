window.onload = function() {
    let btn = document.querySelector('#press');

    function Citation() {
        let content = document.querySelector('#contenue');
        document.body.innerHTML += `<p>${content.textContent}</p>`;
    }

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        Citation();
    });
}
