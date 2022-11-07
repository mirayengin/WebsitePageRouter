import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Subscribe from "./components/subscribe/Subscribe";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HTML from "../src/pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";
// import Card from "./components/card/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
    
            <Route path="/html" element={<HTML />} />
            <Route path="/css" element={<Css />} />
            <Route path="/logo" element={<Logo />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
