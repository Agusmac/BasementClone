// 'use client';
import React, { useEffect,  useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import Model from './BasementModel'
// import { Leva } from 'leva'
import Camera from './Camera'
import Merged from '../models/MergedModel'
import Image from 'next/image'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function Hero({ darkDivRef, testRef }) {

    const [isMobile, setIsMobile] = useState(false);
    const heroRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        if (window.innerWidth < 641) setIsMobile(true)
    }, [])
    // MAYBE I COULD TAKE THIS TO THE MERGED MODEL AND DO EVERYTHING THERE
    // OR CREATE A STATE HERE, PASS THE SETTER TO THE MODEL AND GET THE REFERENCE TO DO EVERYTHING HERE

    useEffect(() => {
        if (darkDivRef.current) {
            if (window.innerWidth > 641) {
                gsap.registerPlugin(ScrollTrigger);
                const hero = heroRef.current;
                const title = titleRef.current;
                const darkDiv = darkDivRef.current;
                // console.log(darkDiv)
                // const test = testRef.current;
                // testerClass
                const params = {
                    trigger: hero,
                    // markers: true,
                    start: 'top top',
                    end: 'bottom 20%',
                    scrub: true,
                }
                const tl = gsap.timeline({ scrollTrigger: params });
                // const tl2 = gsap.timeline({ scrollTrigger: params });

                tl.to(darkDiv, { y: '-500' })
                    .to(title, { y: '-500' }, 0)


                // timeline.to([title, darkDiv], {
                //     y: ['-499', '-499'],
                // });
                // tl.to(title, { y: '-65' })
                // tl2.to(imager, { y: '-199' })
            }
        }
    }, [darkDivRef, testRef])

    return (
        <div id='#hero' ref={heroRef} className='relative z-10 w-full h-[92vh] sm:h-screen bg-black '>
            {/* <Leva collapsed /> */}
            {!isMobile ?
                <Canvas dpr={1}>
                    <Camera />
                    <ambientLight intensity={4} />
                    {/* <Model /> */}
                    {/* IMPROVE THE MERGED MODEL, & DONT INCLUDE THE CHAIR AND THE LETTER THAT ARE ANIMATED */}
                    <Merged heroRef={heroRef} />
                </Canvas>
                :
                <div className='mt-[15.733vw] min-h-[60vh] h-[70vh] relative'>
                    <Image priority className='absolute object-cover inset-0 w-full h-full' src={'/office-mobile.webp'} alt='titleImg' width={2732 / 2} height={2048 / 2} quality={100} />
                </div>
            }

            <div className='text-[#efefef] hidden lg:flex absolute top-20 pt-1 w-full  justify-between items-center text1 tracking-[-0.04em]  text-[1.6666666667vw] px-[30px]'>
                <div className=''>A digital studio making cool shit that performs.</div>
                <div className=''>Any project in mind? <span> Drop us a line.</span></div>
            </div>
            <div ref={titleRef} className='absolute inset-[1.0416666667vw] mx-auto top-auto px-4'>
                <Image priority className='hidden sm:block' src={'/title.webp'} alt='titleImg' width={3802 / 2} height={384 / 2} quality={100} />
                <Image priority className='sm:hidden' src={'/title-mobile.webp'} alt='titleImg' width={724} height={96} quality={100} />
                <p className='sm:hidden text-xl mt-2'>A digital studio making cool shit that performs</p>

                <div className='lg:hidden mt-12 mb-1 round-button bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border border-[#efefef] '>
                    <p className=''>
                        <span className="text-[#ff4d00] mr-2">→</span>
                        CONTACT US
                    </p>
                </div>

            </div>
        </div>
    )
}
{/* <Image className='' src={'/title.webp'} fill sizes='100vw' quality={100} /> */ }