const datastore = require('nedb');
const db = new datastore({filename: __dirname + '/clubEvents', autoload:true}) //autoload set to true to load data from file

var events = require('./activities.json'); //NeDB create id for us 

var DB = db.insert(events,function(err,newDoc){
    if(err){
        console.log("Somethign went wrong while writing");
        console.log(err);
    }
    else{
        console.log("Added "+ events.length + " in our Club Website");
    }
    
});

module.exports = DB;