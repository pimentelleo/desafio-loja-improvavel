const express = require('express');
const app = express();
const userData = require('./components/users')
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/funcionarios', (req, res) => res.send(userData));



app.post('/user/insert', (req, res) => res.send(userData.insertMurray(body)));


app.listen(port, () => console.log('Example app listening on port 3000!'));