const bodyParser = require('koa-bodyparser');

const { authMiddleware } = require('./auth.middleware')
const { errorMiddleware } = require('./error.middleware')



const middlewares = {
	bodyParser,
	authMiddleware,
	errorMiddleware
}


module.exports = {
	middlewares
}
