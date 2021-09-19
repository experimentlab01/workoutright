import React from "react";
import "./App.css"
import Header from "./components/header/header"
import { BrowserRouter,Route } from "react-router-dom"
import Home from './pages/Home'
import CounterPage from "./pages/CounterPage"
import Yoga from './pages/Yoga'
import About from "./pages/about";

function App(){
  
  
  return(
    <BrowserRouter>
      <div>
        <Header/>
      </div>
      <Route path='/' component={Home} exact/>
      <Route path='/counter' component={CounterPage} />
      <Route path='/yoga' component={Yoga} />
      <Route path='/about' component={About} />
    </BrowserRouter>
  )
}

export default App;