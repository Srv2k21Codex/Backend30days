
const adminAuth =(req,res,next)=>{
    const token = "xyzdfda";
    const isAuthorised = token ==='xyz';
    if(!isAuthorised){
      res.status(401).send("invalid user")
    }else{
      next();
    }
  
}

  module.exports = {adminAuth};