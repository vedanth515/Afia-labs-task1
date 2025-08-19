const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./configs/db.js');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

connectDB();

const app = express();
const PORT = 5000;

app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
}));



app.use(express.json());

app.use('/api/books', bookRoutes);


app.get("/",(req,res)=>{
    res.send("conntected")
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
