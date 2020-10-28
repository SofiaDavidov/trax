const express = require('express');

//init app
const app = express();
const PORT = process.env.PORT || 3000;

//start the server
app.listen(PORT, () =>
	console.log(`Server runing on port http://localhost:${PORT}`)
);
