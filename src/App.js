import React, { useEffect, useState } from 'react';
import Loader from './components/loader'
import './App.css';
import Router from './router/Router'
import Header from './components/header'
import Footer from './components/footer'
import ScrollToTop from './components/scroll-to-top'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {


    window.addEventListener('load', function () {
      setLoading(false)
    })


  }, [loading])
  return (
    loading ? <Loader></Loader>
      : <div className="App">
        <Header />
        <ScrollToTop />
        <Router />
        <Footer />
      </div>
  )
}

export default App;
