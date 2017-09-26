const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));       
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

app.use(express.static('./public'));

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, './public/dist/index.html'));
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("App listening port " + port);
});
