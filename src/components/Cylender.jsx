import { Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
function Cylender() {
  const texture = useTexture("./Logo.png");
  texture.needsUpdate = true;

  const ref = useRef();

  return (
   
    <Float
    speed={.4} // Animation speed, defaults to 1
    rotationIntensity={2} // XYZ rotation intensity, defaults to 1
    floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    floatingRange={[-0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
  >
   <mesh>
      <planeGeometry args={[1, 1]} />
      {/* You can add any material, here we use a basic material */}
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>

    </Float>
  );
}

export default Cylender;
