import React from 'react'
import AppSection from './AppSection';
import CardSection from './CardSection';
import Footer from './Footer';
import HeroMain from './HeroMain';
import NavBar from './NavBar';

const WebsiteApp = () => {
  return (
    <div>
      <NavBar />
      <HeroMain />
      <AppSection />
      <CardSection />
      <Footer />
    </div>
  )
}

export default WebsiteApp;