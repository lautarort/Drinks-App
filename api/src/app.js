const express = require ("express");
const morgan = require ("morgan");
const cors = require ("cors");
const config = require ("./config.js");
const indexRoutes = require ("./routes/index.js"); 

const app = express();

app.set("port", config.PORT);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", indexRoutes);

module.exports = app;