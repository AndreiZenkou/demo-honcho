const { CODE_STATUSES } = require('@constants/code-statuses');
const { MESSAGES } = require('@constants/messages');

class BaseError extends Error {
	status = CODE_STATUSES.SERVER_ERROR;
	message = MESSAGES.INTERNAL_ERROR;
	isCustom = true;

	constructor() {
		super();
	}
}

module.exports = {
	BaseError
};
