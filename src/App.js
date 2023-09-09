import './App.css';
import React from'react';

import { Article, Brand, CTA, Feature, Navbar } from './components';

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
