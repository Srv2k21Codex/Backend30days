const Users = require('../models/users')

const getFeed = async(req,res)=>{
  try{
    const feed = await Users.find({})
    if(feed.length === 0){
        res.status(404).send("users not found")
    }else{
        res.send(feed);
    }

  }catch(err){
    res.send(404).send("unknown error")
  }
}

module.exports = {getFeed};