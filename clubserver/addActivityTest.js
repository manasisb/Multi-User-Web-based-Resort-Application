const rp = require('request-promise-native');
//var activities = require('./activities.json');

var site1 = {
		    method: 'GET',
		    uri: 'http://127.0.0.12:1711/activities',
		    json: true
		};

var site2 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/activities',
		    body: { name:"Tadoba Hunt","dates":"21 Mar,25 Mar,4 Apr"},
		    json: true
		};

//var site3 = {
//		    method: 'POST',
//		    uri: 'http://127.0.0.12:1711/activities',
//		    body: { Name:"Swimming Camp","Date":"25 Mar,28 Mar,10 Apr ..............................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!25 Mar,28 Mar,10 Apr ..............................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!25 Mar,28 Mar,10 Apr ..............................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!25 Mar,28 Mar,10 Apr ..............................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"},
//		    json: true
//		};

var site4 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/activities',
		    body: { name:"Swimming Camp","dates":"25 Mar,28 Mar,10 Apr"},
		    json: true
		};


async function addAct(){
    
    try{
        
        console.log("Initial GET of activitites request");
        
        let res = await rp(site1);
        
        console.log(`Currently ${res.length} activities`);
    }
    catch(e){
        console.error(e.message);
    }
    
    try{
        console.log("After First good activity post");
        
        let res= await rp(site2);
    }
    catch(e){
        console.error(e.message);
    }
    try{
        
        
        let res = await rp(site1);
        
        console.log(`Currently ${res.length} activities`);
    }
    catch(e){
        console.error(e.message);
    }
//    try{
//        res = await rp(site3)
//    }
//    catch(e){
//        console.log("After first bad activity post");
//        console.error("Error:" + "Status Code: 400 -" + "error : true , message: bad activity");
//    }
     try{
         console.log("Another Good Activity Post");
         
        let res = await rp(site4);
         
    }
    catch(e){
        console.error(e.message);
    }
       try{
        
        
        let res = await rp(site1);
        
        console.log(`Currently ${res.length} activities`);
    }
    catch(e){
        console.error(e.message);
    }
}

addAct();


