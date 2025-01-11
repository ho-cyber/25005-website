import React from 'react';
import { Canvas } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { useLoader } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

const RobotCanvas = ({ scrollContainer }) => {
  // Load STL file
  const geometry = useLoader(STLLoader, 'src/assets/3d/00-Everybot.stl');

  return (
    <Canvas>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Render the loaded STL geometry */}
      <mesh geometry={geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="gray" metalness={0.3} roughness={0.7} />
      </mesh>
    </Canvas>
  );
};

export default RobotCanvas;
