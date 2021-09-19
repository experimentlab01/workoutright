import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import bicepcurls from "../assets/images/bicepcurls.png";
import crunches from "../assets/images/crunches.png";
import pushups from "../assets/images/pushup.png";
import squats from "../assets/images/squats.png";

const styles = {
  back: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
  select: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 900,
    right: 0,
    top: 200,
    textAlign: "center",
    width: 300,
  },
};

const CounterPage = () => {
  //const [exr, setExr] = useState("bicepCurls");

  return (
    <div>
      <div
        style={{
          display: "flex",
          direction: "column",
          position: "absolute",
          marginRight: "auto",
          marginLeft: "auto",
          top:200,
          left:450,
          textAlign:"center"
        }}
      >
        <Link to="/bicepcurls">
          <img src={bicepcurls} alt="bicepimage" width="250"></img>
          <h1>Bicep Curls</h1>
        </Link>
        <Link to="/squats">
          <img src={squats} alt="bicepimage" width="250"></img>
          <h1>Squats</h1>
        </Link>
        <Link to="/pushups">
          <img src={pushups} alt="bicepimage" width="250"></img>
          <h1>Pushups</h1>
        </Link>
        <Link to="/crunches">
          <img src={crunches} alt="bicepimage" width="250"></img>
          <h1>Crunches</h1>
        </Link>
      </div>

      <div style={styles.back}>
        <Link to="/">
          <Button size="large" variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CounterPage;