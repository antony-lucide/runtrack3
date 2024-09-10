window.onload = function() {
    function bisextile(année) {

        if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }

    
    console.log(bisextile(2020)); 
    console.log(bisextile(1900)); 
    console.log(bisextile(2000)); 
    console.log(bisextile(2023));

}