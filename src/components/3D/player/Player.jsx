// import usePlayer from "@/components/3D/player/Player.hook.jsx";
import { useSphere, useBox, useTrimesh} from '@react-three/cannon';
import { useRef, useMemo} from "react";
import * as THREE from "three"

export default function Player(props) {

  // const { ref } = usePlayer(props);

  const geometry = useMemo(() => new THREE.BoxGeometry(), [])
  // console.log(geometry);
  const [ref, api] = useTrimesh(() => ({
    mass: 2,
    type: 'Dynamic',
    args: [
      geometry?.attributes?.position?.array,
      geometry?.index?.array,
    ],
    position: props.position
  }), useRef());

  console.log(ref);

  return (
    // <group>
      <mesh 
      name="test"
      castShadow 
      position={props.position} 
      // onPointerDown={() => api.velocity.set(0, 5, 0)}

      // scale={props.scale}
      ref={ref} 
      // scale={props.scale}
      >
        <boxGeometry args={[10, 10, 10]} />
        {/* <sphereGeometry args={props.args} /> */}
        <meshNormalMaterial  color="#FF0000" />
      </mesh>
    // </group>
  );
}