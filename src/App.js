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
import { Brand, CTA, Navbar } from "./components";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />  {/* done */}
          <Header />  {/* done */}
        </div>        
        <Brand />     {/* done */}
        <WhatGTP3 />  {/* done */}
        <Features />  {/* done */}
        <Possibility />{/* todo */}  {/*  2:11:48        https://www.youtube.com/watch?v=F627pKNUCVQ&ab_channel=JavaScriptMastery*/}
        <CTA />       {/* todo */}
        <Blog />      {/* todo */}
        <Footer />    {/* todo */}
      </div>
    </React.Fragment>
  );
}

export default App;
