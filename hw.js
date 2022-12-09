const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000";
var first_name;
var Salary;
const connect = MongoClient.connect(url, function(err, client){
    if (err) throw err
    console.log("Connected Sucessfully")
    const db = client.db("company")
        var newkey = db.collection('Manager').findOne({name:"rani"}, (err,res)=>{
        if (err) throw err
        console.log('fetched data sucessfully')
        console.log(res);
        max.firstname = res.name;
        max.salary =  res.Salary;
        console.log(max)
        client.close()
    });  
});

connect

var max={
    firstname:first_name,
    salary:Salary
}
module.exports=max;
