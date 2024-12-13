const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {      
    res.send("hello world")
})

app.get("/home", (req, res)=>{
    res.send("Home page is here")
})

app.listen(8080,()=>{
    console.log("http://localhost:8080")
})