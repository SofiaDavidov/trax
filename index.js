const express = require('express');
const bodyParser = require('body-parser');

//init app
const app = express();
const PORT = process.env.PORT || 3000;

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Homepage'));
app.get('/whos-there', (req, res) => res.send('Hi Trax! This is Sofia'));

//start the server
app.listen(PORT, () =>
	console.log(`Server runing on port http://localhost:${PORT}`)
);
