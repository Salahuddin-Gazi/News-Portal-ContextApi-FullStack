import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NewsProvider } from "./Components/NewsContext";
import FullNews from "./Components/FullNews";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/Nav";
import Admin from "./Components/Admin";
import CurrentNews from "./Components/CurrentNews";
import AddNews from "./Components/AddNews";
import DeleteNews from "./Components/DeleteNews";
// import { Navbar } from "react-bootstrap";

function App() {
  return (
    <NewsProvider>
      <div>
        <Router>
          <NavBar />
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/fullnews">
            <FullNews />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/currentNews">
            <CurrentNews />
          </Route>
          <Route path="/addNews">
            <AddNews />
          </Route>
          <Route path="/deleteNews">
            <DeleteNews />
          </Route>
        </Router>
      </div>
    </NewsProvider>
  );
}

export default App;
