import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../style.css';
import TourTable from "./TourTable.js";
import Tours from "../activities.json";

class AdminActivity extends React.Component {
	
		constructor(props) {
    super(props);
						
    this.state = {
            Tours: Tours,
		    Name: "",
            Date: "",
        }
						
	 this.THead = this.THead.bind(this);
	 this.TData = this.TData.bind(this);
		
  }
    render()
	{
		return (<TourTable />)
		
	}
}
    
export default AdminActivity;