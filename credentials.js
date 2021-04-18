// generated at https://preshing.com/20110811/xkcd-password-generator/
module.exports = {
    cookie: {
        cookieSecret: "layers seems wagon soap",
        // expire after eight hours
        maxAge: 8 * 60 * 60 * 1000,
    },
    mongo: {
        connectionString: "mongodb://127.0.0.1:27017/express-demo"
    }
}