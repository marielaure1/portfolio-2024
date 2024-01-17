import { usePlane, useTrimesh } from '@react-three/cannon';

export default function Room01({nodes, materials}) {

  return (
   <>

  <group dispose={null} name='Room01'>
    <group position={[51.942, 1.536, -32.384]} scale={12.985}>
      <group
        position={[0.626, 0.3, -0.125]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes?.Plane036?.geometry}
          material={materials["Black Melamine"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes?.Plane036_1?.geometry}
          material={materials["Wood Finished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes?.Plane036_2?.geometry}
          material={materials["Rose Gold Metal"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Table_Cuboid_Support?.geometry}
        material={materials["Rose Gold Metal"]}
        position={[0.601, 0.595, 0.001]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Table_Leg?.geometry}
        material={materials["Rose Gold Metal"]}
        position={[-0.772, 0.314, -0.003]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <group
        position={[-0.047, 0.72, -0.031]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes?.Plane033?.geometry}
          material={materials["Black Melamine"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes?.Plane033_1?.geometry}
          material={materials["Rose Gold Metal"]}
        />
      </group>
    </group>
    <group position={[57.477, 8.83, -64.57]} rotation={[0, 0.004, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Cube170?.geometry}
        material={materials.Painting01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Cube170_1?.geometry}
        material={materials.screen}
      />
    </group>
    <group
      position={[49.338, 0.197, 21.989]}
      rotation={[Math.PI, -0.006, Math.PI]}
      scale={14.268}
    >
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh_1?.geometry}
        material={materials["Fabric.001"]}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh_2?.geometry}
        material={materials.Base}
      />
    </group>
    <group position={[-3.662, 12.197, 32.989]} scale={17.586}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Plane?.geometry}
        material={materials.carpet}
        position={[3.184, -0.625, -3.525]}
        scale={[1.595, 2.137, 2.137]}
      />
    </group>
    <group
      position={[29.817, 1.706, -53.04]}
      rotation={[Math.PI, -1.048, Math.PI]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh001?.geometry}
        material={materials["Fabric Beige"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh001_1?.geometry}
        material={materials["BlacK Blur"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh001_2?.geometry}
        material={materials.Wood_2k}
      />
    </group>
    <group position={[31.446, 1.706, -27.294]} rotation={[0, -1.053, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh002?.geometry}
        material={materials["Fabric Beige"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh002_1?.geometry}
        material={materials["BlacK Blur"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Mesh002_2?.geometry}
        material={materials.Wood_2k}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room01-Objects-Chairs01"]?.geometry}
      material={materials?.material}
      position={[51.338, 0.197, -50.011]}
      scale={14.145}
    />
    <group
      position={[15.127, 1.536, -56.957]}
      rotation={[0, Math.PI / 2, 0]}
      scale={7.835}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Circle001?.geometry}
        material={materials["Procedural Dirt"]}
        position={[0, 0.603, 0]}
        scale={[0.3, 0.675, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.FEUILLE?.geometry}
        material={materials["Material.007"]}
        position={[0, 0.63, 0]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.FEUILLE003?.geometry}
        material={materials["Material.007"]}
        position={[0.056, 0.6, -0.026]}
        rotation={[-Math.PI, 0.92, -Math.PI]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Test?.geometry}
        material={materials["Procedrual Cement wall"]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.tIGE?.geometry}
        material={materials["Material.006"]}
        position={[0, 0.63, 0]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.tIGE003?.geometry}
        material={materials["Material.006"]}
        position={[0.056, 0.6, -0.026]}
        rotation={[-Math.PI, 0.92, -Math.PI]}
        scale={0.153}
      />
    </group>
    <group
      position={[88.064, 1.536, -56.957]}
      rotation={[Math.PI, -1.3, Math.PI]}
      scale={7.835}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Circle002?.geometry}
        material={materials["Procedural Dirt.001"]}
        position={[0, 0.603, 0]}
        scale={[0.3, 0.675, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.FEUILLE001?.geometry}
        material={materials["Material.013"]}
        position={[0.056, 0.6, -0.026]}
        rotation={[-Math.PI, 0.92, -Math.PI]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.FEUILLE002?.geometry}
        material={materials["Material.013"]}
        position={[0, 0.63, 0]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Test001?.geometry}
        material={materials["Procedrual Cement wall.001"]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.tIGE001?.geometry}
        material={materials["Material.014"]}
        position={[0.056, 0.6, -0.026]}
        rotation={[-Math.PI, 0.92, -Math.PI]}
        scale={0.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.tIGE002?.geometry}
        material={materials["Material.014"]}
        position={[0, 0.63, 0]}
        scale={0.153}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room01-Wall-Glass-01"]?.geometry}
      material={materials.Glass}
      position={[-0.88, 41.273, 211.507]}
      rotation={[0, Math.PI / 2, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room01-Wall-Glass-02"]?.geometry}
      material={materials.Glass}
      position={[-0.88, 41.273, 211.507]}
      rotation={[0, Math.PI / 2, 0]}
    />
  </group>
   </>
  )
}