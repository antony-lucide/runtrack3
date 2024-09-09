window.onload = function() {
    function estPremier(n) {
        if (n <= 1) return false;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    function sommenombrespremiers(a, b) {
        if (estPremier(a) && estPremier(b)) {
            return a + b;
        } else {
            return null; 
        }
    }


    console.log(sommenombrespremiers(3, 5));   
    console.log(sommenombrespremiers(4, 9));
}