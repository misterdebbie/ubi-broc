const axios = require('axios');
//import axios
//make Promise based HTTP requests from node
//supports Promise API
//transform req and res data
//cancel requests
//transforms JSON data
//client side protection against XSRF
const antController = {};
//initialize a controller object
//define the methods here

antController.getData = (req,res) => {
  axios({
    method: 'get',
    url: `https://antserver-blocjgjbpw.now.sh/graphql?query={ants{name}}`
    }).then(data => {
       console.log(`got this back:`, data)
       res.render('results',{
       result: data,
     })
     }).catch((err) => {
       debugger;
       console.log(err);
       res.status(500).json(err)
     })
}

module.exports = antController;
