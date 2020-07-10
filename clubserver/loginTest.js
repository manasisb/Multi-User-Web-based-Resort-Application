const rp = require('request-promise-native');
const bcrypt = require('bcryptjs');

let site1 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/login',
		    body:  {"firstName": "Melia","lastName": "Barker","email": "tirrivees1820@outlook.com",
                    "password": "49OqspUq","role": "admin"},
		    json: true
		};

let site2 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/login',
		    body:  {"firstName": "Demetrice",
                    "lastName": "Parker",
                    "email": "chihuahua18994567llllllllllllll@gmail.com",
                    "password": "'E`Gj3iJ",
                    "role": "member"},
		    json: true
		};


let site3 = {
		    method: 'POST',
		    uri: 'http://127.0.0.12:1711/login',
		    body:  { "firstName": "Ligia",
                    "lastName": "Hudson",
                    "email": "umbrate1989@yahoo.com",
                    "password": "n3pLS4|=mmmmmm",
                    "role": "member"},
		    json: true
		};

async function loginTest(){
    
    try{ 
        console.log("Good Login Test");
        let res = await rp(site1);
        console.log(`result : ${JSON.stringify("firstName: " + site1.body["firstName"] + " lastName: " + site1.body["lastName"] + " email: "+ site1.body["email"] + " role: " + site1.body["role"])}`);
    }
    catch(e){
         console.log(`Error: ${e}`);
    }
     try{
        
        console.log("Bad Email Test");
        let res = await rp(site2);
         console.log(res);
    }
    catch(e){
        console.log(`Error: ${e}`);
    }
      try{
        
        console.log("Bad Password Test");
        let res = await rp(site3);
    }
    catch(e){
        console.log(`Error: ${e}`);
        
    }
    
}

loginTest();
