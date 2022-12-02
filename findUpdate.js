const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://0.0.0.0:27017/", function (err, client) {
    if (err) { throw err }
    console.log("Connected Successfully")

    const db = client.db("mydb")


    db.collection('College').updateOne({ "name": "vinay" }, { $set: { "age": 48 } },
        (err, res) => {
            if (err) throw err
            console.log("Sucessfully updated");


        })

    db.collection("College").findOne({ "name": "vinay" }, function (err, res) {
        if (err) throw err
        console.log(res)
        
    })

    db.collection("College").find({}).toArray(function(err,res){
        if (err) throw err
        console.log(res)
        client.close()
    })
})
