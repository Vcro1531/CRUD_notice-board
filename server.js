const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');

app.listen(3000, () => {
	console.log('Server running');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('/', path.join(__dirname, 'html'));
});

app.post('/quotes', (req, res) => {
	console.log(req.body);
});
