const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config.js");
const indexItemRoutes = require("./routes/items/index.js"); 
const indexUserRoutes = require('./routes/user/index.js');
const indexTicketRoutes = require('./routes/ticket/index.js');

require ("./routes/user/middleware.js")
const app = express();

// Settings
app.set("port", config.PORT);



// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use("/", indexItemRoutes);
app.use('/', indexUserRoutes);
app.use('/', indexTicketRoutes);

module.exports = app;