require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    db:{
        host: process.env.DB_HOST || "",
        database: process.env.DB_NAME || "",
        user: process.env.DB_USER || "",
        pasword: process.env.DB_PASSWORD || ""
    }
} ;

module.exports = config
