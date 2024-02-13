import React, { useState } from 'react';
import Header from '../../Com/Header';
import Login from '../../Com/Login/Login';
import MainContent from '../../Com/Main Ct/Main Content';
import Footer from '../../Com/Footer';
import MainBanner from '../../Com/MainBanner/MainBanner';
import './Home.css';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="home-container">
      <Header />
      <div className="body-container">
        {isLoggedIn ? (
          <>
            <MainContent isLoggedIn={isLoggedIn} />
            <MainBanner />
          </>
        ) : (
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
