import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import homeAnimation from "./assets/Animated-smartphones_-rotation-[remix].gif";
import HeroCard from "./components/Cards/HeroCard";
import iphone1 from "./assets/apple phone1.gif";
import iphone2 from "./assets/apple phone2.gif";

function App() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <div className="h-[150vh] w-[100%] flex flex-col bg-[#434343]">
      
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "calc(100vw - 100vw)" }}
        transition={{
          ease: "anticipate",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <Navbar />
        <div className="flex h-[93vh] pt-[40px] text-white px-5 ">
          <p className="text-4xl">HELLO</p>
          <img
            src={homeAnimation}
            className="relative  left-[40%] top-5 w-[635px] h-[420px] rounded-xl transform
            transition duration-500 hover:scale-110 "
          />
        </div>
        <div className="bg-white h-[100vh] flex  justify-between items-center px-5">
          <HeroCard />
          <HeroCard />
          <HeroCard />  

        </div>
        <div className="h-[100vh] w-[100%] bg-purple-100 flex justify-around">
          <div>
            <img  className ="h-[600px] w-[400px]" src={iphone1} />
          </div>
          <div className=" h-[400px] w-[550px] mt-[200px] ml-[0px]">
              <p className="text-4xl">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock.
              </p>
          </div>
        </div>
        <div className="h-[100vh] w-[100%] bg-yellow-50 flex justify-around">
        <div className=" h-[400px] w-[550px] mt-[200px] ml-[0px]">
              <p className="text-4xl">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock.
              </p>
          </div>
          <div>
            <img  className ="h-[600px] w-[400px]" src={iphone2} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
