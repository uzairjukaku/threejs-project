import "./App.css";
import CanvasContainer from "./components/CanvasContainer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";

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
        // endTrigger: ".section3",
        end: "bottom 0%",
        pin: ".section1",
        // markers: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div>
      <section className="section1" style={{ height: "100vh" }}>
        <CanvasContainer></CanvasContainer>
      </section>
      <section className="section2" style={{ height: "100vh" }}></section>
      <section className="section3" style={{}}>
        <Section2 type={'FEATURED'}></Section2>
      </section>
      <section className="section4">
        <Section2 type={'BEST SELLING'}></Section2>
      </section>
      <section className="section5">
        <Section4></Section4>{" "}
      </section>
      <section className="section6">
        <Footer></Footer>{" "}
      </section>
    </div>
  );
};
export default App;
