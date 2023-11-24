import { useRef, useEffect } from "react";

import dragonScene from "../assets/3d/dragon.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Dragon = () => {
  const dragonRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(dragonScene);

  // Get access to the animations for the dragon
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    actions["BenPao"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (dragonRef.current.position.x > camera.position.x + 10) {
      dragonRef.current.rotation.y = Math.PI;
    } else if (dragonRef.current.position.x < camera.position.x - 10) {
      dragonRef.current.rotation.y = 0;
    }

    if (dragonRef.current.rotation.y === 0) {
      dragonRef.current.position.x += 0.01;
      dragonRef.current.position.z -= 0.01;
    } else {
      dragonRef.current.position.x -= 0.01;
      dragonRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={dragonRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Dragon;
