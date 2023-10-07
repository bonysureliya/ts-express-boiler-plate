import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import onlyLogo from './assets/onlylogoanil.png';
import Section2 from "./components/Section2";
function App() {



  return (
    <div className="h-[200vh] w-[100%] bg-red-500 flex flex-col">
      <div className="h-[100vh] w-[100%] flex flex-col bg-[#434343]">

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "calc(100vw - 100vw)" }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 2 },
          }}
        >
          <Navbar />
          <div>

          
          </div>
          <div className=" h-[88vh] w-[100%] flex justify-center items-end   ">
            <div className="h-[350px] w-[850px]  rounded-t-3xl bg-black flex justify-center items-end">
              <div className="w-[820px] h-[330px] bg-red-500 rounded-t-3xl flex flex-col items-center justify-center">
                <img src={onlyLogo} className='w-[200px] h-[200px]' alt="" />
                <h2 className="text-4xl text-white">Anil Sinh Parmar Consaltancy Service PVT LTD</h2>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      <Section2 />
    </div>

  );
}

export default App;
