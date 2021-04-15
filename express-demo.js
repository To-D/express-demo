const express = require("express");
const config = require('./config.js');
const router = require('./routes/index');

const app = express();

// routes
router(app);

// start listen at port
app.listen(config.env.port, () => {
	console.log('Express started on http://localhost:' +
		config.env.port + '; press Ctrl-C to terminate.');
});

module.export = app;
