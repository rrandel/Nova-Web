import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Docs from "./Pages/Docs";
import Plans2025 from "./Pages/posts/plans-for-2025"
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/posts/2024/plans-for-2025/" element={<Plans2025 />} />
        </Routes>
      <Footer />
    </div>
  );
};
export default App;