const {parseString} = require('xml2js');

const parseXmlStringInJson = async (xmlString) => {
	return new Promise(res => {
		parseString(xmlString, function (err, result) {
			const jsonData = JSON.stringify(result, null, 2);

			res(jsonData);
		});
	})
}

module.exports = {
	parseXmlStringInJson
}
