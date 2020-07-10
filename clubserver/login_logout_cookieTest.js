const rp = require('request-promise-native');

let cookieJar = rp.jar(); // Use to store cookies inbetween sessions

let activities = {
  url: 'http://127.0.0.12:1711/activities',
  method: 'GET',
  json: true,
  jar: cookieJar
};

let logout = {
  url: 'http://127.0.0.12:1711/logout',
  method: 'GET',
  jar: cookieJar
};

let site1 = {
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
  jar: true
};

let site2 = {
  url: 'http://127.0.0.12:1711/login',
  method: 'POST', 
  body: {
    "firstName": "Demetrice",
    "lastName": "Parker",
    "email": "chihuahua@gmail.com",
    "password": "'E`Gj3iJ",
    "role": "member"
  },
  json: true,
  jar: true
};

let site3 = {
  url: 'http://127.0.0.12:1711/login',
  method: 'POST', 
  body: {
    "email": "bouto2050@outlook.com",
        "password": "`$b5/_>Kmmmmmmmmmmmmm"
  },
  json: true,
  jar: true
};

async function loginNow() {
    try{
        console.log("Login test 1 : Good login");
        var activity = await rp(activities);
        console.log("called actvitiy, Cookies : " + cookieJar.getCookieString(activities.url));
        var goodLogin = await rp(site1);
//        console.log(`Good Login result : ${JSON.stringify("firstName: " + site1.body["firstName"] + " lastName: " + site1.body["lastName"] + " email: "+ site1.body["email"] + " role: " + site1.body["role"])}`);
        console.log("\nAfter good login, Cookies : ", cookieJar.getCookieString(site1.url));
    }
    catch(e){
        console.log(`Error: ${e}`);
    }
    try{
         let logoutcheck = await rp(logout);
        console.log("After logout, Cookies : ", cookieJar.getCookieString(logout.url));
    }
     catch(e){
        console.log(`Error: ${e}`);
    }
    
    try{
         console.log("\nLogin test 2: Bad Email");
          var activity = await rp(activities);
          console.log("called activity, Cookies : " + cookieJar.getCookieString(activities.url));
          var emailProblem = await rp(site2);
//          console.log(`Good Login result : ${JSON.stringify("firstName: " + site2.body["firstName"] + " lastName: " + site2.body["lastName"] + " email: "+ site2.body["email"] + " role: " + site2.body["role"])}`);
          console.log("After login test 2, Cookies : ", cookieJar.getCookieString(site2.url));
        }
     catch(e){
        console.log(`Error: ${e}`);
    }
    try{
        console.log("\nLogin test 3: Bad password");
       var activity = await rp(activities);
      console.log("called activity, Cookies : " + cookieJar.getCookieString(activities.url));
      var passwordProblem = await rp(site3);
//      console.log(`Good Login result : ${JSON.stringify("firstName: " + site3.body["firstName"] + " lastName: " + site3.body["lastName"] + " email: "+ site3.body["email"] + " role: " + site3.body["role"])}`);
      console.log("\nAfter login test 3, Cookies : ", cookieJar.getCookieString(site3.url));
    }
     catch(e){
        console.log(`Error: ${e}`);
    }
}

loginNow();
    
    
    
    