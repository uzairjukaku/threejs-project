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
  const circulargroup = useRef(null);
  const circularRef = useRef(null); // Reference for the `.circular` div
  const box1 = useRef(null); // Reference for the `.circular` div
  const box2 = useRef(null); // Reference for the `.circular` div
  const box3 = useRef(null); // Reference for the `.circular` div

  useEffect(() => {
    // if (circulargroup.current || circularRef.current) return;

    const grouptrigger = gsap.timeline({
      defaults: {
        duration: 3,
      },
      scrollTrigger: {
        trigger: ".section5",
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        scrub: 1.5,
      },
    });
    const cardgroup = gsap.timeline({
      defaults: {
        duration: 3,
      },
      scrollTrigger: {
        trigger: ".section5",
        start: "top top",
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
          y: -2,
        },
        {
          x: 0,
          y: 1.2,
        },
        2
      )
      .to(
        ".circular", // Reference the DOM element instead of using a selector
        {
          x: 0,
          y: 1.2,
        }
      );

    cardgroup
      .fromTo(
        "#box1",
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
        "#box2",
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
        "#box3",
        {
          x: "100vw",
          rotation: 45,
        },
        {
          x: "-130vw",
          rotation: -25,
        }
      );
  }, [circulargroup, circularRef]);

  return (
    <group ref={circulargroup}>
      <Html position={[-2.69, 0, 0]} occlude zIndexRange={[-100, 0]}>
        <div
          className="circular z-0 h-[100vh] w-screen overflow-visible  relative "
          ref={circularRef} // Attach the ref to this element
        >
          <div className="innerCircle z-0 h-[100vh] w-screen  absolute top-[500px] left-0  rounded-tl-full rounded-tr-full"></div>
          <div className="box w-1/4 h-[450px]" id="box1" ref={box1}>
            <img src={Images1[0]} className="w-full h-full" alt="" srcset="" />

            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM 1</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>
          </div>
          <div className="box w-1/4 h-[450px]" id="box2" ref={box2}>
            <img src={Images1[1]} className="w-full h-full" alt="" srcset="" />
            <div className="box-content">
              <h3 className="text-xl mb-2">LOREM IPSUM 2</h3>
              <p className="text-2xl font-bold">$120</p>
            </div>{" "}
          </div>
          <div className="box w-1/4 h-[450px]" id="box3" ref={box3}>
            <img src={Images1[2]} className="w-full h-full" alt="" srcset="" />
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
