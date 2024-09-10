window.onload = function() {
    let footer = document.querySelector('footer');
    
    if (footer) {
        window.addEventListener('scroll', function() {
            let documentHeight = document.documentElement.scrollHeight;
            let viewportHeight = window.innerHeight;
            let scrollPosition = window.scrollY;

            let scrollPercentage = (scrollPosition / (documentHeight - viewportHeight)) * 100;

            footer.style.border = `${Math.round(scrollPercentage)}px solid red`;

            console.log(Math.round(scrollPercentage) + '%');
        });
    } else {
        console.error('Footer element not found!');
    }
}
