import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";

import Series from "./pages/Series.jsx";
import Peliculas from "./pages/Peliculas.jsx";

import NavBar from "./components/NavBar.jsx";

function App() {
  const location = useLocation();
  const hideNavOnPaths = ["/"];

  const shouldShowNav = !hideNavOnPaths.includes(location.pathname);

  return (
    <div className="grid h-[100dvh] grid-rows-[auto_1fr_auto]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>
    </div>
  );
}

export default App;
