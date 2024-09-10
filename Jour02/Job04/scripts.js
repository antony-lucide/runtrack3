window.onload = function() {
    let textarea = document.querySelector('textarea');
    let outputDiv = document.createElement('div'); 

    document.body.appendChild(outputDiv); 

    textarea.addEventListener('input', function() {
        outputDiv.textContent = textarea.value; 
    });
}