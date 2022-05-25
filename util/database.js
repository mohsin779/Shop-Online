const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let _db; //underscore means this variable can only use internaly in this file


const mongoConnect=callback=>{
    MongoClient.connect('mongodb+srv://Mohsin:9844@cluster0.k2jhm.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client=>{
        console.log('Connected');
        _db=client.db()
        callback(client);
    })
    .catch(err=>{
        console.log(err);
        throw err;
    });
};

const getDb=()=>{
    if(_db){
        return _db;
    }
    throw "No database found";
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;