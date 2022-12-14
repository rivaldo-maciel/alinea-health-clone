import { useEffect } from 'react';
import Aos from 'aos';
import AboutScheduling from './components/AboutScheduling';
import EmployeeSupport from './components/EmployeeSupport';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWeDo from './components/HowWeDo';
import LastPurpleSection from './components/LastPurpleSection';
import Menu from './components/Menu';
import WhatWeDo from './components/WhatWeDo';
import MenuContextProvider from './context/MenuContextProvider';
import GlobalStyles from './GlobalStyles';
import './App.css';

function App() {
  useEffect(() => {
    Aos.init({ anchorPlacement: 'top-center', duration: 2000, disable: 'mobile' });
  })
  return (
    <>
      <GlobalStyles />
      <MenuContextProvider>
        <Header />
        <Hero />
        <WhatWeDo />
        <EmployeeSupport />
        <AboutScheduling />
        <HowWeDo />
        <LastPurpleSection />
        <Footer />
        <Menu />
      </MenuContextProvider>
    </>
  );
}

export default App;
