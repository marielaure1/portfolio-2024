import { OrbitControls, PointerLockControls, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {useLoader, useThree, useFrame} from "@react-three/fiber"
import Player from "@/components/ThreeJS/player/Player.jsx"
// import Floor from './Meshes/Floor.jsx';
import useExperience from '@/components/ThreeJS/Experience.hook.jsx';
import useLeva from '@/components/ThreeJS/debug/useLeva.jsx';
// import useObjectToArray from '@/hook/useObjectToArray.jsx';
import Lights from "@/components/ThreeJS/lights/Lights.jsx";

export default function Experience(props)
{

	const { 
    PlayerDatas, 
    PerfDatas, 
    Floor01Datas
  } = useLeva();

	const {
		nodes, 
		materials, 
		Floor01Ref, 
		Floor02Ref, 
		Stairs01Ref
	} = useExperience();

  

  // console.log(nodes);
	return <>

        <Perf 
        position={PerfDatas.position}
        visible={PerfDatas.visible}
        />

        <OrbitControls makeDefault />
        <PointerLockControls  selector="#button"/>

        <Lights/>
    
        {/* <Player 
		controls 
		position={PlayerDatas.scale} 
		args={[1]} 
		scale={PlayerDatas.scale} 
		color="yellow" 
		/> */}

     

        {/* <Floor 
            rotation={useObjectToArray(FloorControls01.rotation)} 
            position={useObjectToArray(FloorControls01.position)} 
            scale={useObjectToArray(FloorControls01.scale)} 
            // alphaMap={FloorControls01.alphaMap} 
            // visible={FloorControls01.visible} 
        /> */}


    </>
}

 