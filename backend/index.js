const express = require('express');
const routes =require('./routes');

const app = express();

// load the routes
app.use('/', routes());

app.listen(3004);