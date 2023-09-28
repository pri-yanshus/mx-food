import "./App.css";
import Footer from "./components/Footer";

import Headers from "./components/Headers";
import LandingPage from "./components/LandingPage";
import Story from "./components/Story";
import Fruites from "./components/Fruites";
import Section6 from "./components/Category";
import Item from "./components/Item";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Headers />
      <LandingPage />
      <Story />
      <Item />
      <Fruites />
      <Testimonial />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
