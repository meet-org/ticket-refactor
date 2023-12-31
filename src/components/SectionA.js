import React, { useState, useEffect, useContext } from "react";
import "../style/main.scss";
import { dataChairsContext } from "./BookingConcertTicket";

const SectionA = () => {
   return (
      <>
         <div className="section">
            {" "}
            <div className="section-A">
               {useContext(dataChairsContext)
                  .filter((chair) => chair.section === "A")
                  .map((chair) => (
                     <div className="chair" key={chair.number}>
                        {chair.number}
                     </div>
                  ))}
            </div>
         </div>
      </>
   );
};

export default SectionA;
