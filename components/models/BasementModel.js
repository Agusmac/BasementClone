import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Model({ props, heroRef }) {
    const { nodes, materials } = useGLTF("/office3.glb");

    const Scene = useRef()
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
                {...props}
                dispose={null}
                name="Scene">
                <mesh
                    name="ARQ_02"
                    geometry={nodes.ARQ_02.geometry}
                    material={materials["Material #1863"]}
                    position={[0.00504926, -0.00489964, -0.07160966]}
                    scale={0.01}
                />
                <mesh
                    name="24_ML_BOX001"
                    geometry={nodes["24_ML_BOX001"].geometry}
                    material={materials["24_ML_BOX.001"]}
                    position={[9.13179874, 1.72261822, 1.34204602]}
                    rotation={[0, 1.57053468, 0]}
                    scale={[2.21317816, 2.21317792, 2.21317792]}
                />
                <mesh
                    name="23_Trash_"
                    geometry={nodes["23_Trash_"].geometry}
                    material={materials["Material.001"]}
                    position={[8.78976822, 0.06431492, 0.36415187]}
                    scale={0.01}
                />
                <group
                    name="23_Desk-document002"
                    position={[9.08119869, 1.72414637, 0.2189218]}
                    rotation={[0, -1.57053468, 0]}
                    scale={[2.66230869, 2.66230893, 2.66230869]}
                >
                    <mesh
                        name="Mesh006"
                        geometry={nodes.Mesh006.geometry}
                        material={materials["black metal"]}
                    />
                    <mesh
                        name="Mesh006_1"
                        geometry={nodes.Mesh006_1.geometry}
                        material={materials["Black Metal Wire Mesh"]}
                    />
                </group>
                <group
                    name="22_Desk-document001"
                    position={[7.29361677, 1.84931934, 9.03614998]}
                    rotation={[Math.PI, -1.5e-7, Math.PI]}
                    scale={2.66230893}
                >
                    <mesh
                        name="Mesh008"
                        geometry={nodes.Mesh008.geometry}
                        material={materials["22_Desk-document.001"]}
                    />
                    <mesh
                        name="Mesh008_1"
                        geometry={nodes.Mesh008_1.geometry}
                        material={materials["Black Metal Wire Mesh.001"]}
                    />
                </group>
                <mesh
                    name="21_picture"
                    geometry={nodes["21_picture"].geometry}
                    material={materials.Cuadros}
                    position={[4.96131468, 4.20280647, 9.6514473]}
                    scale={0.01}
                />
                <mesh
                    name="20_Basement_neon"
                    geometry={nodes["20_Basement_neon"].geometry}
                    material={materials["20_Basement_neon"]}
                    position={[9.75852966, 4.33562183, 3.54815674]}
                    rotation={[Math.PI / 2, 1.2e-7, Math.PI / 2]}
                    scale={[0.01022654, 0.01009216, 0.01009216]}
                />
                <mesh
                    name="19_Goku"
                    geometry={nodes["19_Goku"].geometry}
                    material={materials["19_Goku"]}
                    position={[8.32666779, 1.81996727, 0.50677437]}
                    rotation={[-Math.PI / 2, 4e-8, -1.34891539]}
                    scale={[0.23470055, 0.23470053, 0.23470055]}
                />
                <mesh
                    name="18_Coca"
                    geometry={nodes["18_Coca"].geometry}
                    material={materials["18_Coca"]}
                    position={[8.26854897, 1.85577607, 2.18579125]}
                    scale={0.0668717}
                />
                <mesh
                    name="17_Plant"
                    geometry={nodes["17_Plant"].geometry}
                    material={materials["17_Plant"]}
                    position={[6.58455896, 1.85903955, 9.20730972]}
                    rotation={[Math.PI, -1.5e-7, Math.PI]}
                    scale={1.14694297}
                />
                <mesh
                    name="16_Pika"
                    geometry={nodes["16_Pika"].geometry}
                    material={materials["16_Pika"]}
                    position={[3.21937823, 1.90043151, 8.27501965]}
                    rotation={[-Math.PI / 2, -4e-8, -2.55952291]}
                    scale={[0.06311601, 0.06311603, 0.06311604]}
                />
                <mesh
                    name="15_papers"
                    geometry={nodes["15_papers"].geometry}
                    material={materials["15_papers"]}
                    position={[7.29002237, 2.27653122, 9.13835621]}
                    rotation={[0, 0.01098025, 0]}
                    scale={0.01}
                />
                <mesh
                    name="12_Radio"
                    geometry={nodes["12_Radio"].geometry}
                    material={materials["12_Radio"]}
                    position={[0.90568924, 1.36789393, 9.23000526]}
                    scale={0.01}
                />
                <mesh
                    name="12_Lamp_01"
                    geometry={nodes["12_Lamp_01"].geometry}
                    material={materials["12_Lamp_01"]}
                    position={[8.9631815, 3.27320576, 4.67458153]}
                    rotation={[2.40010159, 0.59348031, 0.47334098]}
                    scale={0.01}
                />
                <mesh
                    name="11_Nintendo"
                    geometry={nodes["11_Nintendo"].geometry}
                    material={materials["11_Nintendo"]}
                    position={[2.16791749, 2.36938572, 9.19125557]}
                    scale={0.01}
                />
                <mesh
                    name="10_Print"
                    geometry={nodes["10_Print"].geometry}
                    material={materials["10_Print"]}
                    position={[9.21083927, 1.94283652, 3.57184625]}
                    scale={0.01}
                />
                <mesh
                    name="09_PC"
                    geometry={nodes["09_PC"].geometry}
                    material={materials["09_PC"]}
                    position={[9.29804134, 2.67830229, 7.22288513]}
                    rotation={[1.66102561, -0.19794735, 2.00198759]}
                    scale={[0.00812937, 0.00812937, 0.00812938]}
                />
                <mesh
                    name="08_PC_Mac_"
                    geometry={nodes["08_PC_Mac_"].geometry}
                    material={materials["08_PC_Mac_"]}
                    position={[4.17219973, 2.42752934, 9.31320381]}
                    rotation={[Math.PI / 2, 1.5e-7, Math.PI / 2]}
                    scale={0.01}
                />
                <mesh
                    name="07_chair_02_01"
                    geometry={nodes["07_chair_02_01"].geometry}
                    material={materials["07_chair_02_01"]}
                    position={[7.38424921, 0.00012589, 1.57730401]}
                    rotation={[-Math.PI, 1.06171903, -Math.PI]}
                    scale={[2.06747293, 2.06747246, 2.06747293]}
                />
                <mesh
                    name="06_chair_01_02"
                    geometry={nodes["06_chair_01_02"].geometry}
                    material={materials["Silla_01.001"]}
                    position={[7.33619261, 1.08908021, 5.80988693]}
                    rotation={[0, -0.9369162, 0]}
                    scale={0.01}
                />
                <mesh
                    name="05_chair_01_01"
                    geometry={nodes["05_chair_01_01"].geometry}
                    material={materials["05_chair"]}
                    position={[4.48142385, 1.08815813, 6.90617609]}
                    rotation={[Math.PI, -1.41701032, Math.PI]}
                    scale={0.01}
                />
                <mesh
                    name="04_Shelf"
                    geometry={nodes["04_Shelf"].geometry}
                    material={materials["04_Shelf"]}
                    position={[2.60063958, 0.87146008, 9.62269592]}
                    scale={0.01}
                />
                <mesh
                    name="03_cornerback"
                    geometry={nodes["03_cornerback"].geometry}
                    material={materials["03_cornerback"]}
                    position={[7.83898783, 1.77806771, 8.71324158]}
                    rotation={[0, -1.57053468, 0]}
                    scale={0.01}
                />
                <mesh
                    name="02_Desk_02_02"
                    geometry={nodes["02_Desk_02_02"].geometry}
                    material={materials["Material.002"]}
                    position={[8.787467, 1.60061693, 4.49069691]}
                    scale={0.01}
                />
                <mesh
                    name="01_Desk_02_01"
                    geometry={nodes["01_Desk_02_01"].geometry}
                    material={materials["DESK_02.001"]}
                    position={[5.9636569, 1.59775639, 8.71504021]}
                    rotation={[0, -1.57053468, 0]}
                    scale={0.01}
                />
                <mesh
                    name="00_DESK_01"
                    geometry={nodes["00_DESK_01"].geometry}
                    material={materials.Desk_01}
                    position={[8.77804089, 0.00497276, 1.86152542]}
                    scale={0.01}
                />
                <mesh
                    name="28-AWARDS"
                    geometry={nodes["28-AWARDS"].geometry}
                    material={materials.acc}
                    position={[1.36846745, 4.7913084, 9.35974693]}
                    rotation={[-Math.PI, 0.06143943, -Math.PI]}
                    scale={[0.06123909, 0.20284447, 0.06123909]}
                />
                <mesh
                    name="32-MMM"
                    geometry={nodes["32-MMM"].geometry}
                    material={materials.acc}
                    position={[1.38329947, 4.76747227, 9.29716492]}
                    rotation={[-0.00000388, 1.50935624, -1.570792]}
                    scale={[0.11106931, 0.11106934, 0.11106934]}
                />
                <mesh
                    name="27_CAP"
                    geometry={nodes["27_CAP"].geometry}
                    material={materials.acc}
                    position={[6.12051392, 1.85903955, 8.20778179]}
                    rotation={[-Math.PI, 0.29664277, -Math.PI]}
                    scale={[2.3268609, 2.32686162, 2.3268609]}
                />
                <mesh
                    name="30_LAMP"
                    geometry={nodes["30_LAMP"].geometry}
                    material={materials.acc}
                    position={[3.33216357, 1.91789031, 8.96661282]}
                    scale={0.0058851}
                />
                <mesh
                    name="29_CUP"
                    geometry={nodes["29_CUP"].geometry}
                    material={materials.acc}
                    position={[0.89756817, 3.39101362, 9.11106586]}
                    rotation={[0, Math.PI / 9, 0]}
                    scale={0.01}
                />
                <group
                    name="Wall_lamp_neon"
                    position={[5.02162027, 5.88625288, 9.66839695]}
                    rotation={[Math.PI / 2, 3e-8, -Math.PI]}
                    scale={[5.19454193, 3.84548903, 3.84548903]}
                >
                    <mesh
                        name="Cover"
                        geometry={nodes.Cover.geometry}
                        material={materials["exterior.001"]}
                        position={[0, 0.0244031, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        name="Side_cover"
                        geometry={nodes.Side_cover.geometry}
                        material={materials["Plastics.001"]}
                        position={[0, 0.03461076, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
                <group
                    name="BezierCurve"
                    position={[4.61724186, 0.00716041, 11.51110649]}
                    rotation={[0, -0.81500156, 0]}
                >
                    <mesh
                        name="Mesh020"
                        geometry={nodes.Mesh020.geometry}
                        material={materials.cable_white}
                    />
                    <mesh
                        name="Mesh020_1"
                        geometry={nodes.Mesh020_1.geometry}
                        material={materials.cable_black}
                    />
                </group>
                <mesh
                    name="ARQ_3_Roof"
                    geometry={nodes.ARQ_3_Roof.geometry}
                    material={materials.Black_standar}
                    position={[0, 0.00012589, -0.07019592]}
                    scale={0.01}
                />
                <mesh
                    name="ARQ_3_floor"
                    geometry={nodes.ARQ_3_floor.geometry}
                    material={materials["Material.010"]}
                    position={[0, 0.010367, -0.07019592]}
                    scale={0.01}
                />
                <mesh
                    name="ARQ_3_"
                    geometry={nodes.ARQ_3_.geometry}
                    material={materials.Black_standar}
                    position={[0, 0.00012589, -0.07019592]}
                    scale={0.01}
                />
                <mesh
                    name="beams_"
                    geometry={nodes.beams_.geometry}
                    material={materials["black metal"]}
                    position={[9.46196651, 6.48681498, -0.07568082]}
                    rotation={[0, 1.57053468, 0]}
                    scale={[9.73419571, 0.20121059, 0.20121057]}
                />
                <group
                    name="Spring_Lamp"
                    position={[9.34191799, 1.85903955, 4.2988224]}
                    rotation={[Math.PI, -0.7909037, Math.PI]}
                    scale={2.16595364}
                >
                    <group name="Lamp_Body" rotation={[0, 1.57053468, 0]}>
                        <mesh
                            name="Circle002"
                            geometry={nodes.Circle002.geometry}
                            material={materials["Metal.001"]}
                        />
                        <mesh
                            name="Circle002_1"
                            geometry={nodes.Circle002_1.geometry}
                            material={materials["Chromed metal.001"]}
                        />
                        <mesh
                            name="Circle002_2"
                            geometry={nodes.Circle002_2.geometry}
                            material={materials["borracha.001"]}
                        />
                        <group
                            name="Lamp_Head"
                            position={[0, 0.70522732, 0.1202035]}
                            rotation={[-0.61086541, 0, 0]}
                        >
                            <mesh
                                name="Circle001"
                                geometry={nodes.Circle001.geometry}
                                material={materials["Metal.001"]}
                            />
                            <mesh
                                name="Circle001_1"
                                geometry={nodes.Circle001_1.geometry}
                                material={materials["white paint.001"]}
                            />
                            <mesh
                                name="Circle001_2"
                                geometry={nodes.Circle001_2.geometry}
                                material={materials["Chromed metal.001"]}
                            />
                            <mesh
                                name="Circle001_3"
                                geometry={nodes.Circle001_3.geometry}
                                material={materials["borracha.001"]}
                            />
                            <mesh
                                name="Circle001_4"
                                geometry={nodes.Circle001_4.geometry}
                                material={materials["LIGHT.001"]}
                            />
                            <mesh
                                name="Circle001_5"
                                geometry={nodes.Circle001_5.geometry}
                                material={materials["dark Metal.001"]}
                            />
                        </group>
                    </group>
                </group>
                <mesh
                    name="letter-t"
                    geometry={nodes["letter-t"].geometry}
                    material={materials["letter-t-material"]}
                    position={[9.75852966, 4.33562183, 3.54815674]}
                    rotation={[Math.PI / 2, 1.2e-7, Math.PI / 2]}
                    scale={[0.01022654, 0.01009216, 0.01009216]}
                />
                <mesh
                    name="animation-chair"
                    geometry={nodes["animation-chair"].geometry}
                    material={materials["05_chair"]}
                    position={[4.48142385, 1.08815813, 6.90617609]}
                    rotation={[Math.PI, -1.41701032, Math.PI]}
                    scale={0.01}
                />
                <mesh
                    name="Book_92"
                    geometry={nodes.Book_92.geometry}
                    material={materials.books}
                    position={[1.19183981, 2.06854463, 9.1002512]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <mesh
                    name="Book_86_002"
                    geometry={nodes.Book_86_002.geometry}
                    material={materials.books}
                    position={[8.30714798, 1.99731731, 4.39111757]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                />
                <mesh
                    name="100-WEBBY"
                    geometry={nodes["100-WEBBY"].geometry}
                    material={materials.Metal}
                    position={[2.09454513, 4.36620903, 9.15424061]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01174412}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/office3.glb");
