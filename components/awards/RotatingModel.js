import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Awwwards } from '../models/AwwwardsModel';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from "leva";
import { ToneMapping, EffectComposer, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'





export default function RotatingModel({ parentDiv, mediumParentDiv }) {
  console.log("LOADED MODEL")


  const { fovN } = useControls('camera', {
    fovN: { value: 20, step: 1, min: 0, max: 100 }
  })
  const { positionXCamera } = useControls('camera', {
    positionXCamera: { value: 0, step: 0.001, min: -10, max: 10 }
  })
  const { positionYCamera } = useControls('camera', {
    positionYCamera: { value: 0.12, step: 0.001, min: -10, max: 10 }
  })
  const { positionZCamera } = useControls('camera', {
    positionZCamera: { value: 7.7, step: 0.001, min: -20, max: 20 }
  })


  // const { middlegrey } = useControls('Tonemapping', {
  //   middlegrey: { value: 0.3, step: 0.001, min: 0, max: 1 }
  // })
  // const { offset } = useControls('Tonemapping', {
  //   offset: { value: 0.008199999999999999, step: 0.0001, min: 0, max: 0.1 }
  // })
  // possible Values
  // {"offset":0.008199999999999999}
  // {"offset":0.0072}
  // {"offset":0.01}
  return (
    <>
      <Canvas linear>
        <EffectComposer disableNormalPass multisampling={0}  >
          <ChromaticAberration blendFunction={BlendFunction.ALPHA} offset={[0.008199999999999999, 0.001]} />
        </EffectComposer>
        <PerspectiveCamera makeDefault fov={fovN} position={[positionXCamera, positionYCamera, positionZCamera]} />
        <Awwwards parentDiv={parentDiv} mediumParentDiv={mediumParentDiv} />
      </Canvas>
    </>
  )
}
