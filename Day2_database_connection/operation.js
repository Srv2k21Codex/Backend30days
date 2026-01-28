const {dbConnect,client} = require("./database")
const {ObjectId} = require('mongodb')
const userId = new ObjectId('6978d8be144bd1c52bdfb097')

const data ={
    firstname:"vikram",
    lastname:"pritam",
    email:"vikaram21prit@gmail.com",
    role:"student",
    contact:"8934671290"
}
//insertion operation
async function insert(){
    const collection = await dbConnect();
    const insertedResult = await collection.insertMany([data]);
    console.log("inserted document =>",insertedResult);
    return "Done."
}
//read operation
async function read(){
    const collection = await dbConnect();
    //const findResult = await collection.find({}).toArray();
    const queryFilter = await collection.find({firstname:"vikram"}).toArray();
    console.log('found document',queryFilter);
}

//update result 

async function update(){
    const collection = await dbConnect();
    console.log("result before updation");
    console.log(await collection.find({_id:userId}).toArray());
    const updateField = await collection.updateOne({_id:userId},{$set:{firstname:"rathore"}})
    console.log("updated result =>",await collection.find({_id:userId}).toArray());
}

//delete result
async function deleted(){
    const collection = await dbConnect();
    const deleteResult = await collection.deleteMany({_id : userId})
    console.log('Deleted documents =>',deleteResult);

}
deleted()
.finally(() => client.close());
// update()
// .finally(()=>client.close());
//read()
//.finally(() => client.close());
// insert()
// .then(console.log)
// .catch(console.error)
// .finally(() =>client.close());