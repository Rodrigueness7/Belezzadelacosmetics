import React from "react";
import { Link } from "react-router-dom";

function Header(){
    
    return(
      <div className="header">
         <div >
          <Link className="Link" to='/' onClick={(e) => {
             e.preventDefault();
             let home = document.getElementById('home');
             home.scrollIntoView({behavior: "smooth", block: "start"});
          }}>Home</Link>
 
          <Link className="Link" to="/" onClick={(e) => {
             e.preventDefault();
             let about = document.getElementById('about');
             about.scrollIntoView({behavior: 'smooth', block: 'start'});
          }}>About</Link>

          <Link className="Link" to="/" onClick={(e) =>{
            e.preventDefault();
            let locale = document.getElementById('locale');
            locale.scrollIntoView({behavior: 'smooth', block: "start"})
          }}>Locale</Link>
          </div>
      </div>
    )
 }

 export default Header