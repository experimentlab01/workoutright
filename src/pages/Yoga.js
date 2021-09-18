import React, { useState } from "react";
import Virabhadrasana from "../components/virabhadrasana";
import Treepose from "../components/treepose";
import { Link } from "react-router-dom";
import { Button, Select, MenuItem } from "@material-ui/core";

const styles = {
  back: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
  selectBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1000,
    right: 0,
    top: 200,
    textAlign: "center",
    width: 300,
    height: 30,
  },
};

const Yoga = () => {
  const [yoga, setYoga] = useState("virabhadrasana");

  function selectYoga() {
    if (yoga == "virabhadrasana") {
      return <Virabhadrasana />;
    }
    else if(yoga == "trikonasana"){
      return <Treepose/>
    }
    return null;
  }

  return (
    <div>
      <div style={styles.selectBox}>
        <Select
          value={yoga}
          onChange={(event) => {
            const selectedYoga = event.target.value;
            setYoga(selectedYoga);
          }}
        >
          <MenuItem value="virabhadrasana">Virabhadrasana</MenuItem>
          <MenuItem value="trikonasana">Trikonasana</MenuItem>
        </Select>
      </div>

      {selectYoga()}

      <div style={styles.back}>
        <Link to="/">
          <Button size="large" variant="outlined" color="primary">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Yoga;