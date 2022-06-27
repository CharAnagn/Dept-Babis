import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { NavBar } from "./components/layout/NavBar";
import { HeroSection } from "./components/sections/HeroSection";
import { HomeSection } from "./components/sections/HomeSection";
import {Overlay} from './components/animationGsap/Overlay.jsx';
import {Footer} from "./components/layout/Footer"

function App() {
  const theme = {
    colors: {
      grey: "#646464",
      black: "#121212",
      white: "#FFFFFF",
      purple: "#5115F7",
      background: "#E5E5E5",
    },
    text: {
      xxxl: "200px",
      xxl: "70px",
      xl: "60px",
      l: "48px",
      m: "34px",
      s: "26px",
      xs: "18px",
      xxs: "16px",
    },
    mobile: "768px",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Overlay />
        <GlobalStyles />
        <NavBar />
        <HeroSection />
        <HomeSection />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
