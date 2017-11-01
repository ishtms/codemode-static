var express = require('express');
var router = express.Router();
var Model = require('../Model');
/* GET home page. */

router.get('/', function(req, res, next) {
  var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();
  if (schema === 'https') {
  res.render('index', { title: 'Express' });
  
  Model.create({},(err, res)=>{
    if(err){
      console.log('errr in server or database')
    }else{
      console.log(res)
    }
  })
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
  
});

module.exports = router;
