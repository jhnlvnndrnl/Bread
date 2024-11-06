/*
    mongoDB is connected to react. However the data is not yet pushing to the database.
*/

const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./model/item.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDB()

app.get('/', (req, res) => {
    const items = itemModel.find()
    res.json(items)
})
 
app.listen(3000, ()=>{
    console.log("app is running");
})