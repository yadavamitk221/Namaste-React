const express = require("express"); 
const fs = require('fs');

const app = express(); 
let data = fs.readFileSync("./sampleFile.txt", "utf-8"); 
console.log("data", data);

app.listen(5000, (err) => {
    if(err){
        console.log("Error while running the server");
    }else{
        console.log("Server is up an running on port 5000");
    }
})