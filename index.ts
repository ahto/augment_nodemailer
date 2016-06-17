/// <reference path="./typings/tsd.d.ts" />

import * as mailer from "nodemailer";

const smtpConfig = {
  host: 'localhost',
  port: 25,
};

let transporter = mailer.createTransport(smtpConfig);

declare namespace nodemailer {
  export interface SendMailOptions {
    template?: string;
  }
}

transporter.sendMail({
    from: "someone <someone@somwhere.com>",
    to: "someone <someone@somwhere.com>",
    template: "asd",
});

