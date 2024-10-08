import React, { useRef, useLayoutEffect, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Center, Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

const Images1 = [
  "/Images/Featured Images/1.webp",
  "/Images/Featured Images/2.webp",
  "/Images/Featured Images/3.webp",
];

function Circular({ margin = 0.5 }) {
  const circulargroup = useRef();
  const circularRef = useRef();
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  useLayoutEffect(() => {
    // Wait for elements to load properly
    setTimeout(() => {
      // Check if refs are actually available
      if (
        !circulargroup.current ||
        !circularRef.current ||
        !box1.current ||
        !box2.current ||
        !box3.current
      ) {
        console.error("Refs are not ready", {
          circulargroup: circulargroup.current,
          circularRef: circularRef.current,
          box1: box1.current,
          box2: box2.current,
          box3: box3.current,
        });
        return;
      }

      // Log refs to check if they're correctly assigned
      console.log("Refs after reload:", {
        circulargroup: circulargroup.current,
        circularRef: circularRef.current,
        box1: box1.current,
        box2: box2.current,
        box3: box3.current,
      });

      // Scroll-triggered animations for 3D object group
      const grouptrigger = gsap.timeline({
        scrollTrigger: {
          scrub: 1.5,
          trigger: ".section5",
          start: "top bottom",
          end: "bottom 50%",
        },
      });

      grouptrigger.fromTo(
        circulargroup.current.position,
        {
          x: 0,
          y: -5,
        },
        {
          x: 0,
          y: .05,
        }
      );

      // Scroll-triggered animations for HTML elements
      const cardgroup = gsap.timeline({
        scrollTrigger: {
          trigger: ".section5",
          start: "center top",
          end: "bottom top",
          // markers:true,
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
            x: "-95vw",
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
            x: "-63vw",
         
            rotation: 0,
          }
        )
        .fromTo(
          box3.current,
          {
            x: "100vw",
            rotation: -45,
          },
          {
            x: "-31vw",
            rotation: 25,
          }
        );

      // Refresh ScrollTrigger to ensure correct initialization
      ScrollTrigger.refresh();
    }, 100); // Small delay to ensure DOM elements are ready
  }, []); // Dependency array to ensure it runs only once
  const { width, height } = useThree((state) => state.viewport);
  return (

    <group ref={circulargroup} position={[0,-5,0]}>
      <Suspense fallback={<span>Loading...</span>}>
        <Html occlude zIndexRange={[-100, 0]}  position={[-width / 2 , height / 2 - margin, 0]}>
          <div
            className="circular z-0 h-[100vh] w-screen overflow-visible  relative "
            ref={circularRef}
          >
            <div className="innerCircle z-0 h-[100vh] w-screen    rounded-tl-full rounded-tr-full"></div>
            <div className="box md:w-1/4 w-5/6  h-[350px]" id="box1" ref={box1}>
              <img src={Images1[0]} className="w-full h-full object-cover" alt="" />
              <div className="box-content">
                <h3 className="text-xl mb-2">LOREM IPSUM 1</h3>
                <p className="text-2xl font-bold">$120</p>
              </div>
            </div>
            <div className="box md:w-1/4 w-5/6  h-[350px]" id="box2" ref={box2}>
              <img src={Images1[1]} className="w-full h-full object-cover" alt="" />
              <div className="box-content">
                <h3 className="text-xl mb-2">LOREM IPSUM 2</h3>
                <p className="text-2xl font-bold">$120</p>
              </div>
            </div>
            <div className="box md:w-1/4 w-5/6  h-[350px]" id="box3" ref={box3}>
              <img src={Images1[2]} className="w-full h-full object-cover" alt="" />
              <div className="box-content">
                <h3 className="text-xl mb-2">LOREM IPSUM 3</h3>
                <p className="text-2xl font-bold">$120</p>
              </div>
            </div>
          </div>
        </Html>
      </Suspense>
    </group>

  );
}

export default Circular;
