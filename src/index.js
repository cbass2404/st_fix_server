require("./models/User");
require("./models/Tutorial");
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const tutorialRoutes = require("./routes/tutorialRoutes");
const requireAuth = require("./middleware/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(tutorialRoutes);

const mongoUri = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.dpthr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
});

app.get("/", (req, res) => {
    try {
        res.send("Online");
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
