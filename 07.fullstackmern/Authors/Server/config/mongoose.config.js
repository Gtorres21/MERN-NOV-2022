const mongoose = require('mongoose');

module.exports = (DB_NAME) =>{
    mongoose.connect('mongodb://localhost/' + DB_NAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`✅✅✅ Established a connection to the database ${DB_NAME} ✅✅✅`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
}