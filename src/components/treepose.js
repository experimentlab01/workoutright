import React from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
import angleBetweenThreePoints from "./angle";
import yoga1 from "../assets/images/trikonasana.png";

const styles = {
  webcam: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 0,
    right: 800,
    top: 200,
    textAlign: "center",
    zIndex: 9,
    width: 960,
    height: 720,
  },
  info: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1250,
    right: 0,
    top: 230,
  }
};

const Treepose = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const width = canvasRef.current.width;
      const height = canvasRef.current.height;

      //   const leftHand = [];
      //   const rightHand = [];
      //   const leftLeg = [];
      //   const rightLeg = [];
      const back = [];
      const index = [12, 24, 26];

      // index 12,24,26, range 125,145

      for (let i = 0; i < 3; i++) {
        let obj = {};
        obj["x"] = position[index[i]].x * width;
        obj["y"] = position[index[i]].y * height;
        back.push(obj);
      }
      const angle = Math.round(angleBetweenThreePoints(back));

      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.lineWidth = 8;

        canvasCtx.moveTo(back[i].x, back[i].y);
        canvasCtx.lineTo(back[i + 1].x, back[i + 1].y);
        if (angle >= 125 && angle <= 145) {
          canvasCtx.strokeStyle = "green";
        } else {
          canvasCtx.strokeStyle = "red";
        }
        canvasCtx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();

        canvasCtx.arc(back[i].x, back[i].y, 8, 0, Math.PI * 2);
       
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }

      canvasCtx.font = "48px aerial";
      canvasCtx.fillText(angle, back[1].x + 20, back[1].y + 20);
      
      canvasCtx.restore();
    }
  }

  useEffect(() => {
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
          await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  });

  return (
    <div>
      <div>
        <Webcam ref={webcamRef} style={styles.webcam} />
        <canvas ref={canvasRef} style={styles.webcam} />
      </div>
      <div style={styles.info}>
        <p>
          <h1>Trikonasana</h1>
        </p>
        <img src={yoga1} alternate="Yoga 2"></img>
      </div>
    </div>
  );
};

export default Treepose;