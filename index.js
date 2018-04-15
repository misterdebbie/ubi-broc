const express = require('express');
//import express module
//modules are files/js library you import
const app = express();
//app is an express object
//access to methods for routing HTTP requests
//configure middleware
//renders HTML views
//registering the templating engine used
//this application is using EJS
const bodyParser = require('body-parser');
//import body-parser module
//parse incoming request bodies in middleware
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//use body-parser to facilitate form handling
//configure ejs for this app
app.set('view engine', 'ejs');
//use the ejs templates in views directory
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res) => {
  res.render('index');
});

app.use('/ants', require('./routes/antRoutes'));

app.get('*',(req,res)=>{
  res.status(404).json({
    message:'Whoops! Bad request.'
  })
})
//just log to console to check the app is running
app.listen(PORT,()=>{
  console.log(`The app is listening on port ${PORT}`);
});
