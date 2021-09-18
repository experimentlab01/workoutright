import React from "react";
import Counter from "./../components/counter";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  back: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
};

const CounterPage = () => {
  return (
    <div>
      <Counter />
      <div style = {styles.back}>
        <Link to="/">
          <Button size="large" variant="outlined" color="primary">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CounterPage;