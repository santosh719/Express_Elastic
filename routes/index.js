const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.render('index', { title: 'Express' });
  res.sendfile('index.html');
});

module.exports = router;
