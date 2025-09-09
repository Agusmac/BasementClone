import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, useTexture } from '@react-three/drei'
import { LinearFilter, NearestFilter } from 'three'

const urlArray = ["/awards/1.jpg", "/awards/2.jpg", "/awards/3.jpg", "/awards/4.jpg", "/awards/5.jpg", "/awards/6.jpg", "/awards/7.jpg", "/awards/8.jpg", "/awards/9.jpg", "/awards/10.jpg", "/awards/11.jpg", "/awards/12.jpg", "/awards/13.jpg", "/awards/14.jpg", "/awards/15.jpg", "/awards/16.jpg", "/awards/17.jpg", "/awards/18.jpg", "/awards/19.jpg", "/awards/20.jpg", "/awards/21.jpg", "/awards/22.jpg", "/awards/23.jpg", "/awards/24.jpg", "/awards/25.jpg", "/awards/26.jpg", "/awards/27.jpg"]

function AwardImage({ currentAward }) {

  let awardArray = useTexture(urlArray)

  Promise.all(awardArray.map((texture) => new Promise((resolve) => {
    texture.minFilter = LinearFilter;
    texture.magFilter = NearestFilter;
    texture.needsUpdate = true;
    resolve();
  })));

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[0.512 * 4, 0.679 * 4, 128, 128]} />
      <MeshDistortMaterial map={awardArray[currentAward - 1]} distort={0.3} speed={5} toneMapped={false} />
    </mesh>
  )
}

export default function Scenario({ currentAward }) {
  return (
    <Canvas className='pointer-events-none removePointerEvents' camera={{ position: [0, 0, 0.47 * 4] }}>
      <ambientLight intensity={3.14} />
      <AwardImage currentAward={currentAward} />
    </Canvas>
  )
}

