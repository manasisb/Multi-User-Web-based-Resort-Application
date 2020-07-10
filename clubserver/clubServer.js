var express = require('express');
var app = express();
var UserDetails = require('./clubUsersHash.json'); //dont use capital letter for variable
var bcrypt = require('bcryptjs');
var session = require('express-session');
var Ajv = require('ajv');
var schema = require('./exampleschema.json');
var UserInfo;

//to load database values using nedb-promises for activities
const Datastore = require('nedb-promises');
let activityDB = Datastore.create(__dirname + '/clubEvents');


app.use(express.json({limit: '100kb'})); //middleware function

//Error middleware function
var Error = function(err,req,res,next){   
    console.log("Status Error Code" + res.status(400) );
    console.log(`${JSON.stringify("Error message is " + err.message + ", expected: "  + err.expected + ", length: "  + err.length + ", limit: "  + err.limit)}`);
}

var cookieName = "wa3822development";   //Session ID cookie name, to delete cookie
app.use(session({
    secret: 'CSUEB Web development',   //for signing cookie
    resave: false,      // forces session to be saved back to session store agin even if there are no changes
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));

const setUpSessionMiddleware = function (req, res, next) {
//    console.log(`session object: ${JSON.stringify(req.session)}`);
//    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "admin"};
    };
    next();
};

app.use(setUpSessionMiddleware);

const checkAdminMiddleware = function(req,res,next){
    if(req.session.user.role != "admin"){
        res.status(401).json({error : "Forbidden"});
    }
    else{
        next();
    }
};

app.get('/activities', async function (req,res,next) {
    try{
        res.header('Content-Type', 'application/json');
        let data = await activityDB.find({});
        res.json(data);
        
    }catch(e){
        console.log(e.message);
    }
    next();
});


app.post('/addActivity',checkAdminMiddleware,express.json({limit: '100kb'}),async function (req, res, next) {
    try{
        let actdata = req.body;
        console.log(actdata);
        let data = await  activityDB.insert(actdata);
        let newdata = await activityDB.find({});
        console.log(newdata);
        res.json(newdata);   
    }catch(e){
        res.status(204).json(e.message);
    }
    
    next();
});


app.delete('/activities/:id',checkAdminMiddleware,express.json({limit: '100kb'}),async function(req,res,next){
    
    try{
        let id = req.params.id;
        console.log(`Trying to remove: ${id}`);
        let data = await activityDB.remove({_id:id});
        console.log(data);
        }   
    catch(e){
        res.status(404).send({error:true,message:"Not Found"});
         console.log(`Error : ${err.message}`);
    }
    try{
        let data = await activityDB.find({});
            res.json(data);
        }
    catch(e){
        res.status(404).send({error:true,message:"Not Found"});
         console.log(`Error : ${err.message}`);
    }
});
    
//        let id = req.params.id;
//        console.log(`Trying to remove: ${id}`);
//        activityDB.remove({_id:id}).then(function(numremoved){
//            console.log("removed" + numremoved)
//        }).catch(function(err){
//            res.status(404).send({error:true,message:"Not Found"});
//            console.log(`Error : ${err.message}`);
//        })
//        activityDB.find({}).then(function(activities){
//            res.json(activities)
//        }).catch(function(err){
//            console.log(`Error : ${err.message}`);
//        })
//});
            
//app.delete('/activities/:id',function(req,res,next){
//    let num = req.params.id;
//    if(num > activities.length) throw `Error: Index greater than length of JSON - ${num}`;
//    activities.splice(num,1);
//    res.send(`${JSON.stringify(activities)}`);
//    console.log(`Trying to delete activity: ${JSON.stringify(num)}`);
//    next();
//});



 //Available to all visitors, returns user info if successful
app.post('/login', express.json(), function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    // Find user
    let auser = UserDetails.find(function (user) {
        return user.email === email
    });
    if (!auser) {// Not found
        res.status(401).json({error: true, message: "User/Password error"});
        return;
    }
    let verified = bcrypt.compareSync(password, auser.hashedpass);
    if (verified) {
        let oldInfo = req.session.user;
        req.session.regenerate(function (err) {                        //generate new session id
            if (err) {
                console.log(err);
                     }
            let newUserInfo = Object.assign(oldInfo, auser);
            delete newUserInfo.hashedpass;
//            console.log(newUserInfo);
            req.session.user = newUserInfo;
            console.log("Changing session.user when login : ", req.session.user.role);
            res.json(newUserInfo);
        });
    } else {
        res.status(401).json({error: true, message: "User/Password error"});
    }
});


app.post('/applicants', async function(req,res){
    try{
        var ajv = new Ajv();
        var validate = await ajv.compile(schema);
        var valid = await validate(req.body);
//        console.log(validate);
        if(valid){
            res.json({"message":"Recieved your application"});    
        }
        else{
            res.json(validate.errors); 
        }
        
    }catch(e){
        res.status(404).send({error:true,message:"Not Found"});
         console.log(`Error : ${err.message}`);
    }
          
});


app.get('/users', checkAdminMiddleware,function(req,res,next){
     
    let displayinfo = UserDetails.map(function(u){
       var info = { "firstname: " : u.firstName,
                    "lastName" : u.lastName,
                    "email" : u.email,
                   "role" : u.role    
       }
       return info;
    })
    res.json(displayinfo);
    next();
});
    

app.get('/login',Error, function (req,res,next) {
    res.send(`${JSON.stringify(UserInfo)}`);
    next();
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Cookie Name : " + cookieName);
        res.clearCookie(cookieName, options);           // the cookie name and options
        res.json({message: "Goodbye"});
    })
});
                           

host = '127.0.0.12';
port = '1711';

app.listen(port, host, function () {
console.log(`Activity App listening on IPv4: ${host}:${port}`);

});