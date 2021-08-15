import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { Earth } from '../components/Earth';
import { Card } from '../components/Card';

import { CanvasContainer } from './styles';

export default function Home() {
  return (
    <CanvasContainer>
      <Card />
      <Canvas>
        <Suspense fallback={null}>
          <Earth args={[1.005, 32, 32]} position={[1, 0, 5]} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}
