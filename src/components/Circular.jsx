import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Html } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const Images1 = [
  "/Images/Featured Images/1.webp",
  "/Images/Featured Images/2.webp",
  "/Images/Featured Images/3.webp",
];

function Circular() {
  const circulargroup = useRef();
  const circularRef = useRef(); // Reference for the `.circular` div
  const box1 = useRef(); // Reference for the boxes
  const box2 = useRef();
  const box3 = useRef();

  useLayoutEffect(() => {
    if (!circulargroup.current || !circularRef.current) return; // Ensure refs are not undefined

    // Scroll-triggered animations for 3D object group
    const grouptrigger = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5 ,
        trigger: ".section5",
        start: "top bottom",
        end: "bottom 50%",
     
      }
    });

    grouptrigger.fromTo(
      circulargroup.current.position,

      {
        x: 0,
        y: -5,
      },
      {
        x: 0,
        y: 1.3,
      }
    );
    // .to(circularRef.current, {
    //   x: 0,
    //   y: 1.2,
    // });

    // Scroll-triggered animations for HTML elements
    const cardgroup = gsap.timeline({
      defaults: {
        // duration: 3,
        // delay:1
      },
      scrollTrigger: {
        trigger: ".section5",
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 1.5,
      },
    });
    // Animate individual boxes
    cardgroup
      .fromTo(
        box1.current,
        {
          x: "100vw",
          rotation: 45,
        },
        {
          x: "-130vw",
          rotation: -25,
        }
      )
      .fromTo(
        box2.current,
        {
          x: "100vw",
          rotation: 45,
        },
        {
          x: "-130vw",
          rotation: -25,
        }
      )
      .fromTo(
        box3.current,
        {
          x: "100vw",
          rotation: 45,
        },
        {
          x: "-130vw",
          rotation: -25,
        }
      );
  }); // Empty dependency array to ensure the effect runs only once

  return (
    <group ref={circulargroup}>
      <Html position={[-2.69, 0, 0]} occlude zIndexRange={[-100, 0]}>
        <div
          className="circular z-0 h-[100vh] w-screen overflow-visible  relative "
          ref={circularRef} // Attach the ref to this element
        >
          <div className="innerCircle z-0 h-[100vh] w-screen  absolute top-[500px] left-0  rounded-tl-full rounded-tr-full"></div>
          <div className="box w-1/4 h-[450px]" id="box1" ref={box1}>
            <img src={Images1[0]} className="w-full h-full" alt="" />

            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM 1</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>
          </div>
          <div className="box w-1/4 h-[450px]" id="box2" ref={box2}>
            <img src={Images1[1]} className="w-full h-full" alt="" />
            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM 2</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>{" "}
          </div>
          <div className="box w-1/4 h-[450px]" id="box3" ref={box3}>
            <img src={Images1[2]} className="w-full h-full" alt="" />
            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM 3</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>{" "}
          </div>
        </div>
      </Html>
    </group>
  );
}

export default Circular;
