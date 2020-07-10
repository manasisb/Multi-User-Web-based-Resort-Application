import React, {Component} from "react";
import ReactDOM from "react-dom";
//import places from "../activities.json";
import styles from "../activity.css";

class TourTable extends React.Component {
 
 constructor(props){
 super(props);
	 this.state = {
         clubactivity : []
     }
     
	
}
    //fetch is used to grab the resource from api, in our case using dev proxy we already fetched activities data from server on local host and hence using path : http://localhost:1234/activties
     componentDidMount(){
         let that = this;
       fetch('http://localhost:1234/activities',{
           method : "GET"
       }).then(function(response){
           if(response.ok){
             return response.json();      
           }else{
               let info = `Status Code: ${response.status}`
               return Promise.reject(info)
           }
           
    })
    .then(function(data){
             that.setState({clubactivity: data});
             console.log(data);
         }).catch(function(info){
           console.log(info);
       })
     }
        
	 
  render(){
      let tabledata = this.state.clubactivity.map(function(act,i){
          return (
              <tr key = {i}>
              <td>{act.name}</td>
              <td>{act.dates.join(", ")}</td>
              <td>{act._id}</td>
             </tr>
    );
  });
  return (
	  <div>
	   	<h1> Club Activities</h1>
      	<table>
      <thead>
      <tr>
     	<th>Name</th>
        <th>Dates</th>
        <th>ID</th>
      </tr>
      </thead>
	  <tbody>
         {tabledata}
      </tbody>
      </table>
	  
	  </div>
  );
}
}


export default TourTable;


 