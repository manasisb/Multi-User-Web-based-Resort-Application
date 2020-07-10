import React from "react";
import ReactDOM from "react-dom";
import GuestApp from "./guest/GuestApp.js";
import MemberApp from "./member/MemberApp.js";
import AdminApp from "./admin/AdminApp.js";
import Login from "./Login.js";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", user: null}; 
		
		this.Login = this.Login.bind(this);
        this.Logout = this.Logout.bind(this);
	}
	
	Login(role, Info){
        if(role === "admin"){
            this.setState({
                role : "admin",
                user: "Info",
            })
        } else if(role === "member"){
            this.setState({
                role : "member",
                user: "Info",
            })
        }
    }
    
    Logout(){
        this.setState({
            role: "guest",
            user: null,
        })
        
    }
    
    render() {
        return(
        <div>
            {this.state.role === "guest" && (
             <GuestApp Login = {this.Login} />
             )}
            {this.state.role === "admin" && (
             <AdminApp Logout = {this.Logout}/>
             )}
            {this.state.role === "member" && (
             <MemberApp Logout = {this.Logout}/>
             )}
        </div>
        )
        
    }
}
   
ReactDOM.render(<App/>, document.getElementById("root"));

export default App;