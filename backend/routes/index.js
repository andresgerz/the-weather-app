const express = require('express');
const router = express.Router();


module.exports = function() {

  router.get('/', (req, res) => {
    res.send('Hi World!');
  });

  return router;
}