// import logo from './logo.svg'
// import  components  from "react";
import "./App.css";


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from  "./components/Navbar/Navbar";
import Alroutes from './Alroutes'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

       <Alroutes/>
      </Router>
    </div>
  );
}

export default App;
