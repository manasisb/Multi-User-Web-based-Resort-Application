import React from "react";
import ReactDOM from "react-dom";
import GuestApp from "./guest/GuestApp.js";
import MemberApp from "./member/MemberApp.js";
import AdminApp from "./admin/AdminApp.js";

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        role: "guest",
        email: null,
        password: null,
        }; 
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    

    setEmail(event){
        this.setState({
            email: event.target.value
        });
    }
    
    setPassword(event){
        this.setState({
            password: event.target.value
        });
    }
    
    
    
    signIn() {
        let that = this;
        console.log("Button pressed");
        
        if(this.state.email === "tirrivees1820@outlook.com" && this.state.password === "49OqspUq"){
            console.log('admin');
            console.log(this.state);
            this.props.Success("admin",{email: this.state.email, password: this.state.password});
        }
        else if(this.state.email === "chihuahua1899@gmail.com" && this.state.password === "'E`Gj3iJ"){
            console.log('member');
            this.props.Success("member",{email: this.state.email, password: this.state.password});
        }   
        else {
            console.log('guest');
            this.props.Success("guest",{email: this.state.email, password: this.state.password});
        }
        fetch('/login',{
            method:'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(function(response){
            if(response.ok){
                return response.json();
            } else{
                let info =`Status Code: ${response.status}, ${response.statusText}`;
                console.log('response ',response);
                return Promise.reject(info);
            }
            console.log(response.json());
            return response.json();
        }).then(function(Info){
            console.log('Info',Info);
            that.props.Success(Info.role,Info)
        })
    }
                
  
  render() {
    return (
    <div>
    <main className ="main_tour">
        <h1>Login</h1>
      <form id = "luxury">
        
        Email : <input type="text" ref="email" id = "email" onChange={this.setEmail} placeholder="abcd@gmail.com" /><br/>
        Password: <input type="password" ref="password" id = "pwd" onChange={this.setPassword} placeholder="password" /><br/>
        <button onClick={this.signIn}>LOGIN</button>
        <br/>
            <br/>
      </form>
   
     <br/>
     <br/>
     </main>
     </div>
        )
        
  }
    }



export default Login;