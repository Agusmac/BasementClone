
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Awwwards({ props, parentDiv, mediumParentDiv }) {

  const model = useRef()

  useEffect(() => {
    // console.log("Awwward MODEL LOADED")

    if (window.innerWidth > 1024) {
      const parent = parentDiv.current;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: 'top +=88px',
          end: 'bottom 30%',
          scrub: true,
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
        },
      });

      timeline3.to(model.current.rotation, { x: '-=0.3', ease: "power1.in" });
      timeline3.to(model.current.position, { y: '+=0.3', ease: "power1.in", }, 0);

    } else {
      // console.log('MEDIUM GSAP')
      const mediumParent = mediumParentDiv.current
      const tlMediumScreen = gsap.timeline({
        scrollTrigger: {
          trigger: mediumParent,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tlMediumScreen.to(model.current.rotation, { x: '-=0.8', ease: "none" });
      tlMediumScreen.to(model.current.position, { y: '+=0.3', ease: "none", }, 0);

    }
  }, [])

  const { nodes, materials } = useGLTF("/Awwwards.glb");

  return (
    <group  {...props} dispose={null}>
      <group ref={model} position={[0, -0.1, window.innerWidth > 1024 ? 4.0 : 3.94]}
        rotation={[0.4, 0.5, 0]}
        scale-y={window.innerWidth > 1024 ? 0.8 : 1}>
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