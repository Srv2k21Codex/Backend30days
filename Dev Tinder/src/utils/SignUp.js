const Users = require('../models/users')

const signup = async (req,res)=>{
   
    try{
        
        const users = await new Users(req.body);
        await users.save()
        res.send("users saved successfully...")
    }catch(err){
      res.status(404).send("something went wrong...")
    }
}

module.exports = {signup}