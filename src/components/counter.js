import React from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import angleBetweenThreePoints from "./angle";

const styles = {
  webcam: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 0,
    right: 0,
    top: 250,
    textAlign: "center",
    zIndex: 9,
    width: 640,
    height: 480,
  },
};

const exrInfo = {
  bicepCurls: {
    index: [12, 14, 16],
    ul: 160,
    ll: 50,
  },
  squats: {
    index: [24, 26, 28],
    ul: 170,
    ll: 50,
  },
  pushups: {
    index: [12, 14, 16],
    ul: 180,
    ll: 0,
  },
  crunches: {
    index: [12, 24, 26],
    ul: 180,
    ll: 0,
  },
};

function Counter(props) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const count = useRef(0);
  const dir = useRef(0);
  const angle = useRef();
  let camera = null;
  const countTextbox = useRef(null);

  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;
      //console.log(props)
      // set height and width of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      //ratios between 0-1, covert them to pixel positions
      const upadatedPos = [];
      const indexArray = exrInfo[props.exercise].index;

      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
      }
      //console.log(upadatedPos)
      angle.current = Math.round(angleBetweenThreePoints(upadatedPos));
      //console.log(angle)

      // Count reps
      //0 is down, 1 is up
      if (angle.current > exrInfo[props.exercise].ul) {
        if (dir.current == 0) {
          //count.current = count.current + 0.5
          dir.current = 1;
        }
      }
      if (angle.current < exrInfo[props.exercise].ll) {
        if (dir.current == 1) {
          count.current = count.current + 1;
          dir.current = 0;
        }
      }

      //console.log(count.current)
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(upadatedPos[i].x, upadatedPos[i].y);
        canvasCtx.lineTo(upadatedPos[i + 1].x, upadatedPos[i + 1].y);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "white";
        canvasCtx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        canvasCtx.arc(upadatedPos[i].x, upadatedPos[i].y, 10, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }
      canvasCtx.font = "48px aerial";
      canvasCtx.fillText(
        angle.current,
        upadatedPos[1].x + 10,
        upadatedPos[1].y + 10
      );
      canvasCtx.restore();
    }
  }

  useEffect(() => {
    count.current = 0
    //console.log(count.current)
    //console.log("rendered counter")
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.4.1624666670/${file}`;
      },
    });
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          countTextbox.current.value = count.current;
          //console.log(count.current)
          await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  });
  //console.log(props)
  return (
    <div>
      <Webcam ref={webcamRef} style={styles.webcam} />
      <canvas ref={canvasRef} style={styles.webcam} />
      {props.exercise}
      <div>
        {" "}
        Count :
        <input ref={countTextbox} value={count.current} type="text" />
      </div>
    </div>
  );
}

export default Counter;