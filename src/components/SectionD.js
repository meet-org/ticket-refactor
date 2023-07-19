import React, { useState, useEffect, useContext } from "react";
import "../style/main.scss";
import { dataChairsContext } from "./BookingConcertTicket";

const SectionD = () => {
   return (
      <>
         <div className="section">
            {" "}
            <div className="section-D">
               {useContext(dataChairsContext)
                  .filter((chair) => chair.section === "D")
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

export default SectionD;
