const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3049;

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/item/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).send('WORKS');
  console.log("POSTMANWORKING");
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
