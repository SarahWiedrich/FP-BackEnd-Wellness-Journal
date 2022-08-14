require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 8080

//express app
const app = express()


//connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => { 
            console.log(`DB is connected listening on PORT ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })