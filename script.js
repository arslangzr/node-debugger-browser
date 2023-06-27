import express from "express";
const app = express();

app.get("/",(req,res)=>{
console.log("I am on the server")
debugger
res.send("Hello world")
})

console.log("Server started");
app.listen(3001)