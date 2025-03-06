const express = require('express');
const app = express();
const PORT = 5000;

app.get('/ping', (req, res) => {
  res.send('pong');
});




app.listen(3000, () => {
  console.log(Server is running on port ${PORT});
});