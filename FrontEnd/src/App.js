import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewsProvider } from "./Components/NewsContext";
import FullNews from "./Components/FullNews";
import HomePage from "./Components/HomePage";
import Nav from "./Components/Nav";

function App() {
  return (
    <NewsProvider>
      <div>
        <Router>
          <Nav />
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/fullnews">
            <FullNews />
          </Route>
        </Router>
      </div>
    </NewsProvider>
  );
}

export default App;
