import express from "express"

const app = express()

const port = 8800

app.get("/",(req,res)=>{
    res.send("Hello, Welcome to Ganesh's server")
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})