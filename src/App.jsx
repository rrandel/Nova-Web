import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Plans2025 from "./Pages/posts/plans-for-2025";
import Testing from "./Pages/posts/Testing";
import Me from "./Pages/posts/Me";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Routes>
          <Route path="/posts/2024/plans-for-2025/" element={<Plans2025 />} />
          <Route path="/posts/2024/integration/" element={<Testing />} />
          <Route path="/posts/2024/Me/" element={<Me />} />
        </Routes>
      <Footer />
    </div>
  );
};
export default App;