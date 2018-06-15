const express = require('express');

const app = express();
app.set('view engine','pug');

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/card',(req,res)=>{
    res.render('card',{prompt:"who is burried to grant's tomb?",colors});
});

app.listen(3000);