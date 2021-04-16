const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');
const config = require('./config.js');
const router = require('./routes/index');

const app = express();

// view engine settings
// create hbs intance by custom options
const hbs = exphbs.create({
    partialsDir: 'views/partials/',
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main',
    extname: 'hbs',
});
// tell express what engine to use when meeting files of specific extname
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.enable('view cache');

// routes
router(app);

// start listen at port
app.listen(config.env.port, () => {
    console.log('Express started on http://localhost:' +
        config.env.port + '; press Ctrl-C to terminate.');
});

module.export = app;