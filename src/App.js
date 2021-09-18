import React from "react";
import "./App.css"
import Header from "./components/header"
import { BrowserRouter,Route,Switch } from "react-router-dom"
import Home from './pages/Home'
import CounterPage from "./pages/CounterPage"
import Yoga from './pages/Yoga'


function App(){
  
  
  return(
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
      <Route path='/' component={Home} exact/>
      <Route path='/counter' component={CounterPage} />
      <Route path='/yoga' component={Yoga} />
    </BrowserRouter>
  )
}

export default App;