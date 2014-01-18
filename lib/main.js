/**
 * Rebel file creation
 */
( function() {

	// Declare vars
	var fs, reptxt, filedata;

	// Require files
	fs = require( 'fs' );
	reptxt = require( './replaceme' );

	// Reading file test.txt
	fs.readFile( process.argv[ 2 ], 'utf8', function( err, data ) {

		if ( err ) {
			console.error("Could not open file: %s", err);
			process.exit(  1 );
		}

		// Calling replacement function
		filedata = reptxt.replaceme( data, process.argv[ 3 ], process.argv[ 4 ] );

		// Writting replacememt text into a new file
		fs.writeFile( "../out.txt", filedata, function( err ) {

			if( err ) {
                console.error("Error saving file %s", err);
                process.exit(1);
            }
            console.log('out.txt file saved!');

		});

	});

}).call( this );
