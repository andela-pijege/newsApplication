const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
