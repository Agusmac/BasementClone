import React, { useLayoutEffect, useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { useFrame} from '@react-three/fiber';



export default function Camera() {
    const camera = useRef();

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const easeFactor = 0.3;

    const cursor = {
        x: 0,
        y: 0
    }

    useLayoutEffect(() => {
        window.addEventListener('mousemove', (event) => {
            cursor.x = event.clientX / sizes.width - 0.5
            cursor.y = event.clientY / sizes.height - 0.5
        })
    }, [])


    useFrame(() => {

        const cameraTargetPositionZ = (cursor.x * 0.1) + 1.383
        const cameraTargetPositionY = (cursor.y * 0.2) + 2.1
        // this makes the position Y change a bit more, 
        // u can use 0.1 to make the change similar to the others

        const cameraTargetRotationY = -(cursor.x * 0.1) + 7.85;
        const cameraTargetRotationX = -cursor.y * 0.1;

        // Apply easing to the rotation values
        const easedRotationY = easeInOutQuad(easeFactor) * (cameraTargetRotationY - camera.current.rotation.y);
        const easedRotationX = easeInOutQuad(easeFactor) * (cameraTargetRotationX - camera.current.rotation.x);

        // Apply easing to the position values
        const easedPositionZ = easeInOutQuad(easeFactor) * (cameraTargetPositionZ - camera.current.position.z);
        const easedPositionY = easeInOutQuad(easeFactor) * (cameraTargetPositionY - camera.current.position.y);

        // Update the camera rotation
        camera.current.rotation.y += easedRotationY;
        camera.current.rotation.x += easedRotationX;

        // // Update the camera position
        camera.current.position.z += easedPositionZ;
        camera.current.position.y += easedPositionY;
    });


    return (
        <PerspectiveCamera ref={camera} fov={50}
            position={[0, 2.1, 1.383]}
            rotation={[0, 7.85, 0]}
            near={0.1}
            far={100}
            rotation-order="YZX"
            makeDefault />
    )
}
