const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUser2.json');
let nRounds = 15;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

users.map(function (u){
    var salt = bcrypt.genSaltSync(nRounds)
    var hashpass = bcrypt.hashSync(u.password, salt);
    hashedUsers.push({"firstName" : u.firstName,"lastName":u.lastName,"email": u.email,"hashedpass" : hashpass, 
                     "role": u.role});
  
});

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));