import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useControls } from "leva";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Cigar(props) {
  const { nodes, materials } = useGLTF("/models/untitled.glb");
  const ref = useRef();
  const groupref = useRef();

  // const { rotationz } = useControls({
  //   // rotationy: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  //   // rotationx: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  //   rotationz: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  // });

  // useLayoutEffect(() => {
  //   // ref.current.rotation.y = Math.PI;

  //   console.log("====================================");
  //   console.log(ref.current.rotation);
  //   console.log("====================================");
  // }, []);

  // useEffect(() => {
  //   ref.current.rotation.z = rotationz;
  //   // ref.current.rotation.x = rotationx;
  //   // ref.current.rotation.z = rotationz;
  // }, [rotationz]);

  // useEffect(() => {
  //   console.log("====================================");
  //   console.log(ref.current);
  //   console.log("====================================");
  // }, [ref.current]);

  // useLayoutEffect(() => {
  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".section2",
  //       start: "top bottom",
  //       end: "top center",
  //       scrub: 1,
  //       immediateRender: false,
  //     },
  //   });
  //   const t2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".section2",
  //       start: "top bottom",
  //       end: "top center",
  //       scrub: 1,

  //       immediateRender: false,
  //     },
  //   });

  //   // Move the camera on scroll
  //   t1.to(camera.position, {
  //     y: 2.4,
  //   });

  //   // Rotate the cigar 360 degrees on the x-axis on scroll
  //   t2.to(
  //     ref.current.rotation,
  //     {
  //       x: -0.1,
  //       y: 3.12,
  //       z: 1.55,
  //       duration: 0.3,
  //     },
  //     0.1
  //   ).to(
  //     ref.current.rotation,
  //     {
  //       x: 0.1,
  //       y: 3.21,
  //       z: -3.83,
  //       duration: 0.4,
  //     },
  //     1
  //   );
  // }, [camera]);

  useGSAP(() => {
    if (!ref.current || !groupref.current) return;

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    introTl
      .from(groupref.current.position, { y: -5, x: 1 }, 0)
      .from(groupref.current.rotation, { z: 3 }, 0);

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "bottom top",
        // markers:true,
        scrub: 2,
      },
    });
    scrollTl

    .to(ref.current.rotation, { z: Math.PI * 3 }, 0) // Rotate 3 times
    .to(ref.current.position, { y: -1.5 }, 0) // Move down to -1.5
    .to(ref.current.rotation, { z: 1 }, 1);
  });

  return (
    <group ref={groupref}>
      <group
        ref={ref}
        {...props}
        dispose={null}
        scale={0.15}
        rotation={[0, 1.5, 1.57]}
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
    </group>
  );
}

useGLTF.preload("/models/untitled.glb");
