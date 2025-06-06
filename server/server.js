const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Home Page' });
});

app.get('/users', (req, res) => {
  res.json({ message: 'Users Page' });
});

app.post('/login', (req, res) => {
  console.log(req.body)

  const errors = []

  if (typeof req.body.username !== "string") req.body.username = ""
  if (typeof req.body.password !== "string") req.body.password = ""

  req.body.username = req.body.username.trim()

  if (!req.body.username) errors.push('You must provide a username.')
  if (req.body.username && req.body.username.lenght < 3) errors.push('Username must be at least 3 characters.')
  if (req.body.username && req.body.username.lenght > 10) errors.push('Username cannot exeed 10 characters.')
  if (req.body.username && req.body.username.match(/^[a-zA-z]+$/)) errors.push('username can only contain letters and numbers')

  if (errors.length) {
    return res.status(400).json({ errors })
  }
  else {
    res.send('thank you for filling the form.')
  }

  res.send('Thank you for filling out the form')
})

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});


