import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Circular() {
  const circulargroup = useRef();

  useGSAP(() => {
    const grouptrigger = gsap.timeline({
      defaults: {
        duration: 3,
      },
      scrollTrigger: {
        trigger: ".section4",
        start: "top bottom",
        end: "bottom top",
        markers: true,
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
        ".circular",
        { rotation: 90 }, // start rotation at 0 degrees
        { rotation: -90 } // animate to 360 degrees
      );
  }, [circulargroup]);

  return (
    <group ref={circulargroup}>
      <Html
        className="hi"
        position={[-2.69, 0, 0]}
        occlude
        zIndexRange={[-100, 0]}
      >
        <div className="circular z-0 h-[200vh] w-screen  overflow-visible rounded-full relative bg-white">
          <div className="box bg-red-400 w-1/4 h-[450px]" id="box1">
            Box 1
          </div>
          <div className="box bg-gray-800 w-1/4 h-[450px]" id="box2">
            Box 2
          </div>
          <div className="box bg-blue-400 w-1/4 h-[450px]" id="box3">
            Box 3
          </div>
        </div>
      </Html>
    </group>
  );
}

export default Circular;
