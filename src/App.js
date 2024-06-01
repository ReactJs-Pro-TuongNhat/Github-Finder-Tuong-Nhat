import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { useStore } from "./components/store";

const App = () => {

  const [state] = useStore();

  useEffect(() => {
    document.body.className = state.mode === "light" ? 'bg-light' : 'bg-dark';
  }, [state.mode]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
};
export default App;