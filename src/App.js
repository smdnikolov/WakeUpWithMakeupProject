import React, { useEffect, useState } from 'react';
import Loader from './components/loader'
import './App.css';
import Router from './router/Router'
import Header from './components/header'
import Footer from './components/footer'
import ScrollToTop from './components/scroll-to-top'

function App() {
  const [loading, setLoading] = useState(true)

  const isFontLoaded = () => {
    document.fonts.onloadingdone = () => {
      setLoading(false)
    }
  }

  useEffect(() => {
    isFontLoaded()
  })

  return (
    <div className="App">
      {!loading ? <>
        <Header />
        <ScrollToTop />
        <Router />
        <Footer />
      </>
        : <Loader></Loader>}
    </div>
  )

}

export default App;
