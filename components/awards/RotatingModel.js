import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Awwwards } from '../models/AwwwardsModel';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from "leva";
export default function RotatingModel({ parentDiv, mediumParentDiv }) {
    console.log("LOADED MODEL")


    const { fovN } = useControls('camera', {
        fovN: { value: 20, step: 1, min: 0, max: 100 }
      })
      const { positionXCamera } = useControls('camera', {
        positionXCamera: { value: 0,  step: 0.001, min: -10, max: 10}
      })
      const { positionYCamera } = useControls('camera', {
        positionYCamera: { value: 0.12,  step: 0.001, min: -10, max: 10 }
      })
      const { positionZCamera } = useControls('camera', {
        positionZCamera: { value: 7.7, step: 0.001, min: -20, max: 20 }
      })

    return (
        <>
            <Canvas>
                <PerspectiveCamera makeDefault fov={fovN} position={[positionXCamera,positionYCamera,positionZCamera]}/>
                {/* <ambientLight intensity={0} /> */}
                <Awwwards parentDiv={parentDiv} mediumParentDiv={mediumParentDiv} />
            </Canvas>
        </>
    )
}
