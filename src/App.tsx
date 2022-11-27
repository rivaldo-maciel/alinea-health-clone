import './App.css';
import AboutScheduling from './components/AboutScheduling';
import EmployeeSupport from './components/EmployeeSupport';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWeDo from './components/HowWeDo';
import WhatWeDo from './components/WhatWeDo';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <WhatWeDo />
      <EmployeeSupport />
      <AboutScheduling />
      <HowWeDo />
    </>
  );
}

export default App;
