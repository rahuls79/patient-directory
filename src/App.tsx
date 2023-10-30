import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
