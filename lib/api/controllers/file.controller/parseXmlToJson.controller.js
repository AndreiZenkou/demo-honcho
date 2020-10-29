const fs = require('fs')

const { fileService } = require('@api/services');
const { DESTINATION_FILE_PATH } = require('@constants/common')

const parseXmlToJson = async (ctx, next) => {
	try {
		await fileService.parseXmlToJson();

		const src = fs.createReadStream(DESTINATION_FILE_PATH);
		ctx.response.set("content-type", "application/json");
		ctx.body = src;
	} catch (err) {
		throw err
	}
};

module.exports = {
	parseXmlToJson
}
