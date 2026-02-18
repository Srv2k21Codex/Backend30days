
const Users = require('../models/users')
const getUsers = async(req,res) =>{
    const userEmail = req.body.email;
    try{
       const users = await Users.find({email:userEmail})
       if(users.length === 0){
         res.status(404).send("users not found")
       }else{
        res.send(users)
       }
    }catch(err){
      res.status(404).send("something went wrong")
    }
}

module.exports = getUsers;