var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/', (req, res) => {
  res.render('index', { title: 'Yamaha Shop' });
});

module.exports = router;
