const { BaseError } = require('@errors/base.error')

const errorMiddleware = async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		let _err = {};

		if(err.isCustom) {
			_err = err;
		} else {
			_err = new BaseError();
		}

		ctx.status = _err.status;
		ctx.body = _err.message;
	}
};

module.exports = { errorMiddleware };
