const { parseXmlStringInJson } = require('./parseXmlStringInJson.util');
const { readAndParseInString } = require('./readAndParseInString.util');
const { writeJsonInFile } = require('./writeJsonInFile.util');

module.exports = {
	readAndParseInString,
	parseXmlStringInJson,
	writeJsonInFile
}
