var express = require('express');//module
var request = require('request'); //module: deprecated
var app = express();

app.get('/', function(req,res){
    console.log("GET");
    res.send("I am here");
})

app.get('/student', function(req,res){
    console.log("GET the students from /studend");
    res.send('Im a student');
})

app.get('/ab*cd',function(req,res){
    if(req.statusCode==200)
   console.log("get for query string");
   res.send('pattern matching');
})


app.post('/',function(req,res){
    console.log("POST");
    res.send("I an post");
})

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().address;
    console.log(host+port);
})

app.delete('/manager',function(){
    console.log('I am delete');
    res.send("DELETE")
})

//+ to concatenate or add it as a part of request URL

request.get('http://bengaluru', options,function(err,res,body){

    if(err) console.log("error");
    if(res.statusCode == 200) //200-299 : denotes the response is formulated
    if(res.statusCode==101) //100-199 : informational message
    if(res.statusCode==301) //300-399 : redirection message
    if(res.statusCode==400) // bad request: server cannot or will not process the request

    console.log("i am succcessful")
})

