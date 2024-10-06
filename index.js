const express = require('express');
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Read user data from JSON file
  const users = JSON.parse(fs.readFileSync('./database/users.json'));

  // Check if user exists and credentials are correct
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, error: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});