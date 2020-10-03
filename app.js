const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb://localhost/Hospl';

mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', () => {
    console.log("Connected");
})
app.use(express.json());

const route = require('./routes/routing');
app.use('/routing', route);



    app.listen(3000, ()=>{
        console.log("Server Started");
    })

