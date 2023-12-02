require("dotenv").config();
// require("./db/conn");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//mail routes
const mailRoutes = require("./routers/mailRoutes");
app.use("/api/v1/mails", mailRoutes);

app.get("/", (req, res) => {
    res.send("<h1 style='text-align:center;padding: 20vh 0 20vh 0;font-family:century gothic;background:brown;color:lightgrey'>HELLO WORLD</h1>")
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT no. ${PORT}`);
});