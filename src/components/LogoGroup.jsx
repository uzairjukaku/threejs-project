import React, { useRef } from "react";
import Cylender from "./Cylender";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);
function LogoGroup() {
  const logo1 = useRef();
  const logo2 = useRef();
  const logo3 = useRef();
  const logo4 = useRef();

  useGSAP(() => {
    // if (!logo1.current || !logo2.current || !logo3.current || !logo4.current)
    //   return;

    const introTl = gsap.timeline();

    introTl.set(logo1.current.position, { x: -4, y: -0.5 });
    introTl.set(logo2.current.position, { x: 4, y: -0.5 });
    introTl.set(logo3.current.position, { x: -0.5, y:2 });
    introTl.set(logo4.current.position, { x: 0.5, y: 2});

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom bottom",
      
        scrub: 1.5,
      },
    });
    const scrollT2 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom bottom",
      
        scrub: 1.5,
      },
    });
    const scrollT3 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom bottom",
      
        scrub: 1.5,
      },
    });
    const scrollT4 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom bottom",
      
        scrub: 1.5,
      },
    });

    scrollTl.fromTo(
      logo1.current.position,
      {
        x: -4,
      },
      {
        x: -1,
      }
    );

    scrollT2.fromTo(
      logo2.current.position,
      {
        x: 4,
      },
      {
        x: 1,
      }
    );
    scrollT3.fromTo(
      logo3.current.position,
      {
        x: -4,
        y: 3,
      },
      {
        x: -0.5,
        y: .7,
      }
    );
    scrollT4.fromTo(
      logo4.current.position,
      {
        x: 4,
        y: 3,
      },
      {
        x: 0.5,
        y: .7,
      }
    );
  });
  return (
    <group>
      <group ref={logo1}>
        <Cylender></Cylender>
      </group>
      <group ref={logo2}>
        <Cylender></Cylender>
      </group>
      <group ref={logo3}>
        <Cylender></Cylender>
      </group>
      <group ref={logo4}>
        <Cylender></Cylender>
      </group>
      {/* <Cylender ref={logo2}></Cylender>
      <Cylender ref={logo3}></Cylender>
      <Cylender ref={logo4}></Cylender> */}
    </group>
  );
}

export default LogoGroup;
