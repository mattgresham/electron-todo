const express = require('express');
const cors = require('cors');

const todoRoutes = require('./components/todo/routes');

const app = express();
const port = 8008;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', todoRoutes);

const server = app.listen(port, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});

module.exports = app;
