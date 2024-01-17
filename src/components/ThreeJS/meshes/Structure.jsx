import { useTrimesh, useCompoundBody } from '@react-three/cannon';

const listInclude = [
  "718b85bb-8848-433c-9f2b-e848f5e2f60e",
  "593d9087-fd03-419b-8da7-d09a52061428",
  "a4198582-042e-49c8-b616-9631aa2209ac",
  "acd0c505-d6f3-4b70-9545-0ffee78b9d7a",
  "e45a0e29-de79-4402-bf39-228b50176221"
];


function createMesh(mesh, index) {

  if(mesh.geometry){

    // console.log(mesh.name);
    const [ref] = useTrimesh(() => ({
      type: 'Static',
      mass: mesh?.name?.includes('Floor') || mesh?.name?.includes('Wall') ? 0 : 1,
      args: [
        mesh?.geometry?.attributes?.position?.array,
        mesh?.geometry?.index?.array,
      ],
      position: [mesh.position.x, mesh.position.y, mesh.position.z],
      rotation: [mesh.rotation._x, mesh.rotation._y, mesh.rotation._z],
      scale: [mesh.scale.x, mesh.scale.y, mesh.scale.z],
    }));
  
      
    // console.log(ref);

    return (
      <mesh
        key={index}
        ref={ref}
        name={mesh?.name}
        castShadow
        receiveShadow
        position={mesh?.position}
        geometry={mesh?.geometry}
        scale={mesh?.scale}
        rotation={mesh?.rotation}
        material={mesh?.material}
      />
    );
  }
}

export default function Structure({ scene }) {

  return (
    <>
      {Object.values(scene.children).filter((mesh) => mesh.name.includes("Suspension")).map((mesh, index) => {

        if(!mesh.isMesh && mesh.isObject3D) { 

          // const [ref] = useTrimesh(() => ({
          //   type: 'Static',
          //   mass: mesh?.name?.includes('Floor') || mesh?.name?.includes('Wall') ? 0 : 1,
          //   args: [
          //     mesh?.geometry?.attributes?.position?.array,
          //     mesh?.geometry?.index?.array,
          //   ],
          //   position: [mesh.position.x, mesh.position.y, mesh.position.z],
          //   rotation: [mesh.rotation._x, mesh.rotation._y, mesh.rotation._z],
          //   scale: [mesh.scale.x, mesh.scale.y, mesh.scale.z],
          // }));

          // console.log(mesh);
          return (
            <group 
            key={index}
            // ref={ref} 
            position={mesh?.position} 
            scale={mesh?.scale} 
            rotation={mesh?.rotation}
            >
              
              {mesh.children.map((mesh2, index1) => {
      
                return createMesh(mesh2, index1);
              })}
            </group>
          )
        } else if (mesh.isMesh && mesh.isObject3D) {
          return createMesh(mesh, index);
        } else {
          return null;
        }
      })}
    </>
  );
}

// .filter((mesh) => mesh.geometry && mesh.geometry.attributes.position != NaN &&  mesh.geometry.index != null ? true : false)