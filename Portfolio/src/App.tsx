import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion";
import onlyLogo from './assets/onlylogoanil.png';
import Section2 from "./components/Section2";
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

  const dataSource = [
    {
      key: '1',
      sr_no: '1',
      amount: 5000,
      monthly: 150,
      month: "1,800",
      year: "6,800",
    },
    {
      key: '2',
      sr_no: '2',
      amount: "10,000",
      monthly: 300,
      month: "3,600",
      year: "13,600",
    },
    {
      key: '3',
      sr_no: '3',
      amount: "15,000",
      monthly: 450,
      month: "5,400",
      year: "20,400",
    },
    {
      key: '4',
      sr_no: '4',
      amount: "20,000",
      monthly: 600,
      month: "7,200",
      year: "27,200",
    },
    {
      key: '5',
      sr_no: '5',
      amount: "25,000",
      monthly: 750,
      month: "9,000",
      year: "34,000",
    },
    {
      key: '6',
      sr_no: '6',
      amount: "30,000",
      monthly: 900,
      month: "10,800",
      year: "40,800",
    },
    {
      key: '7',
      sr_no: '7',
      amount: "50,000",
      monthly: "1500",
      month: "18,000",
      year: "68,000",
    },
    {
      key: '8',
      sr_no: '8',
      amount: "1 LAKH",
      monthly: 3000,
      month: "36,000",
      year: "1,36,000",
    },
    {
      key: '9',
      sr_no: '9',
      amount: "2 LAKH",
      monthly: 6000,
      month: "72,000",
      year: "2,72,000",
    },
    {
      key: '10',
      sr_no: '10',
      amount: "3 LAKH",
      monthly: 9000,
      month: "1,08,000",
      year: "4,08,000",
    }

  ];

  const columns = [
    {
      title: 'S.NO',
      dataIndex: 'sr_no',
      key: 'sr_no',
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'MONTHLY 3%',
      dataIndex: 'monthly',
      key: 'monthly',
    },
    {
      title: '12 MONTHS',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: '1 YEAR TOTAL RETURN',
      dataIndex: 'year',
      key: 'year',
    },
  ];



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
