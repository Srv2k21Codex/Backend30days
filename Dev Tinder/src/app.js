const express = require('express')
const connectDb = require('./config/database')
const app = express();
require('./config/database')
const Users = require('./models/users')
app.use(express.json());

connectDb().then(()=>{
  console.log("database connected successfully...")
  app.listen(3000,()=>{
    console.log("server is listening on PORT 3000")
  })
})
.catch((err) =>{
  console.log("database connection not established....")
})

app.post('/signUp',async (req,res)=>{
  // const users = new Users({
  //   firstName:"saurav",
  //   lastName:"kumar",
  //   email:"vinayaksaurav284@gmail.com",
  //   age:12,
  //   gender:"male"
  // })
    const users = new Users(req.body)
    try{
      await users.save()
      res.send("data saved successfully...")
    }catch{
      res.send("data failed to save...")
    }
})
 

// const {adminAuth} = require('./utils/auth')

// //other way to handle error using try catch block
// app.use("/",(err,req,res,next)=>{
//   //this will not executed because no error has occurred
//   throw new Error("bcderer");
//   if(err){
//     res.status(400).send("unknown error");
//   }
// })
// app.get("/admin/getUserData",(req,res)=>{
//   try{
       
//     throw new error ("dffgcsd");
//     res.send("fetched data successfully")
//   }catch(err){
//       res.status(500).send("unknown error generated")
//   }
// })



/*app.get("/admin/getUserData",(req,res)=>{
   throw new error ("dfdaa");
   res.send("data send successfully");
})
app.use("/",(err,req,res,next)=>{
  if(err){
    res.status(500).send("unknown error")
  }
})*/

//actual implementation of middleware in authorisation
//lets  admin want to make api call to getData and deleteData in this case one layer of security i want to add that is verification
//of admin here with the help of middleware this can be achieved smoothly


/*app.get("/admin/getAllData",adminAuth,(req,res)=>{
  res.send("data send successfully");
})

app.get("/admin/deleteData",adminAuth,(req,res)=>{
  res.send("data deleted successfully");
})*/

// app.use("/users",(req,res,next)=>{
//   console.log("handling ther route user1")
//   next();
// })
// app.use("/user",(req,res)=>{
//   console.log("handling user2")
//   res.end("user2")
// })
// app.use("/users",[(req,res,next)=>{
//   console.log("handling the route user1")
//   //res.send("response1!!")
//   //res.send("response1")
//   next()
// },(req,res,next)=>{
//    console.log("handling the route user2")
//   //  res.send("response2!!")
//     next()
// },(req,res,next)=>{
//     console.log("handling the route user3")
//     //res.send("response3!")
//     next()
// }],[(req,res,next)=>{
//    console.log("handling the user 4")
//    //res.send("response4!")
//    next()
// },(req,res,next)=>{
//   console.log("handling the user route 5")
//   res.send("response5")
//   next()
// }])


// app.listen(3000,()=>{
//   console.log("server is listening on PORT 3000")
// })
//here i have learnt order of route how much it  matters
// app.get('/',(req,res)=>{
//    res.end("404")
// });

// app.post(/.*fly/,(req,res)=>{
//     console.log(req.params)
//     res.send(
//       {
//         "name":"saurav",
//         "emailid":"vinayaksaurav284@gmail.com"
//       }  
//     )
// })
// app.delete("/user",(req,res) =>{
//     res.send("user data deleted successfully");
// })
// app.put("/user",(req,res) =>{
//     res.send("user data updated successfully");
// })

// app.listen(3000,(res)=>{
//    console.log("server is listening on 3000")
// })