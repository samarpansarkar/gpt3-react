import './App.css';
import React from'react';

import Navbar from './components/Navbar/Navbar';
import Feature from './components/Feature/Feature';
import Article from './components/Article/Article';
import Brand from './components/Brand/Brand';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Feature />
      <Article />
      <Brand />
      <CTA  />
    </React.Fragment>
  );
}

export default App;
