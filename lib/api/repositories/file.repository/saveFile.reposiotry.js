const { db } = require('@api/data-access/db');
const { DbError } = require('@errors/db.error')

const saveFile = async (data) => {
	try {
		await db.save(data);
	} catch (e) {
		throw new DbError();
	}
}

module.exports = {
	saveFile
}
