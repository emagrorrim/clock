const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));       
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

app.use(express.static('./public'));

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './public/dist/index.html'))
})

app.listen(8080, () => {
  console.log("App listening port " + 8080);
});
