// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Layout/Navbar';
import LandingPage from './components/Landingpage/index';
import CarsPage from "./components/CarsPage/index";
import Footer from './components/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>Hallo Zacky!</p>
    //   </header>
    // </div>
  );
}

export default App;
