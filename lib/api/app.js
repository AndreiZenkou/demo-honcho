const Koa = require("koa");

const { middlewares } = require("@middlewares");
const { serverConfig } = require("@constants/configs");
const { db } = require("@api/data-access/db");

const { router } = require("./routes");

class App {
	constructor() {
		this.client = new Koa();
		this.db = null;
	}

	connectDb() {
		this.db = db.connect();
	}

	connectMiddlewares() {
		this.client.use(middlewares.bodyParser());
		this.client.use(middlewares.authMiddleware);
	}

	connectErrorHandlers() {
		this.client.use(middlewares.errorMiddleware);
	}

	connectRoutes() {
		this.client.use(router.routes());
	}

	listen() {
		this.client.listen(serverConfig.port, (err) => {
			if (err) {
				console.log(`Sever error. Error ${err}`);
			} else {
				console.log(`Sever has started. Port: ${serverConfig.port}`);
			}
		});
	}
}

module.exports = {
	App
};
