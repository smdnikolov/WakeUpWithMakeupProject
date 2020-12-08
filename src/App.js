import React from 'react';
import './App.css';
import Router from './router/Router'
import Header from './components/header'
import Footer from './components/footer'
import ScrollToTop from './components/scroll-to-top'

function App() {

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Router />
      <Footer />
    </div>
  )
}

export default App;
