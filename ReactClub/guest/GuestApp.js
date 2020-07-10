import React, {Component} from "react";
import ReactDOM from "react-dom";
import Home from "./Home.js";
import About from "./About.js";
import ClubActivity from "./ClubActivity.js";
import Member from "./Member.js";
import Login from "../Login.js";
import styles from "../activity.css";

class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role:"guest",show: "Home"};
        
        this.setShowingHome = this.setShowingHome.bind(this);
		this.setShowingAbout = this.setShowingAbout.bind(this);
        this.setShowingMember = this.setShowingMember.bind(this);
        this.setShowingClubActivity = this.setShowingClubActivity.bind(this);
       // this.setShowingPending = this.setShowingPending.bind(this);
		this.setShowingLogin = this.setShowingLogin.bind(this);
		this.setShowingTours = this.setShowingTours.bind(this);
		this.Success = this.Success.bind(this);
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
    
    setShowingMember()
	{
		this.setState({
		show: "Member"
		});
	}
    
    setShowingLogin()
	{
		this.setState({
		show: "Login"
		});
	}
    
//    setShowingPending()
//	{
//		this.setState({
//		show: "Pending"
//		});
//	}
    
    setShowingTours()
	{
		this.setState({
			show: "Tours"
			
		});
	}
    
    setShowingClubActivity()
	{
		this.setState({
			show: "ClubActivity"
			
		});
	}
    
     Success(role, Info){
        this.props.Login(role,Info);
    }
	
    render() {
		return(
            
        
<div className = "First">
<nav className = "NavBar">
<ul className = "ul">
<li className = "list"> <a className = "atag" onClick = {this.setShowingLogin.bind(this)}>Login Page </a> </li>
<li className = "list"> <a className = "atag" onClick = {this.setShowingHome.bind(this)}> Home </a></li>
<li className = "list"> <a className = "atag" onClick = {this.setShowingAbout.bind(this)}> About </a> </li>
<li className = "list"> <a className = "atag" onClick = {this.setShowingMember.bind(this)}>ClubMembership</a> </li>
<li className = "list"> <a className = "atag" onClick = {this.setShowingClubActivity.bind(this)}> Club Activtites </a> </li>
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

{this.state.show === "Tours" && (
	<ClubActivity />
		)}
	
{this.state.show === "Login" && (
 <Login Success = {this.Success} />
         )} 
</div>
   
);
   }
}
export default GuestApp;