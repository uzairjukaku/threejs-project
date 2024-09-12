import React, { useRef, useState } from "react";

import { WavyCircles } from "./WavyCircles";
// import { ArrowButton } from "./ArrowIcon";
import { Center, Environment, View } from "@react-three/drei";
import { Cigar } from "./Cigar.jsx";

import gsap from "gsap";
import { Cigar2 } from "./Cigar2.jsx";
const SPINS_ON_CHANGE = 8;
function Caraosal() {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const sodaCanRef = useRef(null);

  function changeFlavor(index) {
    if (!sodaCanRef.current) return;

    //   const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const tl = gsap.timeline();

    tl.to(
      sodaCanRef.current.rotation,
      {
        y: `-=${Math.PI * 2 * SPINS_ON_CHANGE}`,

        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: "red",
          fill: "red",
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
      //   .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
  }

  function clickp(){

    console.log('====================================');
    console.log('click');
    console.log('====================================');
  }
  return (
    // <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
     //   <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

    //   <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />

      <div className="grid grid-cols-[auto,auto,auto] items-center"> 
   
   


    <p className="text-red-500" onClick={()=>clickp()}>left</p>
        <View className="aspect-square h-[70vmin] min-h-40 ">
          <Center position={[0, 0, 1.5]}>

            <group  ref={sodaCanRef} scale={.6}>

            <Cigar2 />
            </group>
          </Center>

          <Environment
            preset="apartment"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        <p className="text-red-500" onClick={()=>clickp()}>right</p>
    </div>
     // <p>right</p>
 //     </div> 
 //   </section> 
  );
}

export default Caraosal;
