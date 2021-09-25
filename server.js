const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => {
	console.log('Server running');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(__dirname + 'index.html');
});

app.post('/quotes', (req, res) => {
	console.log(req.body);
});
