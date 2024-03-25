
const express = require('express')
// const path = require('path')
// const mongoose = require('mongoose')

const PORT = 3000;

const app = express();

app.listen(PORT,()=>{    
    console.log("ok! from post!", PORT);    
});
