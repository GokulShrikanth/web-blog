const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.post('/register', (req, res) => {
  res.json('Hello World');
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
