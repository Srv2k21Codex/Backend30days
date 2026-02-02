
const URI = "mongodb+srv://srvy5748_db_user:gXanIn0IwxaoscOz@namastedev.yro4lbj.mongodb.net/?appName=namasteDev"

const {MongoClient} = require('mongodb')

const client = new MongoClient(URI);

const dbName = "DEMO"

async function dbConnect(){

    await client.connect();
    console.log("database successfully connected");
    const db = client.db(dbName);
    const collection = db.collection('Users')
    return collection ;
}
dbConnect()


module.exports={dbConnect,client};
