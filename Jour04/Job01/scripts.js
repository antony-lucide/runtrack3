$(document).ready(function(){
    async function GetTXT(){
        try {
            const response = await fetch('Mot.txt');
            if (!response.ok) {
                throw new Error("Problème - code d'état HTTP : " + response.status);
            }
            const data = await response.text(); // Use text() instead of json() for plain text
            return data; // Return the text data
        } catch (e) {
            console.error(e.message); // Log any errors
        }
    }

    // Button click event to fetch and log data
    $("#btn").click(async function(){
        const result = await GetTXT(); // Await the data from GetTXT
        if (result) {
            console.log(result); // Log the plain text data
        }
    });
});
