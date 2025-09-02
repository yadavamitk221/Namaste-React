const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const routes = require("./routes");

app.use(express.json());

app.use("/api", routes);

app.listen(5000, (err) => {
    if (err) {
        return console.log("error while settingup the server", err);
    }
    console.log("Server is up and running on port 5000");
});