
import { Canvas } from '@react-three/fiber';
import Experience from '@/components/ThreeJS/Experience.jsx'
import { Physics, Debug } from '@react-three/cannon';
import { Leva  } from "leva";
import useLeva from '@/components/ThreeJS/debug/useLeva.jsx';

export default function ThreeJS(){
    const mode = "dev";

    const { 
        PlayerDatas
        // Floor01Datas
        } = useLeva();
    return(
        <>
            {/* <Leva collapsed /> */}

            <Canvas
                shadows
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: PlayerDatas.position,
                    rotateY: 10
                } }

                className='canvas'
            >
                <Physics gravity={[0, -9.82, 0]}>
                    {/* <Debug color="red" scale={1.1}> */}
                        <Experience />
                    {/* </Debug> */}
                </Physics>
            
            </Canvas>
        </>
        

    )
    
}