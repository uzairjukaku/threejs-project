import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Cigar } from "./Cigar";
import {
  Environment,
  Float,
  Html,
  OrbitControls,
  View,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LogoGroup from "./LogoGroup";
import Circular from "./Circular";

gsap.registerPlugin(ScrollTrigger);
function CanvasContainer() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{
        fov: 30,
      }}
    >
      <Environment preset="apartment"></Environment>
      {/* <ambientLight></ambientLight> */}

      <fog attach="fog" args={["#f5f3ee", 10, 50]} />

      <Suspense fallback={null}>
        <Cigar />
        {/* </Float> */}

        <LogoGroup></LogoGroup>

        <Circular></Circular>
      </Suspense>
    </Canvas>
  );
}

export default CanvasContainer;
