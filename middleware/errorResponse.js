const { CustomError } = require("../error/CustomError");
const { StatusCodes } = require("http-status-codes");

const err = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.status).json({
            status: "fail",
            message: err.message,
            error: err,
        });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: "fail",
        message: err.message,
        error: err.message,
    });
};

module.exports = err;
