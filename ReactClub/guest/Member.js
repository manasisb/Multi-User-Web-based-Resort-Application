import React, {Component} from "react";
import ReactDOM from "react-dom";
import styles from '../style.css';

function Member(){
    
        return (
        <div>
        <h2 className = "h2">Apply for Membership Now!!!</h2>
       <main id = "membership">
         <form className = "membership">
             
          <label for ="firstname">FirstName:</label>
          <input type="text" id="firstname" ></input><br />
            
          <label for ="lastname">LastName:</label>
          <input type="text" id="firstname" ></input><br />
             
          <label for ="email">EmailID:</label><br />  
          <input type="text" id="emailid" ></input><br />
            
         <label for ="password">Password:</label>
          <input type="password" id="firstname" ></input><br />
           
           <label for ="Safari Number">Context</label><br />
           <textarea cols="25" rows="4" id="context" placeholder="Your stuff here"> </textarea><br />
             
            <label for="skill">Experience</label><br />
            
            <select id="skill"><br />
              <option value="Jungle Safari">Jungle Safari</option>
              <option value="Yoga">Yoga</option>
              <option value="Cultural Evening">Cultural Evening</option>
              <option value="Camp Fire">Camp Fire</option>
            </select>  
            
            <button id = "apply">Apply Now!</button>
         </form>
         
        </main>
         <footer className = "f">
         <p><span className ="em"></span>Copyright &copy; 2020 ManasiRajiv Weginwar(wa3822)<span className ="em"></span> </p>
        </footer>
        </div>
        )
}

export default Member;