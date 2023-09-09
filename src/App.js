import "./App.css";
import React from "react";

import {
  Footer,
  Header,
  Blog,
  Features,
  Possibility,
  WhatGTP3,
} from "./containers";
import {Brand, CTA, Navbar } from "./components";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGTP3 />
        <Features />
        <Possibility/>
        <CTA />
        <Blog />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
