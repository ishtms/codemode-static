var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();
  if (schema === 'https') {
  res.render('index', { title: 'Express' });
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
  
});

module.exports = router;
