const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send('hello world');
  global.setInterval(3000);
});

api.get('/api/courses',(req,res) => {
  res.send([1,2,3]);
});
app.listen(3000,() => console.log("listening on port 3000..."));
