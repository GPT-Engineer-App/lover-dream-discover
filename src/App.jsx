import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Tour from "./pages/Tour.jsx";
import Music from "./pages/Music.jsx";
import Merchandise from "./pages/Merchandise.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/tour" element={<Tour />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/merchandise" element={<Merchandise />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;