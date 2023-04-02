class CustomError extends Error {
    constructor(msg) {
        super(msg);
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomError(msg, statusCode);
};

module.exports = { createCustomError, CustomError };
