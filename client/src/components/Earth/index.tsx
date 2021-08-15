import { useRef } from 'react';

import { useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import * as THREE from 'three';

export const Earth = (props: any) => {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    THREE.TextureLoader,
    [
      './textures/8k_earth_daymap.jpg',
      './textures/8k_earth_normal_map.jpg',
      './textures/8k_earth_specular_map.jpg',
      './textures/8k_earth_clouds.jpg',
    ],
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 9;
    cloudsRef.current.rotation.y = elapsedTime / 9;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[1, 0, 3]} intensity={1.2} />
      <Stars radius={300} depth={60} count={14000} factor={7} fade />
      <mesh ref={cloudsRef}>
        <sphereGeometry attach="geometry" args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom
          enablePan
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};
