import React, { useState } from "react";
import Counter from "./../components/counter";
import bicepcurls from "../assets/images/bicepcurls.png";
import crunches from "../assets/images/crunches.png";
import pushups from "../assets/images/pushup.png";
import squats from "../assets/images/squats.png";

const styles = {
  selectBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1000,
    right: 0,
    top: 250,
    textAlign: "center",
    width: 300,
    height: 30,
  },
};

const CounterPage = () => {
  const [exr, setExr] = useState("bicepCurls");
  // useEffect(() => {
  //   console.log("rendered counter page")
  // });

  let imgSource
  if(exr=="bicepCurls"){
    imgSource=bicepcurls
  }
  else if(exr=="squats"){
    imgSource=squats
  }
  else if(exr=="pushups"){
    imgSource=pushups
  }
  else if(exr=="crunches"){
    imgSource=crunches
  }
  
  return (
    <div>
      <div style={styles.selectBox}>
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
        <br></br><br></br>
        <img src={imgSource} width="200" alternate="bicepimage"></img>
      </div>
      <br />
      <Counter exercise={exr} />
    </div>
  );
};

export default CounterPage;