import React, { useState } from "react";
import Counter from "./../components/counter";

const CounterPage = () => {
  const [exr, setExr] = useState("bicepCurls");

  // useEffect(() => {
  //   console.log("rendered counter page")
  // });

  return (
    <div>
      This is the CounterPage Page
      <br />
      <br />
      <div>
        <select
          value={exr}
          onChange={(event) => {
            const selectedExr = event.target.value;
            setExr(selectedExr);
          }}
        >
          <option value="bicepCurls">Bicep Curls</option>
          <option value="squats">Squats</option>
          <option value="pushups">Push Ups</option>
          <option value="crunches">Crunches</option>
        </select>
      </div>
      <br />
      <Counter exercise={exr} />
    </div>
  );
};

export default CounterPage;