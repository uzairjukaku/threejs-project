import React, { useRef, useLayoutEffect, useEffect } from "react";
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
  const circularRef = useRef(null); // Reference for the `.circular` div

  useEffect(() => {
    const grouptrigger = gsap.timeline({
      defaults: {
        duration: 3,
      },
      scrollTrigger: {
        trigger: ".section4",
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        scrub: 1.5,
      },
    });

    grouptrigger
      .fromTo(
        circulargroup.current.position,
        {
          x: 0,
          y: -5,
        },
        {
          x: 0,
          y: 1.2,
        },
        2
      )
      .fromTo(
        ".circular", // Reference the DOM element instead of using a selector
        { rotation: 90 },
        { rotation: -90 }
      );
  });

  return (
    <group ref={circulargroup}>
      <Html position={[-2.69, 0, 0]} occlude zIndexRange={[-100, 0]}>
        <div
          className="circular z-0 h-[200vh] w-screen overflow-visible rounded-full relative "
          ref={circularRef} // Attach the ref to this element
        >
          <div className="box w-1/4 h-[450px]" id="box1">
            <img src={Images1[0]} className="w-full h-full" alt="" srcset="" />

            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>
          </div>
          <div className="box w-1/4 h-[450px]" id="box2">
            <img src={Images1[1]} className="w-full h-full" alt="" srcset="" />
            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>{" "}
          </div>
          <div className="box w-1/4 h-[450px]" id="box3">
            <img src={Images1[2]} className="w-full h-full" alt="" srcset="" />
            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>{" "}
          </div>
        </div>
      </Html>
    </group>
  );
}

export default Circular;
