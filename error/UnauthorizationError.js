const { CustomError } = require("./CustomError");
const { StatusCodes } = require("http-status-codes");

class UnauthorizationError extends CustomError {
    constructor(msg) {
        super(msg);
        this.status = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthorizationError;
