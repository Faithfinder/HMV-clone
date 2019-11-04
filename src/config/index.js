export default {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    databaseURL: process.env.MONGODB_URI,
    facebook: {
        client: process.env.FACEBOOK_CLIENT,
        secret: process.env.FACEBOOK_SECRET
    },
    session: { secret: process.env.SESSION_SECRET },
    clientCert: { password: process.env.CERT_PASS },
    api: {
        prefix: "/api"
    },
    itemCategories: ["Music", "Video", "Games"],
    email: {
        server: process.env.MAIL_SERVER,
        port: process.env.MAIL_PORT,
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD
    }
};
