const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World (and Tendy!)');
});
app.get('/demo', (req, res) => {
	res.set('X-full-stack', 'for-life')
	res.status(418);
	res.send('Cool demo');
});

app.listen(port, () => console.log(`Example app is listening on port ${port}!`));
