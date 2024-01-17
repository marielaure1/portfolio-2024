
import { Canvas } from '@react-three/fiber';
import Experience from '@/components/ThreeJS/Experience.jsx'
import { Physics, Debug } from '@react-three/cannon';
import { Leva  } from "leva";

export default function ThreeJS(){
    return(
        <>
            <Leva collapsed/>

            <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [ 70, 10, 70 ]
        } }
        >
            <Physics gravity={[0, -9.82, 0]}>
                <Debug color="red" scale={1.1}>
                    <Experience />
                </Debug>
            </Physics>
        
        </Canvas>
        </>
      

    )
}