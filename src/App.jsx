import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import {threeD_x, threeD_y, threeD_z} from "./points";
import {pointsArray} from "./pointsGen";

const mapSphere_x = [9, 5, 2, 0]
const mapSpehere_y = [9, 5, 2, 0]


const Ball = ({currentX, currentY, currentZ}) => {
  const boxRef = useRef();
  // useFrame((state, delta) => {
  //   boxRef.current.rotation.y += 0.02;
  // });
  return (
    <>
      {/* <Sphere ref={boxRef} args={[currentX, currentY, currentY]} rotation={[0.5, 0, 0]}> */}
      <mesh position={[currentX, currentY, currentZ]}>
          {/* <meshNormalMaterial /> */}
          <meshStandardMaterial color={"orange"} />
          <sphereGeometry args={[0.01, 32 , 16]} />
      </mesh>
      {/* </Sphere> */}
    </>

  )
}



const Scene = () => {
  return (
    <>
    <group>
      {/* {threeD_x.map((item, index) => { return (<Ball key={index} currentX={item} currentY={threeD_y[index]} currentZ={threeD_z[index]}/>)})} */}

      {pointsArray.map((item, index) => { return (<Ball key={index} currentX={item[0]} currentY={item[1]} currentZ={item[2]}/>)})}
      <ambientLight />
    </group>
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 0.1] }}>
      <OrbitControls />
      <Scene />
    </Canvas>
  );
};

export default App;
