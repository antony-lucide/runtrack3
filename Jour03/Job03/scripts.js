$(document).ready(function() {
    $("#start").sortable({
        update: function(event, ui) {
            checkOrder(); 
        }
    });

    // Shuffle images when button is clicked
    $("#btn").click(function() {
        let container = $("#start");
        let images = container.children();
        images.sort(function() {
            return Math.random() - 0.5; 
        });
        container.html(images); 
    });

    function checkOrder() {
        let correctOrder = ["id1", "id2", "id3", "id4", "id5", "id6"];
        let currentOrder = [];


        $("#start img").each(function() {
            currentOrder.push($(this).attr("id"));
        });

        if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) {
            $("#Result").text("You Win!").css("color","green")
            console.log("You win")
        } else {
            $("#Result").text("You Loose").css("color", "red")
            console.log("You loose!");
        }
    }
});
