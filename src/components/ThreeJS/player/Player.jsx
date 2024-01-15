import usePlayer from "@/components/ThreeJS/player/Player.hook.jsx";

export default function Player(props) {

  const { ref } = usePlayer(props);

  return (
    <group>
      <mesh castShadow position={props.position} ref={ref} scale={props.scale}>
        <sphereGeometry args={props.args} />
        <meshStandardMaterial color="#FFFF00" />
      </mesh>
    </group>
  );
};