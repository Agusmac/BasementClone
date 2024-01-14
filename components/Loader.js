import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'

export default function Loader({ heroModelReady }) {
    const [finish, setFinish] = useState(false)
    const [abstractImg, setAbstractImg] = useState(1)
    const tl = gsap.timeline();
    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        if (window.innerWidth > 640) {
            if (heroModelReady) {
                tl.to(`.bg-Gradient-Loader`, { duration: 0.5, backgroundPositionX: '0%', ease: 'none' })
                tl.to(`.bg-Gradient-Loader`, { duration: 0.25, y: '-300%', opacity: 0 }, "+=0.5")
                    .eventCallback("onComplete", () => {
                        setFinish(true)
                    });
            } else {
                const updateAbstractImage = () => {
                    // Increment the abstract image index, restart to 1 when it reaches 11
                    setAbstractImg((prevImg) => (prevImg % 11) + 1);
                    setTimeout(updateAbstractImage, 75);
                };
                updateAbstractImage(); // Start the recursive setTimeout loop
            }
        } else setIsMobile(true);

    }, [heroModelReady]);

    if (isMobile) return null;

    return (
        <div className={`LoaderDIV hidden sm:block ${finish && "-translate-y-full"} fixed inset-0 w-full h-screen bg-black z-[9999] uppercase duration-700`}>
            <div className={`absolute inset-0 grid place-content-center`}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                    <Image priority key={item} width={1920 / 4} height={1080 / 4} quality={50} className={`abstractImg absolute opacity-50 inset-0 w-full h-full ${abstractImg !== item && "hidden"}`} src={`/abstract/${item}.svg`} alt="abstract" />
                ))}
            </div>
            <div className='absolute inset-0  grid place-content-center z-[9999]'>
                <p className='basement text-[4.17vw] duration-300 bg-Gradient-Loader text-transparent'>Basement.</p>
            </div>
            <p className='text-[3vw] lg:text-[1.25vw] absolute bottom-[10vw] lg:bottom-[1.875vw] leading-[1.19] tracking-[-.02em] mx-auto w-full text-center'>A Digital Studio MAKING COOL SHIT THAT PERFORMS</p>
        </div>
    )
}
// ease-[cubic-bezier(0.165,0.84,0.44,1)]