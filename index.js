



/**
 * parses a human readable time string into the
 * specified format defaulting to seconds.
 *
 * @param {String} timeString
 * @param {String} format
 * @return {Number}
 * @api public
 */

module.exports = function parseTime (timeString, format) {
	var seconds = toSeconds(timeString);
	if (format) {
		format = format.match(/[a-z]/)[0];
		if (format === 'm') return seconds / 60;
		if (format === 'h') return seconds / 60 / 60;
	}
	return seconds;
}




/**
 * Converts a human readable time string into seconds.
 *
 * @param {String} timeString
 * @return {Number}
 * @api private
 */

function toSeconds (timeString) {
	var time = parseInt(timeString);
	var unit = timeString.match(/[a-z]/)[0];
	if (unit) {
		if (unit === 'm') return time * 60;
		if (unit === 'h') return time * 60 * 60;
	}
	return time;
}



