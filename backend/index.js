const express = require('express');
const app = express();
let port = 8080;
var cors = require('cors')
let host = 'localhost';

app.use(cors());

app.get('/randomnumber',(req,res)=> {
    let randomnumber = Math.floor(Math.random() * 100) - 1;
    console.log(randomnumber);
    res.json(randomnumber);
})


app.listen(port,host,()=>{
    console.log('Serve is running on ' +(port));
})