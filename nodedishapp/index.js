const express = require('express');
const http = require('http');
const morgan=require("morgan");
const bodyParser = require("body-parser");

const hostname= 'localhost';
const port=3030;

const app = express();
app.use(morgan('dev')); //using in dev mode

//whenver we need to use middleware we have to write app.use(name_of_middle_ware)
app.use(bodyParser.json);
//it will look into the body of requset message of json type
//this allows us to parse the body of request message that are in json format

//this app.all will uses the endpoint '/dishes' for all get,out,post,delete methods
app.all('/dishes',(req,res,next) => {    //here first parameter is the endpoint i.e(/dishes) and second is req,res,next
res.statusCode = 200;
res.setHeader('Content-Type','text/plain'); //we will simply send plain text reply back to the client
next(); //it will continue to look for next function that matches to the endpoint "/dishes"
});

app.get('/dishes',(req,res,next)=>{  //it means if we get request on the endpoint /dishes then first the above app.all will be executed and then that will pass req,res into this app.get request
//res.stautsCode = 200,
//res.setHeader('Content-Type','text/plain'); no need to write these 2 lines since it already fetches this from app.all
res.end('Will Send all the dishes to you!');//later on when we retrive the dishes data from the database of mongodb then this will be returing json data back to the client
});
//now when the get request end then this will trigger reply to be sent back to client


//post request
//right now we are extracting name and description from the body and then sending it back to the client in this body so that way we can confirm that server will receive whatever we are sending in the body of the message through postman
//at the app.use(bodyParser.json) above the body of the incoming request  is parsed into the bodyparser and then added into the req object as req.body and then the req.body will give access to whatever in the body of the incoming message
app.post('/dishes',(req,res,next) =>{ // this will also run first app.all
  res.end('Will add the dish :' + req.body.name + //so when the client send the post message the post message body contains the json string which also contain the name
' with details ' + req.body.description);//extract the information from the body ,//it will add information to requestbody in the form of json string which will contain name and description of the dish  and going to extract these piece of information and then send them back to the client in the reply message
});//we can also have price property image property etc etc from the dish object properties

//so whatever the  json string contains in the req body ,the json string will be [arsed into the javascript object and added into the request object as a body
//the post request coming in from the server will carry some information in the body of the message in th form of json format


app.put('/dishes',(req,res,next) => {
res.statusCode = 403;
  res.end('Put operation not supported on dishes');
});

app.delete('/dishes',(req,res,next) =>{
  res.send("Deleting all the dishes!"); //for deleting all the dishes on the server side
});



//now using add get put post delete for :dishId
app.all("/dishes/:dishId",(req,res,next)=> {
  res.statusCode=201;
  res,setHeader("Content-Type","text/plain");
  next();
});


app.get('/dishes/:dishId',(req,res,next)=> { //here we will extraxt the dishId and send it back as a reply in reply message
  res.end("will send details of the dish:" + req.params.dishId + ' to you'); //the which dishId information will be in the parameters.so this parameters value can be retrived using req.params.dishId app.put('/dishes',(req.res,next) => {
res.statusCode = 403;
  res.end('Put operation not supported on dishes');
});
//if /dishes/:d23 the server will say "will send you the details of dish23 to ypu"

app.post('/dishes/:dishId',(req,res,next)=>{
  res.statusCode=403;
  res.end("doesnot make sense to post(since no modificatio) on specific dishId of "+ req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next) => { //for updating a particular dish id
  res.write("updating the dish" + req.params.dishId + '/');//res.write is used to write a line to the reply message
res.end('will update the dish: '+req.body.name + 'with details '+req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next) => {
  res.end("deleting the dishe" +req.params.dishId);
});


app.use(express.static(__dirname+ '/public')); //this tells express to use static file from dirname
//informing express to look for public folder(that we created initially that have html file inside it) in the root of the folder(__dirname)
//if we do localhost://3000/aboutus.html it will show the contens of aboutus.html
//so if the file doesnot exist then the below code will run
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');

  res.end('<html><body><h1>This is express server</h1></body></html>');
  res.send
});

const server = http.createServer(app);
server.listen(port, hostname,() =>{
  console.log(`Server running at ${hostname}:${port}`);
});
