import nodemailer from "nodemailer";
import { database } from "../../DATABASE";

const {nodemailerPass, nodemailerUser} = database

export const transporter = nodemailer.createTransport({
 host: "smtp.outlook.com",
 port: 587,
 secure: false,
 auth: {
 user: nodemailerUser,
 pass: nodemailerPass
 },
 tls: { ciphers: "SSLv3" }
})
export default transporter
