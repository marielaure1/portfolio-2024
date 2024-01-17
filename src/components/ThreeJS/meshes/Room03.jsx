import { usePlane, useTrimesh } from '@react-three/cannon';

export default function Room03({nodes, materials}) {

  return (
   <>

  <group dispose={null} name="Room03">
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room03-Wall"]?.geometry}
      material={materials.wall}
      position={[-0.88, 41.273, 283.507]}
      rotation={[0, Math.PI / 2, 0]}
    />
    <group position={[88.338, 0.197, 204.989]} scale={14.007}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.pot002?.geometry}
        material={materials["pot.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.pot002_1?.geometry}
        material={materials["GROUND.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant?.geometry}
        material={materials["leaf.003"]}
        position={[-0.167, 2.19, 0.052]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant001?.geometry}
        material={materials["leaf.003"]}
        position={[-0.449, 2.364, 0.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant002?.geometry}
        material={materials["leaf.003"]}
        position={[-0.191, 2.048, -0.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant003?.geometry}
        material={materials["leaf.003"]}
        position={[0.526, 1.805, -0.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant004?.geometry}
        material={materials["leaf.003"]}
        position={[-0.139, 1.927, -0.656]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant005?.geometry}
        material={materials["trunk.003"]}
        position={[0.022, 1.297, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant006?.geometry}
        material={materials["trunk.003"]}
        position={[0.022, 1.297, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant007?.geometry}
        material={materials["leaf.003"]}
        position={[-0.367, 0.813, -0.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant008?.geometry}
        material={materials["leaf.003"]}
        position={[0.173, 1.656, 0.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant009?.geometry}
        material={materials["leaf.003"]}
        position={[0.336, 0.782, -0.304]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant010?.geometry}
        material={materials["leaf.003"]}
        position={[0.586, 1.124, -0.035]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant011?.geometry}
        material={materials["leaf.003"]}
        position={[-0.091, 1.046, -0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant012?.geometry}
        material={materials["leaf.003"]}
        position={[-0.326, 1.425, 0.168]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant013?.geometry}
        material={materials["leaf.003"]}
        position={[0.418, 1.031, 0.257]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant014?.geometry}
        material={materials["leaf.003"]}
        position={[0.119, 1.912, -0.227]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant015?.geometry}
        material={materials["leaf.003"]}
        position={[-0.461, 1.752, 0.239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant016?.geometry}
        material={materials["leaf.003"]}
        position={[-0.279, 1.77, -0.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant017?.geometry}
        material={materials["leaf.003"]}
        position={[-0.008, 1.262, 0.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant024?.geometry}
        material={materials["leaf.003"]}
        position={[0.113, 1.621, -0.015]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant026?.geometry}
        material={materials["leaf.003"]}
        position={[0.05, 2.181, -0.064]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant028?.geometry}
        material={materials["leaf.003"]}
        position={[0.314, 2.241, -0.227]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant029?.geometry}
        material={materials["leaf.003"]}
        position={[-0.151, 0.969, -0.171]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant030?.geometry}
        material={materials["leaf.003"]}
        position={[0.182, 1.665, -0.084]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant031?.geometry}
        material={materials["leaf.003"]}
        position={[0.331, 1.305, -0.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant032?.geometry}
        material={materials["leaf.003"]}
        position={[0.321, 1.729, -0.531]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant033?.geometry}
        material={materials["leaf.003"]}
        position={[0.243, 1.935, 0.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant034?.geometry}
        material={materials["leaf.003"]}
        position={[-0.347, 1.173, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant035?.geometry}
        material={materials["leaf.003"]}
        position={[0.005, 1.137, 0.454]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant036?.geometry}
        material={materials["leaf.003"]}
        position={[0.149, 1.092, -0.203]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant037?.geometry}
        material={materials["leaf.003"]}
        position={[0.124, 1.193, -0.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant038?.geometry}
        material={materials["leaf.003"]}
        position={[-0.33, 1.624, 0.658]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant039?.geometry}
        material={materials["leaf.003"]}
        position={[-0.251, 1.591, -0.222]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant040?.geometry}
        material={materials["leaf.003"]}
        position={[-0.476, 1.517, -0.354]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant041?.geometry}
        material={materials["leaf.003"]}
        position={[-0.093, 1.451, 0.361]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant042?.geometry}
        material={materials["leaf.003"]}
        position={[0.036, 1.734, -0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant043?.geometry}
        material={materials["leaf.003"]}
        position={[-0.128, 2.081, 0.248]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant044?.geometry}
        material={materials["leaf.003"]}
        position={[0.251, 1.182, 0.182]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant045?.geometry}
        material={materials["leaf.003"]}
        position={[0.196, 0.867, -0.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant046?.geometry}
        material={materials["leaf.003"]}
        position={[0.267, 1.332, 0.314]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant047?.geometry}
        material={materials["leaf.003"]}
        position={[0.302, 1.035, -0.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant048?.geometry}
        material={materials["leaf.003"]}
        position={[-0.076, 1.407, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant049?.geometry}
        material={materials["leaf.003"]}
        position={[0.637, 1.467, -0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant050?.geometry}
        material={materials["leaf.003"]}
        position={[-0.059, 1.539, -0.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant051?.geometry}
        material={materials["trunk.003"]}
        position={[0.022, 1.297, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant052?.geometry}
        material={materials["leaf.003"]}
        position={[0.052, 1.043, -0.56]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant053?.geometry}
        material={materials["leaf.003"]}
        position={[-0.064, 1.752, -0.338]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant054?.geometry}
        material={materials["leaf.003"]}
        position={[0.329, 1.372, 0.048]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant055?.geometry}
        material={materials["leaf.003"]}
        position={[-0.064, 1.469, -0.625]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant056?.geometry}
        material={materials["leaf.003"]}
        position={[0.041, 1.072, 0.161]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant057?.geometry}
        material={materials["leaf.003"]}
        position={[-0.104, 2.178, 0.239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant058?.geometry}
        material={materials["leaf.003"]}
        position={[-0.121, 2.39, 0.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant059?.geometry}
        material={materials["leaf.003"]}
        position={[0.023, 2.208, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant060?.geometry}
        material={materials["leaf.003"]}
        position={[0.253, 2.489, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant061?.geometry}
        material={materials["trunk.003"]}
        position={[0.022, 1.297, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant062?.geometry}
        material={materials["leaf.003"]}
        position={[-0.266, 2.041, -0.412]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.plant063?.geometry}
        material={materials["leaf.003"]}
        position={[-0.082, 1.985, 0.441]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes?.React?.geometry}
      material={materials.React}
      position={[64.14, 12.278, 149.21]}
      rotation={[-Math.PI, 0, -Math.PI]}
    />
    <group
      position={[77.342, 11.92, 103.172]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve002?.geometry}
        material={materials["Vue-Blue"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve002_1?.geometry}
        material={materials["Vue-Green"]}
      />
    </group>
    <group
      position={[45.662, 11.179, 120.444]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[11.548, 9.984, 11.548]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve003?.geometry}
        material={materials["SVGMat.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve003_1?.geometry}
        material={materials["SVGMat.001"]}
      />
    </group>
    <group
      position={[28.752, 11.192, 120.161]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={12.476}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve004?.geometry}
        material={materials["SVGMat.010"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve004_1?.geometry}
        material={materials["SVGMat.011"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve004_2?.geometry}
        material={materials["SVGMat.012"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes?.Three?.geometry}
      material={materials["SVGMat.013"]}
      position={[83.578, 18.907, 111.837]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={12.109}
    />
    <group
      position={[55.559, 19.647, 109.916]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={11.792}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve029?.geometry}
        material={materials["SVGMat.014"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve029_1?.geometry}
        material={materials["SVGMat.015"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes?.Express?.geometry}
      material={materials["SVGMat.016"]}
      position={[60.14, 18.162, 109.909]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={15.35}
    />
    <group
      position={[80.788, 19.411, 110.417]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={12.039}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve032?.geometry}
        material={materials["SVGMat.024"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve032_1?.geometry}
        material={materials["SVGMat.023"]}
      />
    </group>
    <group
      position={[65.072, 10.584, 119.206]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={12.945}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054?.geometry}
        material={materials["SVGMat.046"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_1?.geometry}
        material={materials["SVGMat.025"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_2?.geometry}
        material={materials["SVGMat.026"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_3?.geometry}
        material={materials["SVGMat.027"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_4?.geometry}
        material={materials["SVGMat.028"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_5?.geometry}
        material={materials["SVGMat.029"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_6?.geometry}
        material={materials["SVGMat.030"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_7?.geometry}
        material={materials["SVGMat.031"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_8?.geometry}
        material={materials["SVGMat.032"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_9?.geometry}
        material={materials["SVGMat.033"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_10?.geometry}
        material={materials["SVGMat.034"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_11?.geometry}
        material={materials["SVGMat.035"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_12?.geometry}
        material={materials["SVGMat.036"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_13?.geometry}
        material={materials["SVGMat.037"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_14?.geometry}
        material={materials["SVGMat.038"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_15?.geometry}
        material={materials["SVGMat.039"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_16?.geometry}
        material={materials["SVGMat.040"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_17?.geometry}
        material={materials["SVGMat.041"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_18?.geometry}
        material={materials["SVGMat.042"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_19?.geometry}
        material={materials["SVGMat.043"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_20?.geometry}
        material={materials["SVGMat.044"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve054_21?.geometry}
        material={materials["SVGMat.045"]}
      />
    </group>
    <group
      position={[65.616, 19.36, 110.26]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={14.339}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve062?.geometry}
        material={nodes?.Curve062?.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve062_1?.geometry}
        material={materials["SVGMat.047"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve062_2?.geometry}
        material={materials["SVGMat.048"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve062_3?.geometry}
        material={materials["SVGMat.049"]}
      />
    </group>
    <group
      position={[60.278, 12.22, 117.505]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={11.141}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve073?.geometry}
        material={materials["SVGMat.059"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve073_1?.geometry}
        material={materials["SVGMat.060"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve073_2?.geometry}
        material={materials["SVGMat.061"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve073_3?.geometry}
        material={materials["SVGMat.062"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve073_4?.geometry}
        material={materials["SVGMat.063"]}
      />
    </group>
    <group
      position={[64.124, 12.22, 117.465]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={11.108}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve063?.geometry}
        material={materials["SVGMat.050"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve063_1?.geometry}
        material={materials["SVGMat.051"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve063_2?.geometry}
        material={materials["SVGMat.052"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve063_3?.geometry}
        material={materials["SVGMat.053"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve063_4?.geometry}
        material={materials["SVGMat.054"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve063_5?.geometry}
        material={materials["SVGMat.055"]}
      />
    </group>
    <group
      position={[73.72, 20.22, 108.825]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={9.991}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve082?.geometry}
        material={materials["SVGMat.068"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve082_1?.geometry}
        material={materials["SVGMat.069"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes?.Sass?.geometry}
      material={materials["SVGMat.067"]}
      position={[74.243, 11.22, 117.646]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={10.823}
    />
    <group
      position={[80.262, 11.22, 117.515]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={10.826}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve078?.geometry}
        material={materials["SVGMat.064"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve078_1?.geometry}
        material={materials["SVGMat.065"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve078_2?.geometry}
        material={materials["SVGMat.066"]}
      />
    </group>
    <group
      position={[84.526, 11.22, 117.645]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={12.571}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve089?.geometry}
        material={materials["SVGMat.075"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve089_1?.geometry}
        material={materials["SVGMat.070"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve089_2?.geometry}
        material={materials["SVGMat.071"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve089_3?.geometry}
        material={materials["SVGMat.072"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve089_4?.geometry}
        material={materials["SVGMat.073"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes?.Curve089_5?.geometry}
        material={materials["SVGMat.074"]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Podiums-Bloc"]?.geometry}
      material={materials["screen-white"]}
      position={[42.12, 41.273, 287.507]}
      rotation={[0, Math.PI / 2, 0]}
    />
  </group>
   </>
  )
}