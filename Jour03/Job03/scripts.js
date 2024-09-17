$(document).ready(function() {
    let tiles = $(".tile");
    let gridSize = 3; // Taille de la grille (3x3)

    function isAdjacent(pos1, pos2) {
        let row1 = Math.floor(pos1 / gridSize);
        let col1 = pos1 % gridSize;
        let row2 = Math.floor(pos2 / gridSize);
        let col2 = pos2 % gridSize;
        return (Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2);
    }

    function moveTile(tile) {
        let emptyTile = $(".tile.empty");
        let tilePos = parseInt(tile.data("position"));
        let emptyPos = parseInt(emptyTile.data("position"));
        
        if (isAdjacent(tilePos, emptyPos)) {
            emptyTile.data("position", tilePos);
            tile.data("position", emptyPos);

            let temp = tile.css("background-image");
            tile.css("background-image", emptyTile.css("background-image"));
            emptyTile.css("background-image", temp);
            
            checkWin(); 
        }
    }

    function checkWin() {
        let correctOrder = Array.from(Array(9).keys()); // Tableau de 0 à 8
        let currentOrder = [];

        tiles.each(function() {
            currentOrder.push(parseInt($(this).data("position")));
        });

        if (JSON.stringify(correctOrder) === JSON.stringify(correctOrder.sort((a, b) => a - b))) {
            $("#message").text("Vous avez gagné !").css("color", "green");
            $("#restartButton").show();
        }
    }

    function shuffleTiles() {
        let positions = Array.from(Array(9).keys());
        positions.sort(() => Math.random() - 0.5); // Mélange les positions

        tiles.each(function(index) {
            $(this).data("position", positions[index]);
            $(this).css("background-image", `url(${positions[index] + 1}.PNG)`);
        });

        // Assigner la dernière position comme vide
        $(".tile").last().addClass("empty").css("background-image", "");
        $("#message").text("");
        $("#restartButton").hide();
    }

    tiles.click(function() {
        if (!$(this).hasClass("empty")) {
            moveTile($(this));
        }
    });

    $("#restartButton").click(function() {
        shuffleTiles();
    });

    shuffleTiles();
});