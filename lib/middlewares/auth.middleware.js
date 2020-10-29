const authMiddleware = async (ctx, next) => {
	await next();
};

module.exports = {
	authMiddleware
}
