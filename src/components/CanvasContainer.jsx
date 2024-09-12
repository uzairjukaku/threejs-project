import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Cigar } from "./Cigar";
import { Environment, Float, OrbitControls, View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cylender from "./Cylender";

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
      className="z-10"
    >
    
      {/* <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-1, .5]}
      >
      </Float> */}

      <Suspense fallback={null}>
        <View.Port />
      </Suspense>
      {/* <Cigar /> */}
      {/* <Cylender></Cylender> */}
    </Canvas>
  );
}

export default CanvasContainer;
