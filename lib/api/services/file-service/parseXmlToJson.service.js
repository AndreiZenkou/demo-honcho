const fs = require('fs')

const {
	parseXmlStringInJson,
	readAndParseInString,
	writeJsonInFile
} = require('@helpers/utils');
const {
    SOURCE_FILE_PATH,
	DESTINATION_FILE_PATH
} = require('@constants/common');
const { fileRepository } = require('@api/repositories')

const parseXmlToJson = async () => {
	try {
		const readStream = fs.createReadStream(SOURCE_FILE_PATH);

		const stringData = await readAndParseInString(readStream);
		const jsonData = await parseXmlStringInJson(stringData);

		const writeStream = fs.createWriteStream(DESTINATION_FILE_PATH);

		await Promise.all([
			await fileRepository.saveFile(jsonData),
			await writeJsonInFile(writeStream, jsonData), // to write it in file;
		]);
	} catch (e) {
		console.error(e)
	}
}

module.exports = {
	parseXmlToJson
}

