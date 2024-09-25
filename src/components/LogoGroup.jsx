import React, { useRef, useState } from "react";
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
  const logo5 = useRef();
  const grouplogo = useRef();
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(() => {
    // if (!logo1.current || !logo2.current || !logo3.current || !logo4.current)
    //   return;

    const introTl = gsap.timeline();

    introTl.set(logo1.current.position, { x: -4, y: -0.5, z: 0 });
    introTl.set(logo2.current.position, { x: 4, y: -0.5, z: 0.1 });
    introTl.set(logo3.current.position, { x: -0.5, y: 2, z: 0.2 });
    introTl.set(logo4.current.position, { x: 0.5, y: 2, z: 0.3 });
    introTl.set(logo5.current.position, { x: 0, y: 2, z: 0.4 });

    const grouptrigger = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",

        endTrigger: ".section4",
        start: "bottom 100%",
        end: "bottom top",
        // markers: true,
        scrub: 1.5,
        // onLeave: () => {
        //   console.log("Left section");
        //   setIsVisible(false);
        // },
        // onEnterBack: () => {
        //   console.log("Entered section back");
        //   setIsVisible(true);
        // },
        // onLeaveBack: () => {
        //   console.log("Left section back");
        //   setIsVisible(false);
        // },
      },
    });
    const scrollTl = gsap.timeline({
      defaults: {
        duration: 3,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "bottom top",

        scrub: 1.5,
      },
    });
    const scrollT2 = gsap.timeline({
      defaults: {
        duration: 3,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
    const scrollT3 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "bottom top",

        scrub: 1.5,
      },
    });
    const scrollT4 = gsap.timeline({
      defaults: {
        duration: 4,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "bottom top",

        scrub: 1.5,
      },
    });
    const scrollT5 = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        end: "bottom top",

        scrub: 1.5,
      },
    });

    scrollTl.fromTo(
      logo1.current.position,
      {
        x: -5,
      },
      {
        x: -1,
        y: 0.2,
      }
    );

    scrollT2.fromTo(
      logo2.current.position,
      {
        x: 5,
      },
      {
        x: 1,
        y: 0.2,
      }
    );
    scrollT3.fromTo(
      logo3.current.position,
      {
        x: -4,
        y: 4,
      },
      {
        x: -.7,
        y: 0.8,
      }
    );
    scrollT4.fromTo(
      logo4.current.position,
      {
        x: 4,
        y: 4,
      },
      {
        x: 0.7,
        y: .8,
      }
    );

    scrollT5.fromTo(
      logo5.current.position,
      {
        x: 0,
        y: 4,
      },
      {
        x: 0,
        y: 1,
      }
    );
    grouptrigger
      .fromTo(
        grouplogo.current.position,
        {
          x: 0,
          y: 0,
          // z: -1,
        },
        {
          x: 0,
          y: 0,
          onUpdate: () => {
            // console.log("Animation is in progress2");
            // Custom event or logic you want to run during the animation
          },
          onComplete: () => {
            console.log("Animation complete2");
            // Custom event or logic you want to trigger after the animation is done
          },
        },
        0.1
      )
      .to(grouplogo.current.position, {
        x: 0,
        y: -.5,
        // z: -1,
      }).fromTo(grouplogo.current.position, {
        x: 0,
        y: -.5,
        // z: -1,
      },{
        x: 0,
        y: -4,
        // z: -1,
      }
    ,2)
  });

  return (
    <group ref={grouplogo}>
      <group ref={logo1}>
        <Cylender logo={"./logo6.png"}></Cylender>
      </group>
      <group ref={logo2}>
        <Cylender logo={"./logo2.png"}></Cylender>
      </group>
      <group ref={logo3}>
        <Cylender logo={"./logo 5.png"}></Cylender>
      </group>
      <group ref={logo4}>
        <Cylender logo={"./logo4.png"}></Cylender>
      </group>
      <group ref={logo5}>
        <Cylender logo={"./logo 3.png"}></Cylender>
      </group>
      {/* <Cylender ref={logo2}></Cylender>
      <Cylender ref={logo3}></Cylender>
      <Cylender ref={logo4}></Cylender> */}
    </group>
  );
}

export default LogoGroup;
