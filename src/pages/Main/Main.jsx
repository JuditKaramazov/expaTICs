import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import { light } from '../../styles/Themes';

import Navigation from './components/Navigation/Navigation';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Goal from './sections/Goal/Goal';
import Features from './sections/Features/Features';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function Main() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Goal />
        <Features />
        <Footer />
        <ScrollToTop />
      </ ThemeProvider>
    </>
  );
}

export default Main;
