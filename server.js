import express from "express"
import http from "http"

const app = express()

const port = 8800

app.get("/",(req,res)=>{
    res.send("Hello, Welcome to Ganesh's server")
})

app.get("/weatherData",async (req,res)=>{ 
    try {
        const response= await fetch('https://open-weather13.p.rapidapi.com/city/landon/EN',{
            method:'GET',
            headers:
            {
                'X-RapidAPI-Key': '6d9cfee14emshd0feb508d8579aep19aabejsna94af4aa2e5b',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        
        })
        const result = await response.json()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})