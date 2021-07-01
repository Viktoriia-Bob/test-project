const express = require('express');
const app = express();
const port = 3001;
const PID = process.pid;
const companyRoutes = require('./routes/company.route');

// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/company', companyRoutes);

app.listen(port, (() => {
    console.log(`App started on port: ${port} and PID: ${PID}`);
}));

module.exports = app;