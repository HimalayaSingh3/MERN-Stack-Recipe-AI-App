const express = require('express')
const dotenv = require('dotenv')
const Db = require('./controllers/Db')
const geminiRoutes = require("./routes/Gemini");

dotenv.config() 
const app = express();
Db(); 

const PORT = process.env.PORT || 3000;

app.use("/api/gemini", geminiRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Hello, this is the backend server</h1>")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
