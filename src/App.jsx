import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Docs from "./Pages/Docs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      <Footer />
    </div>
  );
};
export default App;