const { UnauthorizationError } = require("../error/");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizationError("Bad Request, No Token");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.data = { id, username };
        next();
    } catch (err) {
        throw new UnauthorizationError("Not Authorized to access this route");
    }
};

module.exports = auth;
