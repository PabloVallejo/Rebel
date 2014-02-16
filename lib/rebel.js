/**
* Rebel Object
*/
var Rebel = function() {

};

Rebel.prototype = {

		/**
		* Rebel Methods
		*/
		methods: {
				'generateJSObject': "generate js object"
			,	'generateJSHandler': "generate js handler"
			,	'generateJSModel': "generate js model"
			,	'generateJSView': "generate js view"
			,	'generateJSController': "generate js controller"
			,	'generateJSUtility': "generate js utility"

			// PHP

			,	'generatePHPObject': "generate php object"
			,	'generatePHPHelper': "generate php helper"
			,	'generatePHPModel': "generate php model"
			,	'generatePHPView': "generate php view"
			,	'generatePHPController': "generate php controller"

		}

		// JavaScript Modules
	,	jsModules: [ "model", "view", "controller", "handler" ]

		// PHP Modules
	,	phpModules: [ "model", "view", "controller", "helper" ]


}


/**
* Maps the command line arguments to
* one Rebel Function
*
* @params { array } process.argv array
* @return { mixed } false on unknown or invalid command, appropriate function otherwise
*/
exports.mapCommand = function( args ) {

	// Remove 0 and 1 arguments
	args.shift();
	args.shift();

	var R = new Rebel
	,	methods = R.methods;

	/**
	* Test the command
	*/
	if ( args.length = 4 ) {

		// Store the last param and remove it from the array
		var name = args[ 3 ];
		args.pop();

		var	i = 0
		,	length = args.length
		,	errors = []
		,	command = args.join( " " );


		// Match the given command with the available commands
		for ( var key in methods ) {

			if ( methods[ key ] === command ) {

				// Is the command available ?
				args.shift();       // Remove generate
				args.push( name );  // Add name again

				// Pass the params to be executed
				return args;

			}

		}

	}

 	return false;

}


/**
* Executes a command passed, based on the
* three parameters passed
*/
exports.runCommand = function( args ) {

	var name = args[ 2 ]
	,	type = args[ 1 ]
	,	lang = args[ 0 ]
	,	fs = require( 'fs' )
	,	replaceme = require( './replaceme' )
	,	path = require( 'path' )
	,	template
	,	address =  '../templates/' + lang + '/' + type + '.' + lang
	,	templatesDir = 	path.join( __dirname, address )
	,	namePHolder = "OBJECT_NAME"
	,	fileDestination = ( lang == "php" ) ? "./application/" : "./assets/js/"
	,	fileName = name.toLowerCase() + "." + lang
	,	filePath = fileDestination + type + 's/'

	// Handle different OS directory separators 
	,	dirSeparator = process.platform == 'win32' ? '\\' : '/';

	
	// Recursive Folder Creation
	var normalized  = path.normalize( filePath )
	,	resources = normalized.split( dirSeparator )
	,	i = 0
	,	length
	,	pathSoFar = "./";

	resources.pop();
	length = resources.length;

	for ( ; i < length; i++ ) {

		var prefix = './'
		,	sufix = '/'
		,	path = pathSoFar += resources[ i ] + "/";

		if ( ! fs.existsSync( path ) ) {
			fs.mkdirSync( path );
		}

	}


	// Read the template
	fs.readFile( templatesDir, 'utf8', function( err, data ) {

		if ( err ) {
			console.error( err )
			process.exit( 1 );
		}

		// Replace mathces
		template = replaceme.replaceme( data, namePHolder, name );


		// Write to the file
		fs.writeFile( filePath + fileName, template,  function( err ) {

			if ( err ) {
				console.error( "Error saving the file %s", err );
				process.exit( 1 );
			}

			console.log( "%s %s successfully generated!", name, type );

		});

	});

	return;

}

/**
* Generate whole object
*/
exports.generateObject = function( args ) {

	var R = new Rebel
	,	modules
	,	i = 0
	,	length
	,	params = args;

	if ( args[ 0 ] == "php" ) {
		modules = R.phpModules;
	}

	else if ( args[ 0 ] == "js" ) {
		modules = R.jsModules;
	}


	// Run Every command
	length = modules.length;
	for ( ; i < length; i++ ) {

		params[ 1 ] = modules[ i ];
		exports.runCommand( params );
	}

}





