window.onload = function() {
    let drag = $("img");

    let btn = $('#btn');

    let Win = false
    $(drag).draggable();

    $(btn).bind('click', function(){
        Math.random(Math.floor(drag))
    })


    $(drag).droppable({
        accept: "img",
        drop: function(event, ui) {
            let droppedItem = ui.helper.clone(); // Clone the dragged item
            droppedItem.draggable({ containment: "#target" }); // Make the clone draggable within the target container
            $(this).append(droppedItem); // Append the cloned item to the target container
            ui.helper.remove(); // Remove the original image from the start container

            checkOrder(); // Check if the images are in the correct order
        }
    });


    function checkOrder() {
        let correctOrder = ["id1", "id2", "id3", "id4", "id5", "id6"];
        let currentOrder = [];

        
        if(correctOrder.length() == currentOrder.length){
            Win = true
            console.log("You win !")
        } else {
            Win = false
            console.log("still not in order")
        }

    }
    console.log('test');
}
