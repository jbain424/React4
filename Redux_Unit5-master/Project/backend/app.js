const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const username = require('./routes/username.js');
const pins = require('./routes/pins.js')
const boards = require('./routes/boards.js')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/username', username);
app.use('/pins', pins);
app.use('/boards', boards);


app.get('/', (req, res) => {
  res.send('This is the homepage!')
});

app.get('*', (req, res) => {
  res.send("There's an ERROR! Try again!")
})

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
