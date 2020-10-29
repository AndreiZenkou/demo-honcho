const dbConfig = {
	user: process.env.DB_USER || "test",
	password: process.env.DB_PASSWORD || "12345",
};

module.exports = { dbConfig };
