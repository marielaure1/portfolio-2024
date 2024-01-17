import { useSphere, useBox } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { useMovement } from '@/hook/useMovement.jsx';
import * as THREE from 'three';

export default function usePlayer(props) {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 30;

  const { camera } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    args: [10, 10, 10],
    position: props.position
  }));

  // const [ref, api] = useBox(() => ({
  //   mass: 1,
  //   type: 'Dynamic',
  //   args: [1, 2, 1], // Ajustez les dimensions de la boîte ici (width, height, depth)
  //   position: [props.position[0], props.position[1] + 40 - 1, props.position[2]],
  //   rotation: [0, 0, 0] // Ajustez le centre de masse
  // }));

  const { forward, backward, left, right, jump } = useMovement();
  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, []);

  useEffect(() => {
    console.log('Position:', ref.current.position.toArray());
    console.log('Mass:', api.mass);
    console.log('Type:', api.type);
    // ... autres propriétés
  }, [api.mass, api.type, ref]);

  useFrame(() => {
    ref.current.getWorldPosition(camera.position);

    // Ajoutez une valeur à la position Y de la caméra pour la soulever
    camera.position.y += 15;

    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05)
      api.velocity.set(velocity.current[0], 5, velocity.current[2]);
  });

  return {
    ref,
  };
}
