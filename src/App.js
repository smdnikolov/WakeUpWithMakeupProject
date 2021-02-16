import React, { useEffect, useState } from 'react';
import Loader from './components/loader';
import './App.css';
import Router from './router/Router';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scroll-to-top';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      '/static/media/1j+ojFVDOMkX9Wytexe43D6kifCCrhBGkBbNwXs1M3EMoAJtliAvhPds9vk5.1e965195.png'
    ).then(() => setLoading(false));
  });

  return (
    <div className="App">
      {!loading ? (
        <>
          <Header />
          <ScrollToTop />
          <Router />
          <Footer />
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default App;
