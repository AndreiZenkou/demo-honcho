const readAndParseInString = async (stream) => {
	const chunks = []

	return new Promise((res, rej) => {
		stream.on('data', chunk => chunks.push(chunk))
		stream.on('error', rej)
		stream.on('end', () => {
			const string = Buffer.concat(chunks).toString('utf8');
			const pureString = string.replace(/\s/g, "").replace(/\n/g, '');

			res(pureString)
		})
	})




}

module.exports = {
	readAndParseInString
}
