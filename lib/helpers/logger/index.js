const fs = require('fs');

const { LOG_FILE_PATH } = require('@constants/common')

const loggerHandler = (data) => {

	console.log(data)
	// fs.open(LOG_FILE_PATH, function( e, id ) {
	// 	fs.write(id, data, null, 'utf8', function() {
	// 		fs.close(id, function(){});
	// 	});
	// });
}

module.exports = {
	loggerHandler
}
