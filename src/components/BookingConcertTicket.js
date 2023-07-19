import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionA from "./SectionA";
import "../style/main.scss";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
export const dataChairsContext = React.createContext();
const BookingConcertTicket = () => {
   const initDataState = [];
   const [data, setData] = useState(initDataState);
   useEffect(() => {
      axios.get("/chairs.json").then((Response) => setData(Response.data));
   }, []);

   return (
      <>
         <div>
            <div className="stage">
               <h1>stage</h1>
            </div>
            <div className="factor">
               <h3>CounterChair:</h3> <div className="counter">0</div>
               <h3>TotalPrice:</h3> <div className="total-Price">0</div>
            </div>
            <div className="chairs-grid">
               {/* sectionB */}
               <dataChairsContext.Provider value={data}>
                  <SectionB></SectionB>
               </dataChairsContext.Provider>
               {/* sectionA */}
               <dataChairsContext.Provider value={data}>
                  <SectionA></SectionA>
               </dataChairsContext.Provider>
               {/* sectionC */}
               <dataChairsContext.Provider value={data}>
                  <SectionC></SectionC>
               </dataChairsContext.Provider>
               {/* sectionD */}
               <dataChairsContext.Provider value={data}>
                  <SectionD></SectionD>
               </dataChairsContext.Provider>
            </div>
         </div>
      </>
   );
};

export default BookingConcertTicket;
