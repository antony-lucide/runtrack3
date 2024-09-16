$(document).ready(function(){

    async function GetTXT(){
        try {
            const response = await fetch('pokemon.json');
            if (!response.ok) {
                throw new Error("Problème - code d'état HTTP : " + response.status);
            }
            const data = await response.json(); 
            return data;
        } catch (e) {
            console.error(e.message); 
        }
    }

    $("#btn").click(async function(){
        const result = await GetTXT(); 
        if (result) {
            const inputName = $("#name").val().toLowerCase();
            const matchedPokemon = result.find(pokemon => {
                // Check if the input name matches any of the names in different languages
                return Object.values(pokemon.name).some(name => name.toLowerCase() === inputName);
            });

            if (matchedPokemon) {
                console.log("Found:", matchedPokemon);
            } else {
                console.log("No match found");
            }
        }
    });

});
