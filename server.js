const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function( req , res){
  res.sendfile(__dirname+"/index.html");
  console.log(__dirname);
});

app.post("/",function(req , res ){
  var n1 = number(req.body.num1);
  var n2 = number(req.body.num2);
  var result = n1+ n2;
  res.send( "The ans is " + result);
  });

app.listen(3000 , function(){
  console.log ("Server has started on port 3000");
});
