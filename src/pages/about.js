import React from "react";
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

const About = () => {
  return (
    <div>
      <h1 style={{ fontSize: 70, marginLeft: 120, marginTop: 50 }}>
        About WorkoutRight
      </h1>
      <div
        style={{
          color: "#05386B",
          marginLeft: 100,
          marginRight: 500,
          background: "#8EE4AF",
        }}
      >
        <p style={{ marginLeft: 30, fontSize: 25, marginRight: 30 }}>
          <br></br>
          Hey there! Welcome to WorkoutRight which helps you workout the right way XD
          <br></br>
          <br></br>We created this project because we wanted to develop something
          that can assist people while they work out. The main idea was to
          monitor a person while he/she is working out and give them feedback on
          their performance. Broadly how well he/she is performing that
          particular exercise. So we thought of dividing the project into two
          sections, one for the rep-based exercises and the other for Yoga.
          <br></br>
          <br></br>In the workout section, the number of reps that you perform
          of a particular exercise is counted and in the Yoga section, you are
          assisted in performing a Yoga exercise correctly with the help of
          markers tracked over your body which turn green when that particular
          body part is in right posture and at the correct angle for that Yoga
          Pose. Another thing to note is that with this approach of ML-assisted
          fitness, several discomforts and injuries which are caused due to an
          exercise performed in the wrong posture can be minimized.
          <br></br>
          <br></br>
          Built with Google's open-source machine learning solution MediaPipe
          and React web framework.
          {/* <br></br>Developed by Manu Rajput and team in 2021. */}
          <br></br>
        </p>
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

export default About;