const express = require("express"); 
const jwt = require("jsonwebtoken"); 
const app = express(); 


app.use(express.json()); 

app.get("/login", (req, res) => {
    console.log("req.body", req.body);
    if(req.body){
        res.send("hey you are logged in:", req.body);
    }
})

app.listen(5000, (err) => {
    if(err){
        return  console.log("error while settingup the server", err);
    }
    console.log("Server is up and running on port 5000");
})