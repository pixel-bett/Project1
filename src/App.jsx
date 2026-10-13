import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Services from './pages/Services';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Login" element={<Login />} />

        {/* <Route path='/services' element={<Services/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
