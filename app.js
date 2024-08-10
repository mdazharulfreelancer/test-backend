const express = require('express');
const ConnectDataBase = require('./database');
const mongoose = require("mongoose")
const app = express();
const PORT = 3000


        mongoose.set("strictQuery", false)
        mongoose
        .connect("mongodb+srv://azharul:0HHpaElwgzZHF8k5@azharul.3dooh1i.mongodb.net/DailyBazer")
        .then(() =>{
            app.get( '/', (req, res)=>{
                res.send("connected database"
            )
        })
        })
        .catch((err) =>{
        console.log(err.mongoose)
        })



app.listen(PORT ,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})