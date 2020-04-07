import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="pr-0 pl-0">
      <div className="main-content">
        <Navbar />
        <Header />
        <div className="container">
          <Projects />
          <Skills />
        </div>
        <Footer />
      </div>
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
