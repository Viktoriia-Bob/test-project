const mongoose = require('mongoose');
const app = require('./core');

(() => {
    mongoose.connect('mongodb+srv://admin:admin12345@cluster0.62gyx.mongodb.net/testDB', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    app.listen();
})();