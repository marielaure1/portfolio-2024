import { OrbitControls, PointerLockControls, FirstPersonControls, useGLTF, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {useLoader, useThree, useFrame} from "@react-three/fiber"
import Player from "@/components/ThreeJS/player/Player.jsx"
import useExperience from '@/components/ThreeJS/Experience.hook.jsx';
import useLeva from '@/components/ThreeJS/debug/useLeva.jsx';
// import useObjectToArray from '@/hook/useObjectToArray.jsx';
import Lights from "@/components/ThreeJS/lights/Lights.jsx";
import Meshes from "@/components/ThreeJS/meshes/Meshes.jsx";
import { useTrimesh } from '@react-three/cannon';
import {useEffect, useRef} from "react";

export default function Experience(props)
{

	const { 
    PlayerDatas, 
    PerfDatas, 
    // Floor01Datas
  } = useLeva();

	const {
		gallery
		// Floor01Ref, 
		// Floor02Ref, 
		// Stairs01Ref
	} = useExperience();

  const pointerLockControls = useRef();

  console.log(gallery);

return <>

        {/* <Perf 
        position={PerfDatas.position}
        visible={PerfDatas.visible}
        /> */}

        {/* <OrbitControls makeDefault /> */}
        {/* <FirstPersonControls 
        lookSpeed={0.06} 
        movementSpeed={10} 
        // autoForward={false} 
        mouseDragOn={true}
        // activeLook={false}
        verticalMax={Math.PI / 5}
        verticalMin={-Math.PI / 3}
        /> */}
        

        <Lights/>
        <axesHelper args={[5]} />

        <Environment files="spiaggia_di_mondello_4k.exr" background />
        <PointerLockControls  selector="#button" ref={pointerLockControls}/>
        <Meshes scene={gallery.scene} nodes={gallery.nodes} materials={gallery.materials} pointerLockControls={pointerLockControls}  />

        <Player 
        controls 
        position={PlayerDatas.position} 
        rotation={PlayerDatas.rotation} 
        args={[10, 10, 10]} 
        scale={[1]} 
        color="yellow" 
        />

    </>
}

 