const mailModule = require("../utils/mailModule");

// contact us controllers
exports.contactMail = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        const bodytext = `Name: ${name.toUpperCase()} <br>Contact No.: ${phone} <br>Email: ${email.toUpperCase()} <br>Message: ${message.toUpperCase()}`;
        // mail module function calling
        try {
            await mailModule(email, "elmira.contact@gmail.com", subject, bodytext, "Contact Us Form")
            res.status(201).json({ message: "Mail sent successfully." });
        } catch (err) {
            res.status(422).json({ error: "Something went wrong while sending mail, try after some time." });
        }
    } catch (err) {
        res.status(422).json({ error: err.message });
    }
}

// warranty controllers
exports.warrantyMail = async (req, res) => {
    try {
        const { name, email, phone, orderid } = req.body;
        const bodytext = `Name: ${name.toUpperCase()} <br>Contact No.: ${phone} <br>Email: ${email.toUpperCase()} <br>Order ID: ${orderid.toUpperCase()}`;
        // mail module function calling
        try {
            await mailModule(email, "elmira.contact@gmail.com", "Warranty Form Registration", bodytext, "Warranty Form")
            res.status(201).json({ message: "Mail sent successfully." });
        } catch (err) {
            res.status(422).json({ error: "Something went wrong while sending mail, try after some time." });
        }
    } catch (err) {
        res.status(422).json({ error: err.message });
    }
}
