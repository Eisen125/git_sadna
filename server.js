// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data array to store usernames and passwords
let users = [];

// Route to display the form and the list of users
app.get('/', (req, res) => {
  res.render('example', { users });
});

// Route to handle form submission
app.post('/addUser', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    users.push({ username, password });
  }
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
