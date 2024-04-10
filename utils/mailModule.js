const nodemailer = require("nodemailer");

const mailModule = (from, to, subject, bodytext, label) => {
    console.log("aaaaaaaaaaaaaaaaaa", from)
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: "irshadalikadiwala@gmail.com",
            pass: process.env.MAIL
        }
    });

    const mailOptions = {
        from: from,
        to: to,
        subject: `✅ ${subject}`,
        // text: "HI HELLO <h1> HELLO </h1>",
        html: `<body style="border-left: 10px solid #000e40; border-right: 2px solid #000e40; border-bottom: 2px solid #000e40; border-top: 2px solid #000e40; padding: 10px 10px 10px 20px;
        color: #222;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 16.5px );
        -webkit-backdrop-filter: blur( 16.5px );
        border-radius: 10px;"><h1>${label}</h1><p style="color: grey; margin-top: 8px;">${bodytext} <br><br><br>The content of this site is copyright-protected and is the property of <a href="csgrey.netlify.app">GREY.</a></p></body>`,
        // attachments: [
        //     {   // utf-8 string as an attachment
        //         filename: 'text.txt',
        //         content: 'Attachments'
        //     },
        // ]
    }

    return transport.sendMail(mailOptions);
}

// from = "irshadalikadiwala@gmail.com"
// to = "irsssdx.collab@gmail.com, irsssdx.collab@gmail.com"
// subject = "TEST SUBJECT"
// bodytext = "text body"

module.exports = mailModule;
