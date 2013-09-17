// Calculator

(function($) {

    // Strict mode
    "use strict";

	var highstreetSize = {
	    '6': ['26DD', '26E', '26F', '26FF', '26G', '26GG', '26H', '28DD', '28E', '28F', '28FF', '28G', '28GG', '30D', '30DD', '30E', '30F', '30FF', '30G'],
	    '8': ['26DD', '26E', '26F', '26FF', '26G', '26GG', '26H', '26HH', '26J', '28DD', '28E', '28F', '28FF', '28G', '28GG', '28H', '28HH', '30DD', '30E', '30F', '30FF', '30G', '30GG', '32DD', '32E', '32F', '32FF'],
	    '10': ['28F', '28FF', '28G', '28GG', '28H', '28HH', '28J', '28JJ', '30DD', '30E', '30F', '30FF', '30G', '30GG', '30H', '30HH', '32DD', '32E', '32F', '32FF', '32G', '32GG', '34DD', '34E', '34F', '34FF'],
	    '12': ['28GG', '28H', '28HH', '28J', '28JJ', '28K', '30FF', '30G', '30GG', '30H', '30HH', '30JJ', '30K', '32DD', '32E', '32F', '32FF', '32G', '32GG', '32H', '34DD', '34E', '34F', '34FF', '34G', '34GG', '36DD', '36E', '36F'],
	    '14': ['32DD', '32E', '32FF', '32G', '32GG', '32H', '32HH', '32J', '34DD', '34E', '34F', '34G', '34GG', '34H', '34HH', '36DD', '36E', '36F', '36FF', '36G', '36GG', '38DD', '38E', '38F'],
	    '16': ['34DD', '34E', '34F', '34FF', '34G', '34GG', '34H', '34HH', '34J', '36DD', '36E', '36F', '36FF', '36G', '36GG', '36H', '38DD', '38E', '38F', '38FF', '38G']
	}

	var size6 = {
		type1 : ['26DD', '26E', '26F', '28DD', '28E'],
		type2 : ['26FF', '26G', '28F', '28FF', '30D', '30DD'],
		type3 : ['26GG', '26H', '28G', '28GG', '30E', '30F', '30FF', '30G']
	}

	var size8 = {
		type1 : ['26DD', '26E', '26F', '26FF', '26G', '28DD', '28E', '28F', '28FF', '30DD', '30E'],
		type2 : ['26GG', '26H', '28G', '28GG', '30F', '30FF', '32DD', '32E'],
		type3 : ['26HH', '26J', '28H', '28HH', '30G', '30GG', '32F', '32FF']
	}

	var size10 = {
		type1 : ['28F', '28FF', '28G', '28GG', '30DD', '30E', '30F', '30FF', '32DD', '32E', '34DD'],
		type2 : ['28H', '28HH', '30G', '30GG', '32F', '32FF', '34E', '34F'],
		type3 : ['28J', '28JJ', '30H', '30HH', '32G', '32GG', '34FF']
	}

	var size12 = {
		type1 : ['28GG', '28H', '28HH', '30FF', '30G', '30GG', '32DD', '32E', '32F', '34DD', '34E', '36DD'],
		type2 : ['28J', '28JJ', '30H', '30HH', '32FF', '32G', '34F', '34FF', '36E'],
		type3 : ['28K', '30JJ', '30K', '32GG', '32H', '34G', '34GG', '36F']
	}

	var size14 = {
		type1 : ['32DD', '32E', '32FF', '32G', '34DD', '34E', '34F', '36DD', '36E'],
		type2 : ['32GG', '32H', '34G', '34GG', '36F', '36FF', '38DD'],
		type3 : ['32HH', '32J', '34H', '34HH', '36G', '36GG', '38E', '38F']
	}

	var size16 = {
		type1 : ['34DD', '34E', '34F', '34FF', '34G', '36DD', '36E', '36F', '38DD'],
		type2 : ['34GG', '34H', '36FF', '36G', '38E', '38F'],
		type3 : ['34HH', '34J', '36GG', '36H', '38FF', '38G']
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

				   			// Return high street size and shape ie. 'You are a size 6 FIT'
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