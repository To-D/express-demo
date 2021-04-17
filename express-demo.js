const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const credentials = require('./credentials');
const config = require('./config.js');
const router = require('./routes/index');

const app = express();

// open the public dir
app.use(express.static(path.join(__dirname, 'public')))

// cookie-parser and express-session settings
app.use(cookieParser(credentials.cookieSecret));
app.use(expressSession({
    // key name
    key: "SESSIONID",
    cookie: {
        // http only
        httpOnly: true,
        // sign with secret
        signed: true,
        // expire time relative to the present time
        maxAge: credentials.maxAge,
    }
}));

// view engine settings
// create hbs intance by custom options
const hbs = exphbs.create({
    partialsDir: 'views/partials/',
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main',
    extname: 'hbs',
});
// tell express which engine to use when meeting files of specific extname
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.enable('view cache');

// Routes to custom pages
router(app);

// start listen at port
app.listen(config.env.port, () => {
    console.log('Express started on http://localhost:' +
        config.env.port + '; press Ctrl-C to terminate.');
});

module.export = app;