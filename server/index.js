const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let formData = {};

app.post('/submit', (req, res) => {
  formData = req.body;
  res.status(200).send({ message: 'Form data received' });
});

app.get('/data', (req, res) => {
  res.status(200).send(formData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
