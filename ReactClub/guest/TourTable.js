import React, {Component} from "react";
import ReactDOM from "react-dom";
import places from "../activities.json";
import styles from "../activity.css";

class TourTable extends React.Component {
 
 constructor(props){
 super(props);
	 this.state = {places :  places}
	 this.renderTableHeader = this.renderTableHeader.bind(this);
	 this.renderTableData = this.renderTableData.bind(this);
	
}
	
	 
	
renderTableHeader() {
      let header = Object.keys(this.state.places[0])
      return header.map((key, index) => {
         return <th className="th" key={index}>{key.toUpperCase()}</th>
      })
   }

 
	 
  renderTableData() {
      return this.state.places.map((place, index) => {
         return (
            <tr>
               <td>{place.name}</td>
               <td>{place.dates}</td>
            </tr>
         )
      })
   }
	 
	 
  render(){
  return (
	  <div>
	   	<h1> Club Activities</h1>
      	<table>
     <thead>
     	{this.renderTableHeader()}
      </thead>
	  <tbody>
      {this.renderTableData()}
      </tbody>
      </table>
	  
	  </div>
  );
}
}


export default TourTable;


 