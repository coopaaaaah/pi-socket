const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hello World, From RP4ZQ');
});

app.listen(3000);
