class DBProvider {
	constructor() {
		console.log('db provider was created')
	}

	save() {
		console.log('saved');
	}

	connect(options) {
		this.options = options;
		console.log('db was connected')
	}
}

const db = new DBProvider();

module.exports = {
	db
}
