
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

export function Awwwards({ props, parentDiv, mediumParentDiv }) {

  const model = useRef()

  useLayoutEffect(() => {
    // console.log("3d MODEL LOADED")
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 1024) {
      const parent = parentDiv.current;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: 'top +=88px',
          end: 'bottom 30%',
          scrub: true,
          // markers: true,
        },
      });

      timeline.to(model.current.rotation, {
        y: '+=6.28319', ease: 'none'
      });
      const timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: 'top bottom',
          end: 'top +=88px',
          scrub: true,
          // markers: true,
        },
      });

      timeline2.to(model.current.rotation, {
        x: '-=0.5', ease: 'none'
      });

      const timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true,
        },
      });
      timeline3.to(model.current.rotation, {
        x: '-=0.3', ease: "power1.in"
      });
      timeline3.to(model.current.position, {
        y: '+=0.3', ease: "power1.in", 
      },0);
    } else {
      console.log('MEDIUM GSAP')
      const mediumParent = mediumParentDiv.current
      const tlMediumScreen = gsap.timeline({
        scrollTrigger: {
          trigger: mediumParent,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true,
        },
      });
      tlMediumScreen.to(model.current.rotation, {
        x: '-=0.8', ease: "none"
      });
      tlMediumScreen.to(model.current.position, {
        y: '+=0.3', ease: "none", 
      },0);

    }

  },[])


  const { positionX } = useControls('cube', {
    positionX: { value: 0, step: 0.01, min: -10, max: 10 }
  })
  const { positionY } = useControls('cube', {
    // -0.04
    positionY: { value: -0.1, step: 0.00001, min: -2, max: 2 }
  })
  const { positionZ } = useControls('cube', {
    positionZ: { value: window.innerWidth > 1024 ? 4.0 : 3.94, step: 0.0001, min: -10, max: 10 }
  })

  const { rotationX } = useControls('cube', {
    rotationX: { value: 0.4, step: 0.001, min: -2, max: 2 }
  })
  const { rotationY } = useControls('cube', {
    rotationY: { value: 0.5, step: 0.001, min: 0, max: 2 }
  })
  const { rotationZ } = useControls('cube', {
    rotationZ: { value: 0, step: 0.001, min: -2, max: 2 }
  })
  const { scaleY } = useControls('cube', {
    scaleY: { value: window.innerWidth > 1024 ? 0.8 : 1, step: 0.1, min: 0, max: 10 }
  })
  const { cameraY } = useControls('cube', {
    cameraY: { value: 0, step: 0.1, min: -2, max: 2 }
  })


  const { nodes, materials } = useGLTF("/Awwwards.glb");

  // useThree(({ camera }) => {
  //   if (model.current) {
  //     camera.
  //     console.log(camera)
  //     camera.fov=5
  //     // camera.lookAt(0, 0, 0)
  //     // camera.position.y = cameraY
  //     // console.log(camera)
  //   }

  // });



  return (
    <group  {...props} dispose={null}>
      <group ref={model} position={[positionX, positionY, positionZ]}
        rotation={[rotationX, rotationY, rotationZ]}
        scale-y={scaleY}>
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials.m_Trophy3}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.m_Outline}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Awwwards.glb");