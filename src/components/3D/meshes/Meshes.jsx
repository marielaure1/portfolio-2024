import useMeshes from "@/components/3D/meshes/Meshes.hook.jsx";

export default function Meshes({nodes, materials, scene, pointerLockControls}) {

  return (
   <>
   {Object.values(scene.children).filter((mesh) => !mesh.name.includes("Grass")).map((mesh, index) => {

      if(!mesh.isMesh && mesh.isObject3D) { 

        return (
          <group 
          key={index}
          >
            
            {mesh.children.filter((mesh2) => mesh2.geometry && mesh2.geometry.attributes.position != NaN &&  mesh2.geometry.index != null ? true : false).map((mesh2, index1) => {

              return useMeshes.createMesh(mesh2, index1, pointerLockControls);
            })}
          </group>
        )
      } else if (mesh.isMesh && mesh.isObject3D) {
        return useMeshes.createMesh(mesh, index, pointerLockControls);
      } else {
        return null;
      }
    })}
   </>
  )
}