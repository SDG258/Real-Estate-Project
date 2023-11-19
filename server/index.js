const express = require('express');
require('dotenv').config()
const cors = require('cors');
const dbconn = require('./config/dbconnect');

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(express.urlencoded({extended: true }))

dbconn()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`:::::Server Ready On Port ${PORT}`))