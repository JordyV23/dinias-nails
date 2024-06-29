import { CallToAction } from "./components/CallToAction";
import { CardSection } from "./components/CardSection";
import { Carrusel } from "./components/Carrusel";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavComponent } from "./components/Navbar";
import { Wave } from "./components/Wave";

function App() {
  return (
    <>
      <NavComponent />
      <Hero />
      <Wave />
      <CardSection />
      <Carrusel />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
