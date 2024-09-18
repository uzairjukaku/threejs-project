import { Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
function Cylender({ logo }) {
  const texture = useTexture(logo);
  texture.needsUpdate = true;

  const ref = useRef();

  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      {/* You can add any material, here we use a basic material */}
      <meshBasicMaterial
        depthWrite={false}
        map={texture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Cylender;
