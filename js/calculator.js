// Calculator

(function($) {

    // Strict mode
    "use strict";

	var highstreetSize = {
	    '6': [ '26DD', '26E', '26F', '26FF', '26G', '26GG', '26H', '28D', '28DD', '28E', '28F', '28FF', '28G', '30D', '30DD', '30E', '30F', '30G', '32D', '32DD' ],
	    '8': [ '26FF', '26G', '26GG', '26H', '26HH', '26J', '28DD', '28E', '28F', '28FF', '28G', '28GG', '28H', '30D', '30DD', '30E', '30F', '30FF', '30G', '32D', '32DD', '32E', '32F', '32G', '34D', '34DD' ],
	    '10': [ '26GG', '26H', '26HH', '26J', '28FF', '28G', '28GG', '28H', '28HH', '28J', '30DD', '30E', '30F', '30FF', '30G', '30GG', '30H', '32D', '32DD', '32E', '32F', '32FF', '32G', '34D', '34DD', '34E', '34F', '34G', '36D', '36DD' ],
	    '12': [ '26HH', '26J', '28GG', '28H', '28HH', '28J', '30FF', '30G', '30GG', '30H', '30HH', '30J', '32DD', '32E', '32F', '32FF', '32G', '32GG', '32H', '34D', '34DD', '34E', '34F', '34FF', '34G', '36D', '36DD', '36E', '36F', '36G', '38D', '38DD' ],
	    '14': [ '28HH', '28J', '30GG', '30H', '30HH', '30J', '32FF', '32G', '32GG', '32H', '34DD', '34E', '34F', '34FF', '34G', '34GG', '34H', '36D', '36DD', '36E', '36F', '36FF', '36G', '38D', '38DD', '38E', '38F', '38G' ],
	    '16': [ '30HH', '30J', '32GG', '32H', '34FF', '34G', '34GG', '34H', '36DD', '36E', '36F', '36FF', '36G', '36GG', '36H', '38E', '38F', '38FF', '38G', '38D', '38DD' ]
	}

	var size6 = {
		type1 : [ '26E', '26F', '26DD', '28D', '28DD' ],
		type2 : [ '26FF', '26G', '28E', '28F', '30D', '30DD' ],
		type3 : [ '26GG', '26H', '28FF', '28G', '30E', '30F', '30G', '32D', '32DD' ]
	}

	var size8 = {
		type1 : [ '26FF', '26G', '28E', '28F', '28DD', '30D', '30DD' ],
		type2 : [ '26GG', '26H', '28FF', '28G', '30E', '30F', '32D', '32DD' ],
		type3 : [ '26HH', '26J', '28GG', '28H', '30FF', '30G', '32E', '32F', '32G', '34D', '34DD' ]
	}

	var size10 = {
		type1 : [ '26GG', '26H', '28FF', '28G', '30E', '30F', '30DD', '32D', '32DD' ],
		type2 : [ '26HH', '26J', '28GG', '28H', '30FF', '30G', '32E', '32F', '34D', '34DD' ],
		type3 : [ '28HH', '28J', '30GG', '30H', '32FF', '32G', '34E', '34F', '34G', '36D', '36DD' ]
	}

	var size12 = {
		type1 : [ '26HH', '26J', '28GG', '28H', '30FF', '30G', '32E', '32F', '32DD', '34D', '34DD' ],
		type2 : [ '28HH', '28J', '30GG', '30H', '32FF', '32G', '34E', '34F', '36D', '36DD' ],
		type3 : [ '30HH', '30J', '32GG', '32H', '34FF', '34G', '36E', '36F', '36G', '38D', '38DD' ]
	}

	var size14 = {
		type1 : [ '28HH', '28J', '30GG', '30H', '32FF', '32G', '34E', '34F', '34DD', '36D', '36DD' ],
		type2 : [ '30HH', '30J', '32GG', '32H', '34FF', '34G', '36E', '36F', '38D', '38DD' ],
		type3 : [ '34GG', '34H', '36FF', '36G', '38E', '38F', '38G' ]
	}

	var size16 = {
		type1 : [ '30HH', '30J', '32GG', '32H', '34FF', '34G', '36E', '36F', '36DD', '38D', '38DD' ],
		type2 : [ '34GG', '34H', '36FF', '36G', '38E', '38F' ],
		type3 : [ '36GG', '36H', '38FF', '38G' ]
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