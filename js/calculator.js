// Calculator

(function($) {

    // Strict mode
    "use strict";

	var highstreetSize = {
	    '6': ['26DD', '26E', '26F', '26FF', '26G', '26GG', '26H',  '26J', '28DD', '28E', '28F', '28FF', '28G', '28GG', '28H', '28J', '30DD', '30E', '30F', '30FF', '30G', '30GG', '30H', '30J'],
	    '8': ['26DD', '26E', '26F', '26FF', '26G', '26GG', '26H', '26J', '28DD', '28E', '28F', '28FF', '28G', '28GG', '28H', '28J', '30DD', '30E', '30F', '30FF', '30G', '30GG', '30H', '30J'],
	    '10': ['28DD', '28E', '28F', '28FF', '28G', '28GG', '28H', '28J', '30DD', '30E', '30F', '30FF', '30G', '30GG', '30H', '30J', '32DD', '32E', '32F', '32FF', '32G', '32GG', '32H', '32J', '34DD', '34E', '34F', '34FF', '34G', '34GG', '34H', '34J'],
	    '12': ['30DD', '30E', '30F', '30FF', '30G', '30GG', '30H', '30J', '32DD', '32E', '32F', '32FF', '32G', '32GG', '32H', '32J', '34DD', '34E', '34F', '34FF', '34G', '34GG', '34H', '34J'],
	    '14': ['32DD', '32E', '32F', '32FF', '32G', '32GG', '32H', '32J', '34DD', '34E', '34F', '34FF', '34G', '34GG', '34H', '34J', '36DD', '36E', '36F', '36FF', '36G', '36GG', '36H', '36J'],
	    '16': ['34DD', '34E', '34F', '34FF', '34G', '34GG', '34H', '34J', '36DD', '36E', '36F', '36FF', '36G', '36GG', '36H', '36J', '38DD', '38E', '38F', '38FF', '38G', '38GG', '38H', '38J']
	}

	var size6 = {
		type1 : ['26DD', '26E', '26F', '28DD', '28E', '28F', '30DD', '30E'],
		type2 : ['26FF', '26G', '26GG', '28FF', '28G', '30F', '30FF'],
		type3 : ['26H', '26J', '28GG', '28H', '28J', '30G', '30GG', '30H', '30J']
	}

	var size8 = {
		type1 : ['26DD', '26E', '26F', '28DD', '28E', '28F', '30DD', '30E'],
		type2 : ['26FF', '26G', '26GG', '28FF', '28G', '30F', '30FF'],
		type3 : ['26H', '26J', '28GG', '28H', '28J', '30G', '30GG', '30H', '30J']
	}

	var size10 = {
		type1 : ['28DD', '28E', '28F', '28FF', '30DD', '30E', '30F', '32DD', '32E', '32F', '34DD', '34E'],
		type2 : ['28G', '28GG', '30FF', '30G', '30GG', '32FF', '32G', '32GG', '34F', '34FF', '34G'],
		type3 : ['28H', '28J', '30H', '30J', '32H', '32J', '34GG', '34H', '34J']
	}

	var size12 = {
		type1 : ['30DD', '30E', '30F', '30FF', '32DD', '32E', '32F', '34DD', '34E'],
		type2 : ['30G', '30GG', '32FF', '32G', '34F', '34FF', '34G'],
		type3 : ['30H', '30J', '32GG', '32H', '32J', '34GG', '34H', '34J']
	}

	var size14 = {
		type1 : ['32DD', '32E', '32F', '32FF', '34DD', '34E', '34F', '36DD', '36E'],
		type2 : ['32G', '32GG', '34FF', '34G', '36F', '36FF', '36G'],
		type3 : ['32H', '32J', '34GG', '34H', '34J', '36GG', '36H', '36J']
	}

	var size16 = {
		type1 : ['34DD', '34E', '34F', '34FF', '36DD', '36E', '36F', '38DD', '38E'],
		type2 : ['34G', '34GG', '36FF', '36G', '38F', '38FF', '38G'],
		type3 : ['34H', '34J', '36GG', '36H', '36J', '38GG', '38H', '38J']
	}

	var highstreetSizeOptions = $('[data-role="high-street-size"]');
	var braSizeOptions = $('[data-role="bra-size"]');
	var answer = $('[data-role="answer"]');
	var calculate = $('[data-role="calculate"]');
	var selectedHighstreetSize = $('[data-role="high-street-size"] :selected').val();
	var shapeOptions = "sizes";

    // Begin jQuery plugin
    $.fn.calculator = function () {

        return this.each(function() {

        	// As default display high street size 6 bra size options
        	if ( selectedHighstreetSize == 6 ) {

	 			$.each(highstreetSize['6'], function(value, index) {
	 				
	 				braSizeOptions.append($('<option value="' + index + '">' + index + '</option>'));

	 			});
	 		}

        	// When a new high street size is selected
        	highstreetSizeOptions.change(function () {

				var selectedHighstreetSize = $('[data-role="high-street-size"] :selected').val();

				// Find associated bra sizes
       			var availableBraSizes = highstreetSize[selectedHighstreetSize];

       			// Clear old bra sizes
				braSizeOptions.empty();
       			
				// Display new bra sizes
	 			$.each(availableBraSizes, function(value, index) {
	 				
	 				braSizeOptions.append($('<option value="' + index + '">' + index + '</option>'));

	 			});
			});

        	// When calculate is clicked
			calculate.click( function(e) {

				e.preventDefault();

				var selectedHighstreetSize = $('[data-role="high-street-size"] :selected').val();
				var selectedBraSize = $('[data-role="bra-size"] :selected').val();

				var sizes = {
					'6' : size6,
					'8' : size8,
					'10' : size10,
					'12' : size12,
					'14' : size14,
					'16' : size16
				}

				var shapes = {
					type1 : 'Fit',
					type2 : 'Foxy',
					type3 : 'Fab'
				}

				// Assign high street variable name using size selection ie. '6' = 'size6'
       			var shapeOptions = sizes[selectedHighstreetSize];

			    for (var key in shapeOptions) {
				   
				   	// Use high street and bra size selectiosns to determine correct shape array ie. 'size6' && '26D' == 'type1'
				   	var obj = shapeOptions[key];

				   	// Locate selected bra size in the array
				   	for (var index in obj) {

				   		if ( obj[index] == selectedBraSize ) {

				   			// Assign shape variable name ie. 'type1' = 'Fit'
				   			var shape = shapes[key];

				   			// Print high street size and shape ie. 'You are a size 6 FIT'
				    		answer.val('You are a size ' + selectedHighstreetSize + ' ' + shape);

				    		// Add shape class to answer input
				    		answer.removeClass().addClass(shape);

				    		// Add close button
				    		$('[data-role="close"]').remove();
				    		$('[data-role="calculator"] fieldset').append('<button data-role="close" class="button secondary mini" href="">Continue shopping</button>');
				        }
				    }
				}
			});
        });
    };

})(jQuery);