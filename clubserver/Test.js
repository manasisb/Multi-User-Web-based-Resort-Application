const rp = require('request-promise-native');

var site1 = {
		    method: 'PUT',
		    uri: 'http://127.0.0.12:1711/activities/2/message',
		    body: { Name:"Tadoba Hunt","Date":"21 Mar,25 Mar,4 Apr"},
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
}

addAct();




