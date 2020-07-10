var rp = require('request-promise-native');

var cookiejar = rp.jar();

let adminlogin = {
  url: 'http://127.0.0.12:1711/login',
  method: 'POST', 
  body: {
   "firstName": "Melia",
    "lastName": "Barker",
    "email": "tirrivees1820@outlook.com",
    "password": "49OqspUq",
    "role": "admin"
  },
  json: true,
  jar: cookiejar
};


let memberlogin = {
  url: 'http://127.0.0.12:1711/login',
  method: 'POST', 
  body: {
    "firstName": "Demetrice",
    "lastName": "Parker",
    "email": "chihuahua1899@gmail.com",
    "password": "'E`Gj3iJ",
    "role": "member"
  },
  json: true,
  jar: cookiejar
};

let guestlogin = {
  url: 'http://127.0.0.12:1711/login',
  method: 'POST', 
  body: {
    "firstName": "Demetrice",
    "lastName": "Parker",
    "email": "chihuahua1899@gmail.com",
    "password": "'E`Gj3iJ",
    "role": "guest"
  },
  json: true,
  jar: cookiejar
};

var site1 = {
		    method: 'GET',
		    uri: 'http://127.0.0.12:1711/activities',
		    json: true,
             jar: cookiejar
		};


let addactivity = {
    method: 'POST',
    uri: 'http://127.0.0.12:1711/activities',
    body: { Name:"Tadoba Hunt","Date":"21 Mar,25 Mar,4 Apr"},
    json: true,
    jar: cookiejar
    
};

let logout = {
  url: 'http://127.0.0.12:1711/logout',
  method: 'GET',
  jar: cookiejar
};


async function protectedact(){
    try{
        console.log("Logged in as admin");
        let loggedin = await rp(adminlogin);
        console.log("Cookies : " + cookiejar.getCookieString(adminlogin.url));
    }
    catch(e){
        console.log(`Error : ${e}`);
    }
     try{
        console.log("Logged in as member");
        let loggedin = await rp(memberlogin);
        console.log("Cookies : " + cookiejar.getCookieString(memberlogin.url));
    }
    catch(e){
        console.log(`Error : ${e}`);
    }
     try{
        console.log("Logged in as guest");
        let loggedin = await rp(guestlogin);
        console.log("Cookies : " + cookiejar.getCookieString(guestlogin.url));
    }
    catch(e){
        console.log(`Error : ${e}`);
    }
     try{
         let activity = await rp(site1);
        console.log(`Number of activities are ${activity.length}`);
    }
    catch(e){
        console.log(`Error : ${e}`);
    }
      try{
         let addact = await rp(addactivity);
        console.log(`After add activities out , Number of activities are ${addact.length}`);
    }
    catch(e){
        console.log(`Error : ${e}`);
    }
     try{
        let loggedout = await rp(logout);
        console.log("After Logged out, Cookies : " + cookiejar.getCookieString(logout.url));
    }
    catch(e){
        console.log(`Error : ${e}`);
    }
}

protectedact();