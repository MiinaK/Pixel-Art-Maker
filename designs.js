function makeGrid() {
	const height = $('#input_height').val();
	const width = $('#input_width').val();
	const grid = $('#pixel_canvas');

	grid.children().remove();

	// Function to check if height and width input values are between 1-100.
	function validateNum(input){
		if (input >= 1 && input <= 10){
			return true;
		} else {
			window.alert("Value must be between 1 and 100.");
			return false;
		}
	}

	// If clause that calls the validateNum function.
	if (validateNum(height) == true && validateNum(width) == true){

		// For clause to draw the grid
		for (let rows = 0; rows < width; rows++){
		grid.append('<tr></tr>');
			for (let columns = 0; columns < height; columns++){
			grid.children().last().append('<td></td>');
			};
		};

		// Event listener to color the grid.
		grid.on('click', 'td', function(){
			const color = $('#colorPicker').val();
			$(this).attr('bgcolor', color);
		});

	} else {
		window.alert("Value must be between 1 and 100.");
	}

	

}

// When size is submitted by the user, call makeGrid()
$('#submit').click(function(evt){
	evt.preventDefault();
	makeGrid();
});

// When clear button is clicked, call makeGrid()
$('#clear').click(function(evt){
	makeGrid();
})