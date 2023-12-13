const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/editions', controllers.editions);
app.use('/profiles', controllers.profiles);

app.get('/', (req, res) => res.send('Hello, World'));
app.listen(port, () => console.log('Example app listening on port'));