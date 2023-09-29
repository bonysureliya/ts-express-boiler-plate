import { useState } from 'react';
import './App.css'
import { motion, spring } from 'framer-motion'

function App() {

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="h-[100vh] w-[100-vw] flex justify-center items-center" onClick={() => toggleSwitch}>
      <motion.div className="w-[180px] h-[180px]  bg-red-500" animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }} transition={{
        duration: 2,
        ease: "anticipate",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
      />
    </div>
  )
}

export default App
