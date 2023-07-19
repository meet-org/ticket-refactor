import React, { useEffect, useRef, useState } from "react";

function Chair({ chair, setCount, setSum }) {
   const [chairCounter, setChairCounter] = useState(0);
   const [stateSection, setStateSection] = useState("unselected");
   const eventTarget = useRef();

   useEffect(() => {
      if (chairCounter == 1) {
         setStateSection("selected");
         eventTarget.current.style.background = "green";
      } else if (chairCounter == 2) {
         setStateSection("reserving");
         eventTarget.current.style.background = "orange";
      } else if (chairCounter == 3) {
         setStateSection("reserving");
         eventTarget.current.style.background = "red";
      }
   }, [chairCounter]);

   const changestate = () => {
      setChairCounter((prevChairCounter) => prevChairCounter + 1);
   };

   return (
      <div
         className="chair"
         onClick={(event) => {
            if (chairCounter < 3) {
               changestate(event);
            } else {
               alert("قبلا رزرو شده است");
            }

            if (chairCounter == 2) {
               setCount((prevState) => prevState + 1);
               setSum((prevState) => prevState + chair.price);
            }
         }}
         ref={eventTarget}
         title={chair.price}
      >
         {chair.number}
      </div>
   );
}

export default Chair;
