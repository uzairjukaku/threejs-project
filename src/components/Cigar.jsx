import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { log } from "three/webgpu";
import gsap from "gsap";

export function Cigar(props) {
  const { nodes, materials } = useGLTF("/models/untitled.glb");

  const ref = useRef();

  const { camera } = useThree();
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();

  useLayoutEffect(() => {
    t1.to(camera.position, {
      y: 2.4,
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "top center",
        scrub: true,
        immediateRender: false,
        markers:true
      },
    });
    t2.to(ref.current.rotation,{

      y: 20,
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "top center",
        scrub: true,
        
        immediateRender: false,
      },
    })
  });

  useEffect(() => {
    if (ref.current) {
      // Rotate the cigar model based on scroll progress
      ref.current.rotation.y = Math.PI

      console.log('====================================');
      console.log();
      console.log('====================================');
    }
  },[]);

  
  return (
   
   
   
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={0.2}
      rotation={[0, Math.PI / 2, Math.PI / 2]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.label.geometry}
        material={materials.label}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cigar_cuban.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/models/untitled.glb");
