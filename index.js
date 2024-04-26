const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('We are Heading towards Assignment_10 Server Side Management')
})

app.listen(port,()=>{
    console.log(`We are doing server management on the Port No: ${port}`)
})
