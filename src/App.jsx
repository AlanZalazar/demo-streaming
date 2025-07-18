import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Details from "./pages/Details.jsx";
import Features from "./pages/Features.jsx";
import Projects from "./pages/Projects.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();
  const hideNavOnPaths = ["/"];

  const shouldShowNav = !hideNavOnPaths.includes(location.pathname);

  return (
    <div className="grid h-[100dvh] grid-rows-[auto_1fr_auto]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details/" element={<Details />} />
        <Route path="/features" element={<Features />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
