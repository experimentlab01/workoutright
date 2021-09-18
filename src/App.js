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
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  let camera = null
  // const drawconnect = window.drawConnectors
  // const drawlandmark = window.drawLandmarks
  
  function onResult(results){

    if(results.poseLandmarks){
      const position = results.poseLandmarks
    
      //ratios between 0-1
      // 12,14,16 index of right hand, Check pose_tracking_full body_landmarks.png for ref
      const posArray = [position[12],position[14],position[16]]

      // set height and width of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth
      canvasRef.current.height = webcamRef.current.video.videoHeight
      
      const width = canvasRef.current.width
      const height = canvasRef.current.height

      //console.log(width,height)

      const canvasElement = canvasRef.current
      const canvasCtx = canvasElement.getContext("2d")
      canvasCtx.save()

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)
      
        // drawconnect(canvasCtx, results.poseLandmarks,POSE_CONNECTIONS,
        //   {visibilityMin:0.65, color: '#00FF00', lineWidth: 4}
        // );
        // drawlandmark(canvasCtx, results.poseLandmarks,
        // {color: '#FF0000', lineWidth: 4}
        // )
        for(let i=0; i<2; i++){
          canvasCtx.beginPath()
          canvasCtx.moveTo(posArray[i].x*width, posArray[i].y*height)
          canvasCtx.lineTo(posArray[i+1].x*width, posArray[i+1].y*height)
          canvasCtx.lineWidth = 2
          canvasCtx.stroke()
        }
        for(let i=0; i<3; i++){
          canvasCtx.beginPath()
          canvasCtx.arc(posArray[i].x*width, posArray[i].y*height, 10, 0, Math.PI*2)
          canvasCtx.fillStyle = '#AAFF00'
          canvasCtx.fill()
        }
        canvasCtx.restore();
    }
  }

  useEffect(()=>{
    
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

    pose.onResults(onResult)
    
    if(typeof webcamRef.current!=="undefined" && webcamRef.current!==null){
      camera = new cam.Camera(webcamRef.current.video,{
        onFrame: async()=>{
          await pose.send({image:webcamRef.current.video})
        },
        width:640,
        height:480
      })
      camera.start()
    }
  })

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
    </div>
  );
}

export default App;