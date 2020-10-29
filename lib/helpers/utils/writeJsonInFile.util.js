

const writeJsonInFile = async (stream, data) => {
	return new Promise((res, rej) => {
		stream.on("finish", () => res(true));
		stream.on("error", (err) => { rej(err) });

		stream.write(data);
		stream.end();
	})
}

module.exports = {
	writeJsonInFile
}
