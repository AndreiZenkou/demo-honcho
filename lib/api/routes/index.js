const Router = require("koa-router");

const { fileRoute } = require('./file.route')

const mainRoute = new Router().prefix('/api');

mainRoute.use(fileRoute.routes());


module.exports = {
	router: mainRoute,
};
