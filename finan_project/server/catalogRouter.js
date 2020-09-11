const express = require('express');
const fs = require('fs');
const router = express.Router();

app.get('/api/products', (req, res) => {
    fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
      if (err) {
        res.send(JSON.stringify({result: 0, text: err}));
      } else {
        res.send(data);
      }
    });
  });

module.exports = router;
