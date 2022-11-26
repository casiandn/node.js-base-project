const express = require("express");
const app = express();
//env
require('dotenv').config()
// files and port
app.engine('html', require('ejs').renderFile);
app.set("port", process.env.PORT || 3000)
app.set('views', './front/views');
app.set('view engine', 'html');

// routers
const mainRouter = require("./routes/main-router");
const invalidRoute = require("./routes/invalidRoute");

app.use(mainRouter);

app.use(invalidRoute);

module.exports = app;