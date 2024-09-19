import "./App.css";
import CanvasContainer from "./components/CanvasContainer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Circular from "./components/Circular";
import Header from "./components/Header";

gsap.registerPlugin(ScrollTrigger);

// function App() {

//   return (
//     <div className=" ">
//       <div className="canvas-container canvasContainer h-screen w-full  left-0 top-0">
//
//       </div>

//       <section className="h-screen"></section>
//       <section className="section2 bg-red-400 h-screen"></section>

//       <section className="section3 bg-blue-200 h-screen"></section>
//       <section className="section4 bg-blue-200 h-screen"></section>
//       <section className="section5 bg-blue-200 h-screen"></section>
//       <section className="section6 bg-blue-200 h-screen"></section>
//     </div>
//   );
// }

const App = () => {
  useGSAP(() => {
    gsap.to(".section1", {
      scrollTrigger: {
        trigger: ".section1",
        start: "top 0%",
        endTrigger: ".section5",
        end: "bottom 0%",
        pin: ".section1",
        // markers: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div>

      <Header></Header>
      <section className="section1 relative" style={{ height: "100vh" }}>
      
      <img src="/Logo.png" className="!-z-[1000] absolute top-1/2 left-1/2 object-contain h-96 -translate-x-1/2 -translate-y-1/2 " alt="" srcset="" />
        <CanvasContainer></CanvasContainer>
      </section>
      <section className="section2" style={{ height: "100vh"}}></section>
      <section className="section3  " style={{}}>
        {/* <Section2 type={'FEATURED'}></Section2> */}

        {/* <Circular/> */}
      </section>
      <section className="section4">
      
      </section>
      <section className="section5"  style={{ height: "100vh" }}>
     
      </section>
      <section className="section6"  style={{ height: "100vh" }}>
    
      </section>
      <section className="section7">
      <Section2 type={'BEST SELLING'}></Section2>
      </section>
      <section className="section7">
        <Section4></Section4>
      </section>
      <section className="section6">
        <Footer></Footer>{" "}
      </section>
    </div>
  );
};
export default App;
