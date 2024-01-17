import Structure from "@/components/ThreeJS/meshes/Structure.jsx";
import Hall from "@/components/ThreeJS/meshes/Hall.jsx";
import Room01 from "@/components/ThreeJS/meshes/Room01.jsx";
import Room02 from "@/components/ThreeJS/meshes/Room02.jsx";
import Room03 from "@/components/ThreeJS/meshes/Room03.jsx";

export default function Meshes({nodes, materials, scene}) {

  return (
   <>
   <Structure nodes={nodes} scene={scene} materials={materials}/>
   {/* <Room02 nodes={nodes} materials={materials}/> */}
   {/* <Hall nodes={nodes} materials={materials}/>
   <Room01 nodes={nodes} materials={materials}/>

   <Room03 nodes={nodes} materials={materials}/> */}
   </>
  )
}