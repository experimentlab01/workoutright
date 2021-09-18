import React from "react";
import logo from "../assets/images/fitness.png";
import exercise from "../assets/images/exercise.png";
import meditaion from "../assets/images/meditation.png";
import "../App.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="home">
        <div
          style={{
            fontSize: 45,
            "font-family": "Arial",
            fontWeight: "bold",
            flex: 1.5,
            marginLeft: 100,
            marginTop: 100,
          }}
        >
          <p>
            <h1>Welcome to WorkoutRight</h1>
            <h4 style={{ marginTop: 0 }}>Making people fit in a smarter way.</h4>
            <div style={{ display: "flex" }}>
              <Link to="/yoga">
                <img
                  style={{ width: 100, marginLeft: 10 }}
                  src={meditaion}
                  alt="meditation"
                ></img>
              </Link>
              <Link to="/counter">
                <div>
                  <img
                    style={{ width: 100, marginLeft: 100}}
                    src={exercise}
                    alt="exercise"
                  ></img>
                </div>
              </Link>
            </div>
          </p>
        </div>
        <img
          src={logo}
          alt="Logo"
          style={{ flex: 1, marginRight: 100, marginTop: 50 }}
        ></img>
      </div>
    </div>
  );
};

export default Home;