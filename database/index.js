const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./model/donor.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDB()

app.post('/donors', async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        const newDonor = new itemModel({ 
            name, 
            email,
        });

        await newDonor.save();
        res.status(201).json({ message: 'Donor added successfully', donor: newDonor });
    } catch (error) {
        console.error("Error saving donor:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
``

app.listen(3000, ()=>{
    console.log("app is running");
})