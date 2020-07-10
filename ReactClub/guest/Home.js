import React, {Component} from "react";
import ReactDOM from "react-dom";
import resort from "../images/Resort_img.jpg";
import styles from '../style.css';

function Home(){
    
        return (
            <div className = "App">
            <header>
          <h2 className = "h2">WELCOME TO TADOBA RESORT CLUB</h2>
        </header>
          <main id = "luxury">
            <h3 className = "h3">LUXURY CLUB</h3>
          <p className = "p"> Tadoba Resort club is one of the exclusive club in Tadoba that gives a feeling of everlasting pleasure. So, get ready for discovering that ‘holiday’ with warmth of home comforts and modern facilities, many miles from home ends here at Tadoba Resort club. Tadoba Resort club is a place where you refresh yourself with musical nature, wilderness experiences, chirp rings of the birds and wonderful sightings and roar of the Tigers. At Tadoba Resort club you do not just stay at Tadoba, but you co-exist with the Tiger.</p>
              
        <h3 className = "h3">EXPLORE TADOBA</h3>
         <p className = "p">Tadoba-Andhari Tiger Reserve is a pristine and unique eco-system situated in the Chandrapur district of the Maharashtra State of India. Tadoba gets the reputation of the oldest national park of Maharashtra. It was declared as a sanctuary in 1955. 'Tadoba-Andhari Tiger Reserve', total area of 625.40 sq. kms. TATR has total 109 Tigers in Core ( 70 ) and Buffer area with the density of 9.05 sq. km per Tiger. The name Tadoba was derived from the tribal God 'Taru', who was believed to be fallen dead, fighting with a Tiger. The temple of tribal God Taru is situated on the bank of Tadoba Lake. Andhari name is given because Andhari River flows through the forest.</p>
        </main>
        <p className = "picture">
        <img src = {resort} alt="ClubImage" width = "1150" height="350" />
        </p>  
        <footer className = "f">
         <p><span className ="em"></span>Copyright &copy; 2020 ManasiRajiv Weginwar(wa3822)<span className ="em"></span> </p>
        </footer>
         </div>
        
        );
}

export default Home;