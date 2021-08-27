import { ContentPricipal, NavBar, Portfolio} from "./style/Principal";
import Profile from "./components/navbar/Profile";
import Sections from "./components/navbar/Sections";
import SocialNetworks from "./components/navbar/SocialNetworks";
import Welcome from "./components/content/Welcome";
import AboutMe from "./components/content/AboutMe";
import WhatIDo from "./components/content/WhatIDo";
import PortfolioSec from "./components/content/Portfolio";
import Contact from "./components/content/Contact";


function App() {
  return (
    <ContentPricipal>
      <NavBar>
        <Profile />
        <Sections /> 
        <SocialNetworks />       
      </NavBar>
      <Portfolio>
        <Welcome />
        <AboutMe />
        <WhatIDo />
        <PortfolioSec />
        <Contact />
      </Portfolio>
    </ContentPricipal>
  );
}

export default App;
