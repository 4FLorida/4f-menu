const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./routes/api/Products');
const administrators = require('./routes/api/Administrators');
const categories = require('./routes/api/Categories')
const db = require('./config/keys').mongoURI;
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(
  cors({
    allowedHeaders: ['Content-Type']['Authorization'],
    exposedHeaders: ['Content-Type']['Authorization'],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  })
);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    '*',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Database connected..'))
  .catch(err => console.log(err));

app.use('/api/products', products);
app.use('/api/administrators', administrators);
app.use('/api/categories/',categories);

app.listen(port, () => {
  console.log('Server started on port:' + port);
});