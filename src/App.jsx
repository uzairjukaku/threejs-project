import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CanvasContainer from "./components/CanvasContainer";
import { Cigar } from "./components/Cigar";
import { Environment, Float, View } from "@react-three/drei";
import Caraosal from "./components/Caraosal";
import Cylender from "./components/Cylender";
import LogoGroup from "./components/LogoGroup";

function App() {
  return (
    <div className="relative ">
      <div className=" h-screen w-full fixed left-0 top-0 ">
        <CanvasContainer />
      </div>

      <View className="h-screen w-full fixed top-0 left-0 z-0">
        <Environment preset="apartment"></Environment>
        {/* <ambientLight></ambientLight> */}

        <fog attach="fog" args={["#f5f3ee", 10, 50]} />

        {/* <Float
          speed={3} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        > */}
          <Cigar />
        {/* </Float> */}

<LogoGroup></LogoGroup>
      </View>

      <section className="h-screen"></section>
      <section className="section2 h-screen"></section>
      {/* <Caraosal className="section3 bg-red-400 !z-[100] h-screen"></Caraosal> */}
    </div>
  );
}

export default App;
