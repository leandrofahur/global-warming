import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export const Earth = (props: any) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    THREE.TextureLoader,
    [
      './textures/8k_earth_daymap.jpg',
      './textures/8k_earth_normal_map.jpg',
      './textures/8k_earth_specular_map.jpg',
      './textures/8k_earth_clouds.jpg',
    ],
  );

  return (
    <>
      <ambientLight intensity={0.7} />
      <mesh>
        <sphereGeometry attach="geometry" args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
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
