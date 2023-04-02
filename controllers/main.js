const { BadRequestError } = require("../error");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new BadRequestError("Failed, Please provide usename and password!");
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "30d" });

    res.status(StatusCodes.OK).json({ msg: "user created", token });
};

const dashboard = (req, res) => {
    const luckyNumber = Math.round(Math.random() * 100);
    res.status(StatusCodes.OK).json({
        status: "success",
        msg: `Hello ${req.data.username}`,
        secret: `Your lucky number is ${luckyNumber}`,
    });
};

module.exports = { login, dashboard };
