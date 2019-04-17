


//this file will contain the implementation of rest api for /dishes and /dishes/:dishId endpoints
const express = require('express');
const bodyParser=require('body-parser');
const dishRouter = express.Router();

//in index.js we will mount this express router
dishRouter.route('/',)//by using this approch we



dishRouterroute("/dishes",(req,res,next()=>{
res.status=201;
res.setHeader=("Content-Type","text/html");
res.status=401;
res.end("dish router names are:"+req.body.name+ "and dish router description is:"+req.body.description);

}
));

app.use((req,res,next) =>{
  req.status=201;
  req.setHeader=("Content-Type","text/plain");
  res.end("dish router names are" +req.body.name+"and dish router description is:"+req.body.description);
  res.send
});
