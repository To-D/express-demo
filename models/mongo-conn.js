const credentials = require("../credentials");
const mongoose = require('mongoose');

// connect
const url = credentials.mongo.connectionString;
mongoose.connect(url, {
    keepAlive: 120,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
    console.log("Successful connection to " + url);
});

module.exports = mongoose;