import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/"><Login/></Route>
          <Route path="/signup"><Signup/></Route>
          <Route path="/home"><Home/></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;