import nodemailer from "nodemailer";
import config from "../config/index";

var transport = nodemailer.createTransport({
    host: config.email.server,
    port: config.email.port,
    auth: {
        user: config.email.username,
        pass: config.email.password
    }
});

export default transport;
