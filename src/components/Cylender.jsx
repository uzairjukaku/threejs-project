import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
function Cylender() {
  const texture = useTexture("/slider.png");
  texture.needsUpdate = true;
  const t1 = gsap.timeline();
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.09;
  });

  useLayoutEffect(() => {
    t1.to(ref.current.position, {
      y: 1.3,
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "top center",
        scrub: true,
        immediateRender: false,
      },
    });
  });
  return (
    <mesh rotation={[0.2, 0.2, 0]} ref={ref} position-y={-6}>
      <cylinderGeometry args={[2, 2, 1.2, 30, 50, true]}></cylinderGeometry>
      <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

export default Cylender;
