import React from "react";
import { Link } from "react-router-dom";

function Header(){
    
    return(
      <div className="header">
         <div> 
          <i class="bi bi-house icon"></i>
          < Link className="Link" to='/' onClick={(e) => {
             e.preventDefault();
             let home = document.getElementById('home');
             home.scrollIntoView({behavior: "smooth", block: "start"});
            }}>Início</Link>
        
          <i class="bi bi-file-person icon"></i>
          <Link className="Link" to="/" onClick={(e) => {
             e.preventDefault();
             let about = document.getElementById('about');
             about.scrollIntoView({behavior: 'smooth', block: 'start'});
          }}>Sobre</Link>

          <i class="bi bi-geo-alt-fill icon"></i>
          <Link className="Link" to="/" onClick={(e) =>{
            e.preventDefault();
            let locale = document.getElementById('locale');
            locale.scrollIntoView({behavior: 'smooth', block: "start"})
          }}>Localização</Link>
          </div>
      </div>
    )
 }

 export default Header