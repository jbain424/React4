const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = require('./routes/users.js');
const pins = require('./routes/pins.js')
const boards = require('./routes/boards.js')



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', users);
app.use('/pins', pins);
app.use('/boards', boards);


app.get('/', (req, res) => {
  res.send('This is the homepage!')
});

app.get('*', (req, res) => {
  res.send("There's an ERROR! Try again!")
})

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
