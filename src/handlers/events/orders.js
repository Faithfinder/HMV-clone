import emailTemplate from "../../util/email";
import nodemailer from "../../loaders/nodemailer";

export const onOrderCreation = async order => {
    const email = emailTemplate(order);
    await nodemailer.sendMail(email);
};
