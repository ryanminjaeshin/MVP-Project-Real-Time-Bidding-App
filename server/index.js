const express = require('express');
// const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../db/index.js');

const app = express();

const PORT = 3049;

// app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/gallery/:id', (req, res) => {
  const { id } = req.params;
  db.getOneItem(id, (err, itemInfo) => {
    if (err) {
      res.status(400).send('ERROR with getOneItem : ', err);
    } else {
      res.status(200).send(itemInfo);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
