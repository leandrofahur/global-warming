import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export const Earth = (props: any) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
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
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} color="blue" />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  );
};
