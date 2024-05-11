import { OrbitControls, useHelper, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from "three";
import { useRef } from "react";



export default function RubiksCube(){
    const gap = 4;
    const directionalLightTargetRef = useRef();
    const envMap = useRef();

    const stylesMaterial = {
        "redMetal": {
            color: new THREE.Color("#FFA9A9"),
            roughness: 0.1,
            transmission: 1,
            metalness: 0.5
        },
        "beigeMetal": {
            color: new THREE.Color("#E6D7C6"),
            roughness: 0.1,
            transmission: 1,
            metalness: 0.5
        },
        "pinkGlass": {
            color: new THREE.Color("#F89FF3"),
            roughness: 0.4,
            transmission: 1,
            metalness: 0.6
        },
        "pinkMetal": {
            color: new THREE.Color("#FCC5F9"),
            roughness: 0.1,
            transmission: 0.5,
            metalness: 0.3
        },
        "whiteGlass": {
            color: new THREE.Color("#E7F1FB"),
            roughness: 0.4,
            transmission: 1,
            metalness: 0.6
        },
        "blueGlass": {
            color: new THREE.Color("#6CDEFF"),
            roughness: 0.4,
            transmission: 1,
            metalness: 0.6
        },
        "greyGlass": {
            color: new THREE.Color("#CDD4E7"),
            roughness: 0.4,
            transmission: 1,
            metalness: 0.6
        },
        "greyMetal": {
            color: new THREE.Color("#B7C4E1"),
            roughness: 0.1,
            transmission: 0.5,
            metalness: 0.3
        },
    }

    const meshes = [
        // Front
        {
            type : "sphere",
            position: [-gap, gap, gap],
            scale: 1.8,
            ...stylesMaterial["pinkGlass"]
        },
        {
            type : "cube",
            position: [-gap, 0, gap],
            scale: 3,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "cube",
            position: [-gap, -gap, gap],
            scale: 3,
            ...stylesMaterial["pinkMetal"]
        },
        {
            type : "cube",
            position: [0, gap, gap],
            scale: 3,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "cube",
            position: [0, 0, gap],
            scale: 3,
            target: true,
            ...stylesMaterial["beigeMetal"]
        },
        {
            type : "sphere",
            position: [0, -gap, gap],
            scale: 1.8,
            ...stylesMaterial["whiteGlass"]
        },
        {
            type : "cube",
            position: [gap, gap, gap],
            scale: 3,
            ...stylesMaterial["pinkMetal"]
        },
        {
            type : "cube",
            position: [gap, 0, gap],
            scale: 3,
            ...stylesMaterial["whiteGlass"]
        },
        {
            type : "cube",
            position: [gap, -gap, gap],
            scale: 3,
            ...stylesMaterial["pinkGlass"]
        },
        // Middle
        {
            type : "cube",
            position: [-gap, gap, 0],
            scale: 3,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "cube",
            position: [-gap, 0, 0],
            scale: 3,
            ...stylesMaterial["pinkGlass"]
        },
        {
            type : "sphere",
            position: [-gap, -gap, 0],
            scale: 1.8,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "cube",
            position: [0, gap, 0],
            scale: 3,
            ...stylesMaterial["whiteGlass"]
        },
        {
            type : "cube",
            position: [0, 0, 0],
            scale: 3,
            ...stylesMaterial["pinkGlass"]
        },
        {
            type : "cube",
            position: [0, -gap, 0],
            scale: 3,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "cube",
            position: [gap, gap, 0],
            scale: 3,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "sphere",
            position: [gap, 0, 0],
            scale: 1.8,
            ...stylesMaterial["beigeMetal"]
        },
        {
            type : "cube",
            position: [gap, -gap, 0],
            scale: 3,
            ...stylesMaterial["whiteGlass"]
        },
        // Back
        {
            type : "sphere",
            position: [-gap, gap, -gap],
            scale: 1.8,
            ...stylesMaterial["beigeMetal"]
        },
        {
            type : "cube",
            position: [-gap, 0, -gap],
            scale: 3,
            ...stylesMaterial["pinkMetal"]
        },
        {
            type : "cube",
            position: [-gap, -gap, -gap],
            scale: 3,
            ...stylesMaterial["whiteGlass"]
        },
        {
            type : "cube",
            position: [0, gap, -gap],
            scale: 3,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "cube",
            position: [0, 0, -gap],
            scale: 3,
            ...stylesMaterial["whiteGlass"]
        },
        {
            type : "cube",
            position: [0, -gap, -gap],
            scale: 3,
            ...stylesMaterial["redMetal"]
        },
        {
            type : "sphere",
            position: [gap, gap, -gap],
            scale: 1.8,
            ...stylesMaterial["pinkMetal"]
        },
        {
            type : "cube",
            position: [gap, 0, -gap],
            scale: 3,
            ...stylesMaterial["pinkMetal"]
        },
        {
            type : "cube",
            position: [gap, -gap, -gap],
            scale: 3,
            ...stylesMaterial["beigeMetal"]
        }
    ]
    return(
        <>
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 50,
                    position: [0, 0, 40]
                }}
                className={"canvas"}
            >
                <color attach="background" args={["#E9F2F6"]} /> 
                <OrbitControls makeDefault />
                {/* <ambientLight intensity={0.5} />  */}
                {/* <LightHelper target={directionalLightTargetRef.current} /> */}
                {/* <gridHelper /> */}
                {/* <axesHelper args={[5]} /> */}
                <Environment  files="spiaggia_di_mondello_4k.exr" intensity={1} ref={envMap} />
                <group rotation={[Math.PI / 8, -Math.PI / 4, 0]}>
                {meshes && meshes.map((mesh, key) => (
                   <mesh
                   key={key}
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
                ))}
                </group>
            </Canvas>
        </>
    )
}