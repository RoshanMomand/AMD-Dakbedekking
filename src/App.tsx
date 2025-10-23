import Contact from "./components/Contact";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Process from "./components/Process";
import Services from "./components/Services";
import Why from "./components/Why";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Why />
      <Process />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
