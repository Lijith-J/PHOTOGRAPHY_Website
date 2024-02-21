import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />}>
         <Route index element={<HomePage/>}/> 

        </Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
