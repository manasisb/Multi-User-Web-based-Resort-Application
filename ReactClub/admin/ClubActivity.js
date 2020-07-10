import React, {Component} from "react";
import ReactDOM from "react-dom";
import TourTable from "./TourTable.js";
import Tours from "./activities.json";
import styles from "../activity.css";

class ClubActivity extends React.Component {
 
  constructor(props){
     super(props);
//	 this.state = {Tours :  Tours}
	}
	
 
	render()
	{
		return (<TourTable />)
		
	}
				
}
				
export default ClubActivity;
				