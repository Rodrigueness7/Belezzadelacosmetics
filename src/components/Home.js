import React from "react"


 function Home(){

      function onload(){
        console.log('carregado')
      }

    return(
      
       <section onLoad={onload} id="home">
        <div>
          <h1 className="title">Seja Bem vindo a Bellezzadela Cosmetics</h1>
       </div> 
       </section>
    )
 }

 export default Home;