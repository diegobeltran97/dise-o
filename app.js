const express = require('express');
var path = require("path");
const app = express();
const port = process.env.PORT || 3000;


// settings

app.use(express.static("public"));
app.set("views", "./src/views");
app.locals.basedir = path.join(__dirname, "views");
app.set("view engine", "pug");


app.get('/', (req, res) => {
  res.render("index");
});

app.get('/sendResults', (req, res) => {
  res.render("sendResults");
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});