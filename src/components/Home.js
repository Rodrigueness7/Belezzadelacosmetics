import React from "react"


 function Home(){

    return(
       <section id="home">
          <div className="container d-flex flex-column justify-content-center"> 
          <img className="img-fluid logo"  alt="logo" src="/assets/logo.png"></img>
          <div className="d-flex flex-column">
            <div>
              <a href="https://instagram.com"><i className="bi bi-instagram icon-social"></i></a>
              <a href="https://web.whatsapp.com/"><i className="bi bi-whatsapp icon-social"></i></a>
            </div>
          </div> 
          </div>
       
       </section>
    )
 }

 export default Home;