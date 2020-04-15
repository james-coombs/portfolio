import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slides from "./components/caurosel/Slides";
import Lapse from "./components/Lapse";
import Footer from "./components/Footer";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid className="pr-0 pl-0">
      <div className="main-content">
        <Navbar />
        {/* <Header /> */}
        <Slides />
      </div>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
