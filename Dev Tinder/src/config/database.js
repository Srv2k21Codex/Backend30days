const mongoose = require('mongoose')

const URI = "mongodb+srv://srvy5748_db_user:gXanIn0IwxaoscOz@namastedev.yro4lbj.mongodb.net/DevTinder"

const connectDb = async () =>{
    await mongoose.connect(URI);
}

module.exports = connectDb;

