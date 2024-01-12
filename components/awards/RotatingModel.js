import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Awwwards } from '../models/AwwwardsModel';
import { PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function RotatingModel({ parentDiv, mediumParentDiv }) {
  console.log("LOADED AWARD MODEL")

  return (
    <>
      <Canvas linear>
        <EffectComposer disableNormalPass multisampling={0}>
          <ChromaticAberration blendFunction={BlendFunction.ALPHA} offset={[0.008199999999999999, 0.001]} />
        </EffectComposer>
        <PerspectiveCamera makeDefault fov={20} position={[0, 0.12, 7.7]} />
        <Awwwards parentDiv={parentDiv} mediumParentDiv={mediumParentDiv} />
      </Canvas>
    </>
  )
}

  // const { offset } = useControls('Tonemapping', {
  //   offset: { value: 0.008199999999999999, step: 0.0001, min: 0, max: 0.1 }
  // })
  // possible Values
  // {"offset":0.008199999999999999}
  // {"offset":0.0072}
  // {"offset":0.01}
