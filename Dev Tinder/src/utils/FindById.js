const Users = require("../models/users");

const findbyid = async (req, res) => {
  try {
    const id = req.body.id;
    const userInfo = await Users.findById(id);
    if(!userInfo){
        return res.status(404).send("users not found")
    }else{
        res.send(userInfo);
    }  
  } catch (err) {
    res.status(404).send("Invalid user id")
  }
};

module.exports = findbyid;
