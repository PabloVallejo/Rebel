#!/usr/bin/env node

// main.js
( function() {

	var Rebel = require( '../lib/rebel' )
	,	args = Rebel.mapCommand( process.argv );


	/**
	* Do we have such command available
	*/
	if ( args ) {

		// Create the whole object
		if ( args[ 1 ] == "object" ) {
			return Rebel.generateObject( args );
		}

		// Run The command
		Rebel.runCommand( args );

	}

	else {
		console.log( "Usage: " );
		console.log( "rebel generate <php|js> <object|model|view|controller|handler> <name>" );
	}






}).call( this );
