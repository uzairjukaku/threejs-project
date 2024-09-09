import { Canvas } from "@react-three/fiber";
import React from "react";
import { Cigar } from "./Cigar";
import { Environment, Float } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function CanvasContainer() {
  return (
    <Canvas camera={{ position: [4, 0, 0] }} className="z-10">
      <Environment preset="apartment"></Environment>
      <ambientLight></ambientLight>

      <fog attach="fog" args={["#f5f3ee", 10, 50]} />

      <Float>
        <Cigar />
      </Float>
    </Canvas>
  );
}

export default CanvasContainer;
