const URI = "mongodb+srv://srvy5748_db_user:gXanIn0IwxaoscOz@namastedev.yro4lbj.mongodb.net/?appName=namasteDev"

const {MongoClient} = require('mongodb')

const client = new MongoClient(URI);

const dbName = 'DEMO';

async function dbConnection(){
    await client.connect()
    console.log("database connected successfully")
    const db = client.db(dbName) //return references of db and db is object
    const collection = db.collection('Users')
    const findDetails = await collection.find({}).toArray();
    console.log("details are",findDetails)
 
    return "done";
}

dbConnection()
.then(console.log)
.finally(()=>client.close());