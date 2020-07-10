const rp = require('request-promise-native');

var site = {
    url : 'http://127.0.0.12:1711/activities',
    method : 'GET',
    json: true    
};


async function getact(){
    
    try{
        let res = await rp(site);
        console.log(`Currently ${res.length} activities`);
        res.map(function(u,i){
            console.log(`Activity ${i} Name:${u.name}, Date:${u.dates} , _id: ${u._id}`);
        });
    }catch(e){
        console.log(e.message);
    }
    
    
}

getact();

//rprom(site).then(res => {
//    for (var i=0; i< res.length; i++){
//    console.log(`Activity ${i+1} name: ${JSON.stringify(res[i]['Name'])}, date: ${JSON.stringify(res[i]['Date'])}`);
//    }
//})


