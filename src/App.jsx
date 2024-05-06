import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
