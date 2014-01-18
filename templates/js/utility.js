/**
* Utility: OBJECT_NAME
*/
( function( $, window, document ) {

	var OBJECT_NAME = function( a ) {

		// Class attributes can be set here
	}

	OBJECT_NAME.prototype = {

			/**
            * Utility for making ajax requests in a more easy way
            *
            * @param { object } Options for configuring the ajax request
            * @param { object } data object to be sent
            * @return { function } callback passed
            */
    		ajax: function( options, data ) {

                var result
                ,   defaults = {
                        type: 'post'
                    ,   url: aUrl
                    ,   data: data
                    ,   async: true
                    ,   success: function( data ) {
                                result = data;
                        }

                    ,   error: function ( XMLHttpRequest, textStatus, errorThrown ) {
                                console.log( "error :" + XMLHttpRequest.responseText );
                        }
                    }

                // Merge defaults and options
                options = $.extend( {}, defaults, options );

                // Do the ajax request
                $.ajax( options );

                // Return the response object
                return result;

            }


        	/**
            * Converts a cammelcased string to a underscored one
            * @return { string }
            */
        ,   cammelCaseToUnderscore: function( string ) {

                return string.replace( /([A-Z])/g, function( $1 ) {

                    return "_" + $1 . toLowerCase();
                });
            }

            /**
            * Converts hiphens to underscores
            * @return { string }
            */
        ,   hyphenToUnderscore: function( string ) {
                return string.replace( /([-])/g, function( $1 ) {

                    return "_";

                });
            }


            /**
            * Validate wether the string has a valid email format
            *
            * @param { string }
            * @param { bool }
            */
        ,   validateEmailFormat: function( string ) {

                var emailExpression =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                return emailExpression.test( string );

            }


	}

	// Global Exposition
	window.App.Helpers.OBJECT_NAME = new OBJECT_NAME();



})( this.jQuery, this, this.document );

