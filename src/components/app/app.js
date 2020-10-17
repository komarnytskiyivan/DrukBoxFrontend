import React from 'react';
import './app.css';
import Header from '../header';
import Footer from '../footer';
import ContentMain from '../content-main';

const App = () => {
  return (
    <div className="App">
    <Header />
    <ContentMain />
    <Footer />
    </div>
  );
}

export default App;
