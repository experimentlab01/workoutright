import React from "react";
import {Pose,POSE_CONNECTIONS} from '@mediapipe/pose'
import * as cam from '@mediapipe/camera_utils'
import Webcam from "react-webcam"
import {useRef, useEffect} from "react"

const styles = {
  webcam: {
    position:"absolute",
    marginRight:"auto",
    marginLeft:"auto",
    left:0,
    right:0,
    textAlign:"center",
    zIndex:9,
    width:640,
    height:480,
  }
}

function App() {
  //console.log("Test2")
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  let camera = null
  const drawconnect = window.drawConnectors
  const drawlandmark = window.drawLandmarks
  
  //console.log("Test3")
  function onResult(results){
    //console.log("Test4")
    //console.log(results)
    // set height and width of canvas
    canvasRef.current.width = webcamRef.current.video.videoWidth
    canvasRef.current.height = webcamRef.current.video.videoHeight
    
    const canvasElement = canvasRef.current
    const canvasCtx = canvasElement.getContext("2d")
    canvasCtx.save()

    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)
    
    if(results.poseLandmarks){
        drawconnect(canvasCtx, results.poseLandmarks,POSE_CONNECTIONS,
          {visibilityMin:0.65, color: '#00FF00', lineWidth: 4}
        );
        drawlandmark(canvasCtx, results.poseLandmarks,
        {color: '#FF0000', lineWidth: 4}
        )
    }
    //console.log("Test11")
  }
  const renderCount = useRef(1)
  useEffect(()=>{
    //console.log("Test5")
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
    }})
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    })
    //console.log("Test6")
    pose.onResults(onResult)
    //console.log("Test8")

    if(typeof webcamRef.current!=="undefined" && webcamRef.current!==null){
      //console.log("Test9")
      camera = new cam.Camera(webcamRef.current.video,{
        onFrame: async()=>{
          await pose.send({image:webcamRef.current.video})
        },
        width:640,
        height:480
      })
      camera.start()
      //console.log("Test10")
    }
    renderCount.current = renderCount.current+1
  })
  //console.log("Test7")
  return (
    <div className ="App">
      <Webcam 
        ref={webcamRef}
        style = {styles.webcam}
      /> 
      <canvas 
        ref = {canvasRef}
        style = {styles.webcam}
      />
      <div>
        I rendered {renderCount.current} times
      </div>
    </div>
  );
}

export default App;