import { usePlane } from '@react-three/cannon';

const Floor = (props) => {
  const [ref] = usePlane((index) => ({ 
    type: 'Static', 
    mass: 0, 
    position: props.position,
    rotation: props.rotation,
    scale: props.scale,
  }));

  console.log(props);
  return (
   <>
    <mesh 
        receiveShadow 
        rotation={props?.rotation} 
        ref={ref} 
        position={props?.position} 
        scale={props?.scale} 
        // visible={props?.visible}
        >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        // alphaMap={props?.alphaMap}
        color="white" 
        />
    </mesh>
   </>
  );
};

export default Floor;
