const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Home Page' });
});

app.get('/users', (req, res) => {
  res.json({ message: 'Users Page' });
});

function looger(req, res, next) {
  console.log('log')
  next()
}

app.listen(PORT, () => {
  console.log(`Express działa na http://localhost:${PORT}`);
});


