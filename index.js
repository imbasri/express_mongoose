const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/shop_db').then((_res) => {
  console.log('connected to db')
}).catch((err) => { console.log(err) })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//router
app.get('/',(_req,res)=>{
  res.send('Hello World')
})

// listen server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
})