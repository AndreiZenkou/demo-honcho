const Router = require("koa-router");

const { fileController } = require('@api/controllers')

const fileRoute = new Router().prefix("/file");


// get for easy request from browser
fileRoute.get("/xml-to-json", fileController.parseXmlToJson);
// fileRoute.get("/xml-to-js", fileController.parseXmlToJson);
// fileRoute.get("/xml-to-csv", fileController.parseXmlToJson);

module.exports = {
	fileRoute
};
