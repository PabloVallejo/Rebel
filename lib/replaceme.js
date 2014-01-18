


// replaceme.js
exports.replaceme = function( text, vala, valb ) {
	
	
	function out( val ) {

		var regExp = new RegExp( val, "g" );

		return text.replace( regExp, function( $1 ) {

			return valb;
		});
	}	

	return out( vala, valb );

}