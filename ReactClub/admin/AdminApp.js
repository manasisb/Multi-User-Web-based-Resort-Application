import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.js";
import About from "./About.js";
import { Admin, Resource } from 'react-admin';
import GuestApp from "../guest/GuestApp.js";
import MemberApp from "../member/MemberApp.js";
import ClubActivity from "./ClubActivity.js";
import Member from "./Member.js";
import Login from "../Login.js";
import Tours from "./activities.json";


class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role:"admin",show: "Home"}
    
		this.setShowingHome = this.setShowingHome.bind(this);
		this.setShowingAbout = this.setShowingAbout.bind(this);
        this.setShowingMemActivity = this.setShowingMemActivity.bind(this);
		this.setShowingClubActivity = this.setShowingClubActivity.bind(this);
        this.setShowLogin = this.setShowLogin.bind(this);
		this.signOut = this.signOut.bind(this);
    }
	
		setShowingHome()
	{
		this.setState({
			show: "Home"
		});
	}
	

      setShowingAbout()
	{
		this.setState({
		show: "About"
		});
	}
    
    setShowingClubActivity()
	{
		this.setState({
			show: "ClubActivity"
			
		});
	}
    
    setShowingMemActivity()
	{
		this.setState({
			show: "Member"
			
		});
	}
    
     setShowLogin(){
        this.setState({
            show: "Login"
        });
    }
	
     //Logout function
	 signOut() {  
		 let that = this;
	 fetch('/logout')
   .then(function(response){
            if(response.ok){
                return response.json();
            } else{
                let info =`Status Code: ${response.status}, ${response.statusText}`;
                console.log('response ',response);
                return Promise.reject(info);
            }
        })
        .then(function(Info){
          that.props.Logout("guest",null);
        })
        .catch(function(msg){
            console.log("Something bad "+msg);
        })	 
  }
	
   
    render() {
        return( 
		
<div className = "First">
<nav className = "NavBar">
<ul className = "ul">
    
<li className = "list"> <a className = "atag" onClick = {this.setShowingHome}> Home </a></li>
<li className = "list"> <a className = "atag" onClick = {this.setShowingAbout}> About </a> </li>
<li className = "list"> <a className = "atag" onClick = {this.setShowingMemActivity}>Members Only</a> </li>
<li className = "list"> <a className = "atag" onClick = {this.setShowingClubActivity}> Edit Activtites </a> </li>
<li className = "list"> <a className = "atag" onClick={this.signOut}> Logout </a> </li>
</ul>
</nav>

{this.state.show === "Home" && (
			<Home/>
		)}

{this.state.show === "About" && (
			<About/>
		)}
			
{this.state.show === "Member" && (
	<Member />
		)}
    
{this.state.show === "ClubActivity" && (
	<ClubActivity />
		)}
	

{this.state.email === null && (
         <GuestApp/>
         )}
  
    
</div>);
    }
}

export default AdminApp;