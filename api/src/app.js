import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config.js";
import indexItemRoutes from "./routes/items/index.js"; 
import indexUserRoutes from './routes/user/index.js';
import indexTicketRoutes from './routes/ticket/index.js';
import path from 'path';
import exphbs from 'express-handlebars';
import methodsOverride from 'method-override';
import sessions from 'express-session';

const app = express();

// Settings
app.set("port", config.PORT);
// app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodsOverride('_method'));
app.use(sessions({
    secret: 'Drinks',
    resave: true,
    saveUninitialized: true
}));

// Routes
app.use("/", indexItemRoutes);
app.use('/', indexUserRoutes);
app.use('/', indexTicketRoutes);

export default app;