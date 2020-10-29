const {App} = require("./api/app");

class Server {
	constructor() {
		this.app = new App();
	}

	start() {
		this.app.connectErrorHandlers();
		this.app.connectDb();
		this.app.connectMiddlewares();
		this.app.connectRoutes();
		this.app.listen();
	}
}

module.exports = {
	Server
};
