import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
