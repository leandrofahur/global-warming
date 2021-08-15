import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { Earth } from '../components/Earth';

import { CanvasContainer } from './styles';

export default function Home() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}
