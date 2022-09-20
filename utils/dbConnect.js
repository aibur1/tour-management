const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose
        .connect(process.env.DATABASE_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database connection is successfull'.blue.bold);
        });
};

module.exports = dbConnect;
