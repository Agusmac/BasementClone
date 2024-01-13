import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import Scenario from './Scenario';
import Image from 'next/image';
import { useState } from 'react';

export default function Followers({ currentAward, awardVisible }) {

    const [isMobile, setisMobile] = useState(true)
    const followerRef = useRef()
    const awardRef = useRef()

    useEffect(() => {
        if (window.innerWidth > 641) {
            console.log('FOLLOWER ON')
            setisMobile(false)
            let start = true;
            gsap.set(awardRef.current, { xPercent: -50, yPercent: -50 });
            let xAwardSetter = gsap.quickTo(awardRef.current, "x", { duration: 0.4, ease: "power3.out" })
            let yAwardSetter = gsap.quickTo(awardRef.current, "y", { duration: 0.4, ease: "power3.out" })

            gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });
            let xSetter = gsap.quickSetter(followerRef.current, "x", "px",)
            let ySetter = gsap.quickSetter(followerRef.current, "y", "px",)

            window.addEventListener("mousemove", e => {
                xAwardSetter(e.x)
                yAwardSetter(e.y)
                xSetter(e.x)
                ySetter(e.y)
                if (start) {
                    gsap.to('.crosshair', {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                    })
                    start = false
                }
            });
        }
    }, []);

    return (
        <>
                <div className='hidden sm:block'>
                    <div ref={followerRef} className="follower mix-blend-difference">
                        <Image priority className="crosshair z-50 relative opacity-0" src="/crosshair.svg" alt='titleImg' width={66} height={66} quality={100} />
                        <div className='absolute inset-0 grid place-content-center'><div className='crosshair-dot h-1 w-1'></div></div>
                    </div>
                    <div ref={awardRef} className="award grid place-content-center">
                        <div className={`opacity-0 ${awardVisible && "opacity-100"} duration-300 ease-in-out`}>
                            <div className='w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw]'>
                                {!isMobile && <Scenario currentAward={currentAward} />}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
