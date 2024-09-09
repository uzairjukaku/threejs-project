import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";

function App() {
  return (
    <>

    <div className="relative">

      <div className="h-screen w-full fixed top-0 ">
        <CanvasContainer />
      </div>

      <section className="h-screen">hero</section>
      <section className="section2 h-screen">slider</section>
      <section className="section3 bg-red-400 !z-20 h-screen">slider</section>
    </div>
    </>
  );
}

export default App;
