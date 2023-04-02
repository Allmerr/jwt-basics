require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const mainRoute = require("./routes/main");

const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorResponse");

app.use(express.static("./public"));
app.use(express.json());

// route
app.use("/api/v1", mainRoute);

// middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        app.listen(port, console.log(`Listen to http://localhost:${port}`));
    } catch (err) {
        console.log(err);
    }
};

start();
