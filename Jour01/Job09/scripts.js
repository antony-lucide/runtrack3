window.onload = function() {
    function tri(table, order) {
        if (order === "asc") {
            table.sort((a, b) => a - b);
        } else if (order === "desc") {
            table.sort((a, b) => b - a); 
        } else {
            console.log('wrong syntax')
        }
        return table;
    }

   
    let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    console.log(tri(numbers, "asc"));  
    console.log(tri(numbers, "desc")); 
}