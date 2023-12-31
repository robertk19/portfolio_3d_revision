import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";
import HomeInfo from "../components/HomeInfo";
import Dragon from "../models/Dragon";
import Dalaran from "../models/Dalaran";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 10000 }} // *(, fov: 65, position: [1, 0.5, 5] FOR DALARAN)
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="b1e1ff"
            groundColor={"#000000"}
            intensity={1}
          />

          <Bird />
          {/* <Dragon
            isRotating={isRotating}
            scale={[100, 100, 100]}
            planePosition={planePosition}
            rotation={[0, 20.1, 0]}
          /> */}
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={[0.1, 4.7077, 0]}
            setCurrentStage={setCurrentStage}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          {/* <Dalaran
            position={[0, -1, -5]}
            rotation={[0.1, 4.7077, 0]}
            scale={[0.005, 0.005, 0.005]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          /> */}
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20.1, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
