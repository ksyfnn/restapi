const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// parser application /json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// memanggil routes
var route = require('./router')
routes(app);

app.listen(3000, () => {
    console.log(`server started on port`);
});