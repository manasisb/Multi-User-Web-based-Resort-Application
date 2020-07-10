const rp = require('request-promise-native');
//var activities = require('./activities.json');

var site1 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/applicants',
            body: {   "FirstName": "Manasi",
                      "LastName": "Weginwar",
                      "Email ID": "mweginwar@horizon.com",
                      "Password": "CSUEastBay",
                      "Context":"@Manasi- very nice website",
                      "Experience":"Yoga"
                  },
		    json: true
		};

var site2 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/applicants',
		    body: {   "FirstName": "Manasi",
                      "LastName": "Weginwar",
                      "Email ID": "mweginwar@horizon.com",
                      "Password": "CSUEastBay"
                  },
		    json: true
		};

var site3 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/applicants',
		    body: {   "FirstName": "Manasi",
                      "LastName": "Weginwar",
                      "Password": "CSUEastBay"
                  },
		    json: true
		};

var site4 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/applicants',
		    body: {   "FirstName": "Manasi",
                      "LastName": "Weginwar",
                      "Email ID": "mweginwar@horizon.com",
                      "Password": "CSU"
                  },
		    json: true
		};


async function testdata(){
    
    try{
        
        console.log("Applicant Test 1: Good Test");
        let res = await rp(site1);
        console.log(res);
    }
    catch(e){
        console.error(e.message);
    }
    try{
        
        console.log("Applicant Test 2: Good Test");
        let res = await rp(site2);
        console.log(res);
    }
    catch(e){
        console.error(e.message);
    }
    
    try{
        console.log("Applicant Test 1: Bad Test"); 
        let res= await rp(site3); 
        console.log(res);
    }
    catch(e){
        console.error(e.message);
    }
    try{
        console.log("Applicant Test 2: Bad Test"); 
        let res= await rp(site4); 
        console.log(res);
    }
    catch(e){
        console.error(e.message);
    }
}

testdata();
