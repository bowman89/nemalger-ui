import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Funktioner from "./Pages/Funktioner";
import Referencer from "./Pages/Referencer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funktioner" element={<Funktioner />} />
        <Route path="/referencer" element={<Referencer />} />
        
      </Routes>
    </Router>
  );
}

export default App;
