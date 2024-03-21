import { useTrimesh, useCompoundBody } from '@react-three/cannon';
import * as THREE from 'three';
import {useLoader, useThree, useFrame} from "@react-three/fiber"


const useMeshes = {
    handleClickProject: (event, mesh, state, pointerLockControls) => {
        event.stopPropagation();

        console.log(pointerLockControls);

        pointerLockControls.lock()
        mesh.lookAt()
    },
      
    createMesh: (mesh, index, pointerLockControls) => {
        if (mesh.geometry) {
      
          let listMeshesToExclude = ["Grass", "Rope"];
          let listMeshesToInclure = ["Structure", "Hall", "Room01", "Room02", "Room03"];
          let ref = null;
      
          // Créez une nouvelle instance de Vector3 pour stocker la position mondiale
          const worldPosition = new THREE.Vector3();
          
          // Obtenez la position mondiale de la mesh
          mesh.getWorldPosition(worldPosition);
      
          // Vous pouvez également obtenir la rotation mondiale de la mesh si nécessaire
          const worldRotation = new THREE.Euler();
          mesh.getWorldQuaternion(worldRotation);
      
          const worldScale = new THREE.Vector3();
          
          // Obtenez la position mondiale de la mesh
          mesh.getWorldScale(worldScale);
      

          let state = useThree();

          // Vous n'avez pas besoin de la mise à l'échelle ici car ellle est déjà récupérée
          // avec la méthode getWorldScale() plus bas dans le code.
      
          if(listMeshesToInclure.some((keyword) => mesh.name.toLowerCase().trim().includes(keyword.toLowerCase().trim())) && !listMeshesToExclude.some((keyword) => mesh.name.toLowerCase().trim().includes(keyword.toLowerCase().trim()))){
            let [ref] = useTrimesh(() => ({
              type: 'Static',
              mass: mesh?.name?.includes('Floor') || mesh?.name?.includes('Wall') ? 0 : 1,
              args: [
                mesh?.geometry?.attributes?.position?.array,
                mesh?.geometry?.index?.array,
              ],
              position: [worldPosition.x, worldPosition.y, worldPosition.z],
              rotation: [worldRotation.x, worldRotation.y, worldRotation.z],
              scale: [worldScale.x, worldScale.y, worldScale.z],
            }));
          }
      
          return (
            <mesh
              key={index}
              ref={ref == null ? ref : null}
              name={mesh?.name}
              castShadow
              receiveShadow
              position={worldPosition}
              geometry={mesh?.geometry}
              scale={worldScale}
              rotation={worldRotation}
              material={mesh?.material}
              onDoubleClick={mesh.name.includes("Screen") ? (event) => useMeshes.handleClickProject(event, mesh, state, pointerLockControls) : null}
            />
          );
        }
    }    
}

export default useMeshes;