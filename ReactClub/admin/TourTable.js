import React, {Component} from "react";
import ReactDOM from "react-dom";
import Tours from "./activities.json";
import styles from "../activity.css";

class TourTable extends React.Component {
	
	
    constructor(props) {
    super(props); 
    this.state = {
 
        clubactivity : [],
		name: "",
        dates: "",
        
	}
        this.add_Name = this.add_Name.bind(this);
        this.add_Date = this.add_Date.bind(this);
        this.add_Act = this.add_Act.bind(this);
        this.del_Act = this.del_Act.bind(this);	
  }
 
		  
	
 add_Name(ele){
        this.setState({
            name: ele.target.value
        })
    }
    
 add_Date(ele){
        this.setState({
            dates: ele.target.value
        })
    }
	
 add_Act() {
     let that = this;
     let values = {
         name: this.state.name,
        dates: this.state.dates 
     }
     fetch('http://localhost:1234/addActivity',{
         method: "POST",
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify(values)
         
     }).then(function(response){
         if(response.ok){       //returns http response
             return response.json();
         }else{
             let errmsg = `Status Code: ${response.status},${response.statusText}`;
             return Promise.reject(errmsg);
             
         }
     }).then(function(data){
         console.log(data);
          that.setState({clubactivity:data});
     }).catch(function(info){
         console.log(info);
     });

    }
    
    componentDidMount(){
        let that = this;
        fetch('http://localhost:1234/activities',{
            method: "GET"
        }).then(function(response){
            if(response.ok){
                return response.json()
            }
            else{
                let errmsg = `Status Code: ${response.status},${response.statusText}`;
                return Promise.reject(errmsg);    
            }
        }).then(function(data){
            that.setState({clubactivity:data})
        }).catch(function(info){
            console.log(info)
        });
    }
    
    
    del_Act(i){
        let that = this;
        let id = this.state.clubactivity[i]._id; //choosing particular activity with i and then choosing its index to delete
        fetch(`http://localhost:1234/activities/${id}`,{
            method:"DELETE",
            headers:{
             'Content-Type':'application/json'
         }   
        }).then(function(response){
         if(response.ok){       //returns http response
             return response.json();
         }else{
             let errmsg = `Status Code: ${response.status},${response.statusText}`;
             return Promise.reject(errmsg);
             
         }
     }).then(function(data){
         console.log(data);
         that.setState({clubactivity:data});
     }).catch(function(info){
         console.log(info);
     });

    }
    
    
		  
//delTour(x) {
//  let choice = this.state.Tours.filter(function(j, v){
//    if(v === x)
//      return false;
//    else
//      return true;
//  })
//  this.setState({Tours: choice});
//}
	
		  
//THead() {
//      let head = Object.keys(this.state.Tours[0])
//      return head.map((key, i) => {
//         return <th className="th" key={i}>{key.toUpperCase()}</th>
//      })
//   }
//
// 
//	 
// TData() {
//	  let that = this;  
//      return this.state.Tours.map((j, v) => {
//         return (
//            <tr>
//               <td><button className = "b" onClick={that.delTour.bind(that, v)}>Delete</button></td>
//               <td>{j.name}</td>
//			   <td>{j.dates}</td>
//            </tr>
//         )
//      })
//   }

	 
	 
  render(){
      
      let that = this;
      let tabledata = this.state.clubactivity.map(function(act,i){
          return (
              <tr key = {i}>
              <td><button className = "b" onClick={that.del_Act.bind(that,i)}>Delete</button></td>
              <td>{act.name}</td>
              <td>{act.dates}</td>
              </tr>
          );
      })
      
          
      
  return ( 
       <div className = "head">
      <h1> Club Activities</h1>
	  <div className = "panel"> 
	  <h2 className ="h2"> Add Activity </h2>
	  <label>Name</label>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className = "acttext" type="text" onChange= {this.add_Name}/><br/><br/>
	  <label>Date</label>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className = "acttext" type="text" onChange= {this.add_Date}/><br/><br/>
	  <button className = "b" onClick={this.add_Act}>Add</button><br/><br />
      
      </div>
	   	
      <h2 className ="h2"> Activities</h2>
    	<table>
        <thead>
	     <tr>
         <th> BUTTON </th>
     	<th>Name</th>
        <th>Dates</th>
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


 