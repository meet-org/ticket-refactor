import React, { useState, useEffect, useContext, useRef } from "react";
import "../style/main.scss";
import { dataChairsContext } from "./BookingConcertTicket";

const SectionB = () => {
   const initstate = useContext({ dataChairsContext });
   const [stateSection, setStateSection] = useState("unselected");
   const [count, setcount] = useState(0);
   const [stateChair, setStateChair] = useState(initstate);

   const changestate = (event) => {
      setcount(count + 1);
      if (count == 1) {
         setStateSection("selected");
         event.target.style.background = "red";
      } else if (count == 2) {
         setStateSection("reserving");
         event.target.style.background = "yellow";
      }
      //   setcount((prevnum) => prevnum + 1);
      //   console.log(count);
   };
   return (
      <>
         <div className="section">
            {" "}
            <div className="section-B">
               {useContext(dataChairsContext)
                  .filter((chair) => chair.section === "B")
                  .map((chair) => (
                     <div
                        className="chair"
                        key={chair.number}
                        onClick={
                           (event) => changestate(event)
                           //    if (count < 3) {
                           //       changestate(event, stateSection);
                           //    }
                        }
                     >
                        {chair.number}
                     </div>
                  ))}
            </div>
         </div>
      </>
   );
};

export default SectionB;
