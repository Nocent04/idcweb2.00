import React from "react";
import { BrowserRouter as Router, Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
import Mainpage from "./Components/Mainpage";
import Products from "./Components/Products";
import Services from "./Components/Services";
import ThreeM from "./Components/ThreeM";
import Mai from "./Components/Mai"
import RF from "./Components/RF";
import Klas from "./Components/Klas";
import Air from "./Components/Air";
import Avt from "./Components/Avt";
import HP from "./Components/HP";
import Mtech from "./Components/Mtech";




function App() {
  return (
   
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Mainpage/>}/>
      <Route path="" element={<Mainpage/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Services" element={<Services/>} />

       //Products Components
      <Route path="/ThreeM" element={<ThreeM/>} />
      <Route path="/Mai" element={<Mai/>}/>
      <Route path="/RF" element={<RF/>}/>
      <Route path="/Klas" element={<Klas/>}/>
      <Route path="/Air" element={<Air/>}/>
      <Route path="/Avt" element={<Avt/>}/>
      <Route path="/HP" element={<HP/>}/>
      <Route path="/Mtech" element={<Mtech/>}/>

    

     

    </Routes>
    </BrowserRouter>
     
    </>

   
  );
}

export default App;
