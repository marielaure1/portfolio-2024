import { OrbitControls, useHelper, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from "three";
import { useMemo, useRef } from "react";

export default function RubiksCube(){
    const gap = 4;
    const envMap = useRef();

    const cubes = useMemo(() => {
        const stylesMaterial = {
            "redMetal": {
                color: new THREE.Color("#FFA9A9"),
            },
            "beigeMetal": {
                color: new THREE.Color("#E6D7C6"),
                roughness: 0.4,
                transmission: 1,
                metalness: 0.6
            },
            "pinkGlass": {
                color: new THREE.Color("#F89FF3"),
                roughness: 0.4,
                transmission: 1,
                metalness: 0.6
            },
            "pinkMetal": {
                color: new THREE.Color("#FCC5F9"),
                roughness: 0.4,
                transmission: 1,
                metalness: 0.6
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
                roughness: 0.4,
                transmission: 1,
                metalness: 0.6
            },
        }

        const createCube = (position, scale, material) => {
            return {
                position,
                scale,
                geometry: <boxGeometry args={[1, 1]} />,
                material: (
                    <meshPhysicalMaterial
                        attach="material"
                        color={material?.color ?? "white"}
                        roughness={0.4}
                        metalness={1}
                        transmission={0.6}
                        thickness={1}
                    />
                )
            };
        };

        const createSphere = (position, scale, material) => {
            return {
                position,
                scale,
                geometry: <sphereGeometry args={[1, 32, 32]} />,
                material: (
                    <meshPhysicalMaterial
                        attach="material"
                        color={material?.color ?? "white"}
                        roughness={0.4}
                        metalness={1}
                        transmission={0.6}
                        thickness={1}
                    />
                )
            };
        };

        const meshes = [
            // Front
            createSphere([-gap, gap, gap], [1.8, 1.8, 1.8], stylesMaterial["pinkGlass"]),
            createCube([-gap, 0, gap], [3, 3, 3], stylesMaterial["redMetal"]),
            createCube([-gap, -gap, gap], [3, 3, 3], stylesMaterial["pinkMetal"]),
            createCube([0, gap, gap], [3, 3, 3], stylesMaterial["redMetal"]),
            createCube([0, 0, gap], [3, 3, 3], stylesMaterial["beigeMetal"]),
            createSphere([0, -gap, gap], [1.8, 1.8, 1.8], stylesMaterial["whiteGlass"]),
            createCube([gap, gap, gap], [3, 3, 3], stylesMaterial["pinkMetal"]),
            createCube([gap, 0, gap], [3, 3, 3], stylesMaterial["whiteGlass"]),
            createCube([gap, -gap, gap], [3, 3, 3], stylesMaterial["pinkGlass"]),
            // Middle
            createCube([-gap, gap, 0], [3, 3, 3], stylesMaterial["redMetal"]),
            createCube([-gap, 0, 0], [3, 3, 3], stylesMaterial["pinkGlass"]),
            createSphere([-gap, -gap, 0], [1.8, 1.8, 1.8], stylesMaterial["redMetal"]),
            createCube([0, gap, 0], [3, 3, 3], stylesMaterial["whiteGlass"]),
            createCube([0, 0, 0], [3, 3, 3], stylesMaterial["pinkGlass"]),
            createCube([0, -gap, 0], [3, 3, 3], stylesMaterial["redMetal"]),
            createCube([gap, gap, 0], [3, 3, 3], stylesMaterial["redMetal"]),
            createSphere([gap, 0, 0], [1.8, 1.8, 1.8], stylesMaterial["beigeMetal"]),
            createCube([gap, -gap, 0], [3, 3, 3], stylesMaterial["whiteGlass"]),
            // Back
            createSphere([-gap, gap, -gap], [1.8, 1.8, 1.8], stylesMaterial["beigeMetal"]),
            createCube([-gap, 0, -gap], [3, 3, 3], stylesMaterial["pinkMetal"]),
            createCube([-gap, -gap, -gap], [3, 3, 3], stylesMaterial["whiteGlass"]),
            createCube([0, gap, -gap], [3, 3, 3], stylesMaterial["redMetal"]),
            createCube([0, 0, -gap], [3, 3, 3], stylesMaterial["whiteGlass"]),
            createCube([0, -gap, -gap], [3, 3, 3], stylesMaterial["redMetal"]),
            createSphere([gap, gap, -gap], [1.8, 1.8, 1.8], stylesMaterial["pinkMetal"]),
            createCube([gap, 0, -gap], [3, 3, 3], stylesMaterial["pinkMetal"]),
            createCube([gap, -gap, -gap], [3, 3, 3], stylesMaterial["beigeMetal"])
        ];

        return meshes;
    }, [gap]);

    return (
        <Canvas
            camera={{ fov: 45, near: 0.1, far: 50, position: [0, 0, 40] }}
            className={"canvas"}
        >
            <color attach="background" args={["#E9F2F6"]} />
            {/* <OrbitControls /> */}
           
            <Environment  files="spiaggia_di_mondello_4k.exr" intensity={1} ref={envMap} />
            <group rotation={[Math.PI / 8, -Math.PI / 4, 0]}>
                {cubes.map((cube, index) => (
                    <mesh key={index} position={cube.position} scale={cube.scale}>
                        {cube.geometry}
                        {cube.material}
                    </mesh>
                ))}
            </group>
        </Canvas>
    );
}
