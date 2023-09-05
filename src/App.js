import React from "react";
import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Locale from "./components/Locale";
import './App.css'


function App(){
    return(
       <BrowserRouter>
          <Header/>
          <Home/>
          <About/>
         <Locale/>
       </BrowserRouter>

    );
}

export default App;


