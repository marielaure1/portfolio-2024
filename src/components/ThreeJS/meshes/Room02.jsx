import { usePlane, useTrimesh } from '@react-three/cannon';

export default function Room02({nodes, materials}) {


  console.log(nodes["Room02-Structure-Screens03-Box"]?.geometry);
  return (
   <>
  <group dispose={null} name="Room02">
    <group position={[-257.663, 0.72, 137.487]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border01"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border02"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Glass"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[-257.663, 0.72, 100.317]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows03-Border01"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows03-Border02"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows03-Glass"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[-257.663, 0.72, 63.117]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows04-Border01"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows04-Border02"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows04-Glass"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[-257.663, 0.72, 25.947]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows05-Border01"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows05-Border02"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows05-Glass"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[-257.663, 0.72, -11.213]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows06-Border01"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows06-Border02"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows06-Glass"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[100.337, 0.72, -29.513]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border01001"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border02001"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Glass001"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[100.337, 0.72, 7.487]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border01002"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border02002"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Glass002"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[100.337, 0.72, 155.487]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border01003"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border02003"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Glass003"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[100.337, 0.72, 192.487]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border01004"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border02004"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Glass004"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[-257.663, 0.72, 174.487]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border01006"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[1.128, 8.582, 2.714]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Border02006"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.941, 8.243, 2.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Windows02-Glass006"]?.geometry}
        material={materials.Glass}
        position={[-1.058, 13.439, -6.137]}
        scale={[0.754, 7.966, 2.269]}
      />
    </group>
    <group position={[-153.981, 8.903, -63.961]} scale={[1.557, 1.557, 1]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens01-Box"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, 11.713]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens01-Media"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, 11.713]}
      />
    </group>
    <group position={[-70.159, 8.903, -50.961]} scale={[1.557, 1.557, 1]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens02-Box"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens02-Media"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-160.981, 8.903, 210.039]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[1.557, 1.557, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens03-Box"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, 11.713]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens03-Media"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, 11.713]}
      />
    </group>
    <group
      position={[-82.981, 8.903, 210.039]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[1.557, 1.557, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens04-Box"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, 11.713]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Structure-Screens04-Media"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, 11.713]}
      />
    </group>
    <group
      position={[-208.236, 12.429, -35.205]}
      rotation={[0, 1.568, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-211.596, 12.429, -35.205]}
      rotation={[Math.PI, -1.568, Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box001"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media001"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group position={[-210.314, 9.363, -34.951]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01008"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 8.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02008"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -8.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-105.236, 12.429, -35.205]}
      rotation={[0, 1.568, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box002"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media002"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-108.596, 12.429, -35.205]}
      rotation={[Math.PI, -1.568, Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box003"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media003"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group position={[-107.314, 9.363, -34.951]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01001"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 8.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02001"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -8.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall001"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-226.134, 12.429, 28.427]}
      rotation={[0, -0.003, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box005"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media005"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-225.879, 9.363, 27.145]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01002"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 17.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02002"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -17.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall002"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-226.134, 12.429, 25.137]}
      rotation={[-Math.PI, 0.003, -Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box004"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media004"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-152.134, 12.429, 28.427]}
      rotation={[0, -0.003, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box006"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media006"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-151.879, 9.363, 27.145]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01003"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 17.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02003"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -17.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall003"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-152.134, 12.429, 25.137]}
      rotation={[-Math.PI, 0.003, -Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box007"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media007"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-78.134, 12.429, 28.427]}
      rotation={[0, -0.003, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box016"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media016"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group position={[-77.879, 9.363, 27.145]} rotation={[0, Math.PI / 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01009"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 17.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02009"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -17.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall008"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-78.134, 12.429, 25.137]}
      rotation={[-Math.PI, 0.003, -Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box017"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media017"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-209.236, 12.429, 177.795]}
      rotation={[0, 1.568, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box008"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media008"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-212.596, 12.429, 177.795]}
      rotation={[Math.PI, -1.568, Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box009"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media009"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group position={[-211.314, 9.363, 178.049]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01004"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 8.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02004"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -8.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall004"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-105.236, 12.429, 178.795]}
      rotation={[0, 1.568, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box010"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media010"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-108.596, 12.429, 178.795]}
      rotation={[Math.PI, -1.568, Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box011"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media011"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group position={[-107.314, 9.363, 179.049]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01005"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 8.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02005"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -8.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall005"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-225.134, 12.429, 122.427]}
      rotation={[0, -0.003, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box012"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media012"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-224.879, 9.363, 121.145]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01006"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 17.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02006"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -17.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall006"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-225.134, 12.429, 119.137]}
      rotation={[-Math.PI, 0.003, -Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box013"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media013"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-151.134, 12.429, 122.427]}
      rotation={[0, -0.003, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box014"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media014"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-150.879, 9.363, 121.145]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01007"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 17.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02007"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -17.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall007"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-151.134, 12.429, 119.137]}
      rotation={[-Math.PI, 0.003, -Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box015"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media015"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-82.134, 12.429, 122.427]}
      rotation={[0, -0.003, 0]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box018"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media018"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <group
      position={[-81.879, 9.363, 121.145]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope01010"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, 17.671]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Rope02010"]?.geometry}
        material={materials[" Gasket Rubber"]}
        position={[0.427, 26.847, -17.329]}
        scale={0.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Suspension-Wall009"]?.geometry}
        material={materials["screen-white"]}
        position={[0.362, -4.949, 16.155]}
        rotation={[0, 0, -Math.PI]}
        scale={[-2.263, -0.811, -27.147]}
      />
    </group>
    <group
      position={[-82.134, 12.429, 119.137]}
      rotation={[-Math.PI, 0.003, -Math.PI]}
      scale={[1.35, 1.35, 1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Box019"]?.geometry}
        material={materials.screen}
        position={[-4.475, 0.232, -1.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Room02-Bloc01-Screen01-Media019"]?.geometry}
        material={materials["Poject 2"]}
        position={[-4.475, 0.232, -1.287]}
      />
    </group>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Benches-Suspension01-Plank"]?.geometry}
      material={nodes["Room02-Benches-Suspension01-Plank"]?.material}
      position={[-86.584, 6.238, 69.097]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Bloc01-Suspension01-Rope01"]?.geometry}
      material={materials[" Gasket Rubber.005"]}
      position={[-95.887, 13.21, 72.721]}
      scale={[0.132, 0.067, 0.132]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Bloc01-Suspension01-Rope02"]?.geometry}
      material={materials[" Gasket Rubber.005"]}
      position={[-63.887, 13.21, 72.721]}
      scale={[0.132, 0.067, 0.132]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Benches-Suspension02-Plank"]?.geometry}
      material={nodes["Room02-Benches-Suspension02-Plank"]?.material}
      position={[-160.584, 6.238, 69.097]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Bloc01-Suspension02-Rope01"]?.geometry}
      material={materials[" Gasket Rubber.005"]}
      position={[-169.887, 13.21, 72.721]}
      scale={[0.132, 0.067, 0.132]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Bloc01-Suspension02-Rope02"]?.geometry}
      material={materials[" Gasket Rubber.005"]}
      position={[-137.887, 13.21, 72.721]}
      scale={[0.132, 0.067, 0.132]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Benches-Suspension03-Plank"]?.geometry}
      material={nodes["Room02-Benches-Suspension03-Plank"]?.material}
      position={[-229.584, 6.238, 69.097]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Benches-Suspension03-Rope01"]?.geometry}
      material={materials[" Gasket Rubber.005"]}
      position={[-238.887, 13.21, 72.721]}
      scale={[0.132, 0.067, 0.132]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Benches-Suspension03-Rope02"]?.geometry}
      material={materials[" Gasket Rubber.005"]}
      position={[-206.887, 13.21, 72.721]}
      scale={[0.132, 0.067, 0.132]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Grass01"]?.geometry}
      material={materials["Material.003"]}
      position={[-81.946, 0.5, 176.835]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Grass02"]?.geometry}
      material={materials["Material.003"]}
      position={[-81.426, 0.5, 50.225]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["Room02-Grass03"]?.geometry}
      material={materials["Material.003"]}
      position={[-81.956, 0.5, -74.085]}
    />
  </group>
   </>
  )
}