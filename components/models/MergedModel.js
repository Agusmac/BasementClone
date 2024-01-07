import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useControls } from "leva";


export default function Merged({ props, heroRef }) {

    const { nodes, materials } = useGLTF("/office3-merged.glb");
    const Scene = useRef()
    // const { rotationX } = useControls({ rotationX: 0 })
    // const { rotationY } = useControls({ rotationY: 180 })
    // const { rotationZ } = useControls({ rotationZ: 0 })
    useLayoutEffect(() => {
        // console.log("3d MODEL LOADED")
        gsap.registerPlugin(ScrollTrigger);
        const hero = heroRef.current;
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                scrub: true,
                // end: 'bottom top',
            },
        });

        timeline.to(Scene.current.position, {
            y: '1.25',
        });
        timeline.to(Scene.current.rotation, {
            z: '0.1',
        });
    })

    return (
        <group ref={Scene}>
            <group
                rotation-order="YZX"
                rotationOrder="YZX"
                rotation={[0, 180, 0]}
                {...props} dispose={null}>
                <mesh
                    geometry={nodes.Mesh024.geometry}
                    material={materials["Material.010"]}
                />
                <mesh
                    geometry={nodes.Mesh024_1.geometry}
                    material={materials.Desk_01}
                />
                <mesh
                    geometry={nodes.Mesh024_2.geometry}
                    material={materials["DESK_02.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_3.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    geometry={nodes.Mesh024_4.geometry}
                    material={materials["03_cornerback"]}
                />
                <mesh
                    geometry={nodes.Mesh024_5.geometry}
                    material={materials["04_Shelf"]}
                />
                <mesh
                    geometry={nodes.Mesh024_6.geometry}
                    material={materials["05_chair"]}
                />
                <mesh
                    geometry={nodes.Mesh024_7.geometry}
                    material={materials["Silla_01.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_8.geometry}
                    material={materials["07_chair_02_01"]}
                />
                <mesh
                    geometry={nodes.Mesh024_9.geometry}
                    material={materials["08_PC_Mac_"]}
                />
                <mesh
                    geometry={nodes.Mesh024_10.geometry}
                    material={materials["09_PC"]}
                />
                <mesh
                    geometry={nodes.Mesh024_11.geometry}
                    material={materials["10_Print"]}
                />
                <mesh
                    geometry={nodes.Mesh024_12.geometry}
                    material={materials["11_Nintendo"]}
                />
                <mesh
                    geometry={nodes.Mesh024_13.geometry}
                    material={materials["12_Lamp_01"]}
                />
                <mesh
                    geometry={nodes.Mesh024_14.geometry}
                    material={materials["12_Radio"]}
                />
                <mesh
                    geometry={nodes.Mesh024_15.geometry}
                    material={materials["15_papers"]}
                />
                <mesh
                    geometry={nodes.Mesh024_16.geometry}
                    material={materials["16_Pika"]}
                />
                <mesh
                    geometry={nodes.Mesh024_17.geometry}
                    material={materials["17_Plant"]}
                />
                <mesh
                    geometry={nodes.Mesh024_18.geometry}
                    material={materials["18_Coca"]}
                />
                <mesh
                    geometry={nodes.Mesh024_19.geometry}
                    material={materials["19_Goku"]}
                />
                <mesh
                    geometry={nodes.Mesh024_20.geometry}
                    material={materials["20_Basement_neon"]}
                />
                <mesh
                    geometry={nodes.Mesh024_21.geometry}
                    material={materials.Cuadros}
                />
                <mesh
                    geometry={nodes.Mesh024_22.geometry}
                    material={materials["22_Desk-document.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_23.geometry}
                    material={materials["Black Metal Wire Mesh.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_24.geometry}
                    material={materials["black metal"]}
                />
                <mesh
                    geometry={nodes.Mesh024_25.geometry}
                    material={materials["Black Metal Wire Mesh"]}
                />
                <mesh
                    geometry={nodes.Mesh024_26.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_27.geometry}
                    material={materials["24_ML_BOX.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_28.geometry}
                    material={materials.acc}
                />
                <mesh
                    geometry={nodes.Mesh024_29.geometry}
                    material={materials.Metal}
                />
                <mesh
                    geometry={nodes.Mesh024_30.geometry}
                    material={materials["Material #1863"]}
                />
                <mesh
                    geometry={nodes.Mesh024_31.geometry}
                    material={materials.Black_standar}
                />
                <mesh
                    geometry={nodes.Mesh024_32.geometry}
                    material={materials.cable_white}
                />
                <mesh
                    geometry={nodes.Mesh024_33.geometry}
                    material={materials.cable_black}
                />
                <mesh
                    geometry={nodes.Mesh024_34.geometry}
                    material={materials.books}
                />
                {/* LETTER T */}
                <mesh
                    geometry={nodes.Mesh024_35.geometry}
                    material={materials["letter-t-material"]}
                />


                <mesh
                    geometry={nodes.Mesh024_36.geometry}
                    material={materials["exterior.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_37.geometry}
                    material={materials["Metal.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_38.geometry}
                    material={materials["Chromed metal.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_39.geometry}
                    material={materials["borracha.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_40.geometry}
                    material={materials["Plastics.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_41.geometry}
                    material={materials["white paint.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_42.geometry}
                    material={materials["LIGHT.001"]}
                />
                <mesh
                    geometry={nodes.Mesh024_43.geometry}
                    material={materials["dark Metal.001"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/office3-merged.glb");
// gsap.to(Scene.current.position, {
//     // values like 0.5, 1.0 already work but trying to replicate exactly basement's
//     // y: '2.09',
//     y: '1.25',
//     scrollTrigger: {
//         trigger: hero,
//         start: 'top top',
//         scrub: true,
//         // end: 'bottom top',
//     },
// });
// gsap.to(Scene.current.rotation, {
//     // z: '0.2',
//     z: '0.1',
//     scrollTrigger: {
//         trigger: hero,
//         start: 'top top',
//         scrub: true,
//     //   end: 'bottom top',
//     },
// });