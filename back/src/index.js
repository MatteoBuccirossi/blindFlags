const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const stripe = require('stripe');
require('dotenv').config(process.env.STRIPE_KEY);
const port = 3000;


app.use(cors());
app.use(express.json());

path.resolve(__dirname, '..');

app.get('/', (req, res)=>{
    res.sendFile(path.join(path.resolve(__dirname, '../..'),'/front/src/index.html'));
})

app.get('/logo', (req, res)=>{
    res.sendFile(path.join(path.resolve(__dirname, '../..'),'/front/img/a.png'))
})

app.get('/small', (req, res)=>{
    res.sendFile(path.join(path.resolve(__dirname, '../..'),'/front/img/small.png'))
})
app.get('/big', (req, res)=>{
    res.sendFile(path.join(path.resolve(__dirname, '../..'),'/front/img/big.png'))
})

app.get('/back', (req, res)=>{
  res.sendFile(path.join(path.resolve(__dirname, '../..'),'/front/img/back.png'))
})

app.get('/medium', (req, res)=>{
    res.sendFile(path.join(path.resolve(__dirname, '../..'),'/front/img/medium.png'))
})

app.get('/fav', (req, res)=>{
    res.sendFile(path.join(path.resolve(__dirname, '../..'),'/front/img/favicon1.png'))
})

/*** Post Requests ***/


app.listen(port, ()=>{
    console.log('listening on:' + port);

})