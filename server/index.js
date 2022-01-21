const express = require('express');
const users = require('./public/users.js');

const app = express();
const path = require('path');
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/profile/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'No valid entry for this id' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
