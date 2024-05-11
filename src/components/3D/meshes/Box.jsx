import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

export default function App({mesh, envMap, directionalLightTargetRef}) {

  return (

    <mesh
    position={mesh.position}
    scale={mesh.scale}
    ref={mesh.target ? directionalLightTargetRef : undefined}
    >
        {mesh.type === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
        {mesh.type === "cube" && <boxGeometry args={[1, 1]} />}
        <meshPhysicalMaterial
            color={mesh.color ?? "white"}
            roughness={mesh.roughness}
            metalness={mesh.metalness}
            transmission={mesh.transmission}
            thickness={1}
            envMap={envMap.current} 
        />
    </mesh>
  );
}
