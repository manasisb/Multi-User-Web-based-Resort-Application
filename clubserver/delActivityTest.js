const rp = require('request-promise-native');
const express = require('express');
const app = express();

var site1 = {
		    method: 'GET',
		    uri: 'http://127.0.0.12:1711/activities',
		    json: true
		};

var site2 = {
		    method: 'DELETE',
		    uri: 'http://127.0.0.12:1711/activities/0USxxlHREyGq0xno',
		    json: true
		};

var site3 = {
		    method: 'DELETE',
		    uri: 'http://127.0.0.12:1711/activities/X3iLUNQAcZ4Xd5ad',
		    json: true
		};

//var site4 = {
//		    method: 'DELETE',
//		    uri: 'http://127.0.0.12:1711/activities',
//            body: { Name:"Swimming Camp HUNT","Date":"25 Mar,28 Mar,10 Apr,20Mar,30Apr"},
//		    json: true
//		};


async function delAct(){
    
    try{
        
        console.log("Initial GET of activitites request");
        
        let res = await rp(site1);
        
        console.log(`Currently ${res.length} activities`);
    }
    catch(e){
        console.error(e);
    } 
    try{
        console.log("First good delete activity");
        
        let res= await rp(site2);
        
    }
    catch(e){
        console.error(e);
    }
      try{
        
        let res = await rp(site1);
        
        console.log(`Currently ${res.length} activities`);
    }
    catch(e){
        console.error(e);
    }
     try{
         console.log("Another Good delete Activity ");
         
        res = await rp(site3);
         
    }
    catch(e){
        console.error(e.message);
    }
      try{
          
        let res = await rp(site1);
        
        console.log(`Currently ${res.length} activities`);
    }
    catch(e){
        console.error(e);
    }
}

delAct();