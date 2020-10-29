const { CODE_STATUSES } = require('@constants/code-statuses');
const { MESSAGES } = require('@constants/messages');

const { BaseError } = require('./base.error');

class DbError extends BaseError {
	status = CODE_STATUSES.BAD_GATEWAY;
	message = MESSAGES.BAD_GATEWAY

	constructor() {
		super();
	}
}

module.exports = {
	DbError
};
