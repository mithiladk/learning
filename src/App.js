import React, {useState,useRef, useEffect} from "react";
import "./tailwind.css";


function App() {
  
  const [timerHours,setTimerHours] = useState("00");
  const [timerMinutes,setTimeMinutes] = useState("00");
  const [timerSecs,setTimerSecs] = useState("00");

  let interval = useRef();

  

  const startTimer = () => {
    interval = setInterval(()=>{
      const now = new Date();  
      const hours = Math.floor((now / 1000 * 60 * 60 ) % 24);
      const Minutes = Math.floor((now / 1000 / 60)  % 60);
      const secs = Math.floor((now / 1000) % 60)

      if(now  < 0){
        clearInterval(interval.current)
      } else {
       
        setTimerHours(hours);
        setTimeMinutes(Minutes);
        setTimerSecs(secs);
      }
    },1000)

    
  } 
  useEffect (()=>{
    startTimer();
  })
  return (
    <div className="bg-home w-full py-12 px-8 min-h-screen">
      <h3 className="pt-2 pb-4 uppercase text-center font-bold dark:text-secondary-dark text-xl">
                
               countdown timer
            </h3>
      {/* countdown timer */}
      <div className="flex flex-wrap gap-4 justify-center">
  
        <div className="timer-circle ">
          <span className=" m-auto block text-4xl ">{timerHours}</span>
          <span className=" block m-auto  text-sm">Hours</span>
        </div>
        <div className="timer-circle ">
          <span className=" m-auto block text-4xl ">{timerMinutes}</span>
          <span className=" block m-auto  text-sm">Mins</span>
        </div>
        <div className="timer-circle ">
          <span className=" m-auto block text-4xl ">{timerSecs}</span>
          <span className=" block m-auto  text-sm">Secs</span>
        </div>
      </div>

      <div className="p-8 flex flex-row gap-3 box-border justify-center align-center">
        <button
          type="button"
          className=" h-14 w-20  uppercase border-light border text-primary-200 font-bold text-sm outline-none focus:outline-none "
                                    
                                
          style={{ borderRadius: "7px" }}
          onClick={() => {}}
        >
          Start
        </button>

        <button
          type="button"
          className=" h-14 w-20  uppercase border-light border text-primary-200 font-bold text-sm outline-none focus:outline-none "
          style={{ borderRadius: "7px" }}
        >
        Stop
        </button>
        <button
          type="button"
          className=" h-14 w-20  uppercase border-light border text-primary-200 font-bold text-sm outline-none focus:outline-none "
          style={{ borderRadius: "7px" }}
        >
       Reset
        </button>
      </div>
    </div>
  );
}

export default App;
