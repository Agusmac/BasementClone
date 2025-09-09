import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function PinnedImageDiv({ client, type, p, img, video, translateXLeft, n, setCurrentDiv }) {
    const videoRef = useRef()
    const parentRef = useRef()
    const [isMouseOver, setIsMouseOver] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 641) {
       
            const parent = parentRef.current;
            const params = {
                trigger: parent,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {
                    setCurrentDiv(n)
                },
                onEnterBack: () => {
                    setCurrentDiv(n)
                },
            }
            const tl = gsap.timeline({ scrollTrigger: params });
        }
    }, [])

    useEffect(() => {
        if (videoRef.current) {
            if (isMouseOver) videoRef.current.play();
            else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isMouseOver])

    return (
        <div onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} className={`pinnedImagesDiv hover-div ${client !== 'Mr Beast' && 'mt-40 sm:mt-[200px]'} relative z-50 mx-auto ${translateXLeft && 'sm:translate-x-[-22%]'} ${client !== 'DYNABOARD' && 'sm:mb-56'} `}>
            <div ref={parentRef} className='relative h-full'>
                <Image className='absolute inset-0 object-cover w-full h-full' src={`/pinnedSection/${img}`} alt='titleImg' width={1024} height={682} quality={100} />
                <div className={`absolute inset-0 object-cover w-full h-full hidden opacity-0 sm:grid place-content-center duration-300 ${isMouseOver && "opacity-100"}`}>
                    <video
                        loading="lazy"
                        ref={videoRef}
                        className={`absolute inset-0 object-cover w-full h-full ${!isMouseOver && "hidden"}`}
                        // autoPlay
                        width={1920 / 2}
                        height={1080 / 2}
                        loop
                        muted
                        src={`/pinnedSection/${video}`}
                    />
                    <div className='hidden lg:block hover-div backdrop-blur-sm mb-10 round-button uppercase bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border-2 border-[#efefef] hover:border-[#ff4d00]'>
                        <p className=''><span className="text-[#ff4d00] mr-5">→</span>Know More</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between uppercase mt-3'>
                <p>{client}</p>
                <p><span className='text-[#747474] mr-2'>Type </span> {type}</p>
            </div>
            <p className='text-base md:hidden leading-[1.19] mt-2'>{p}</p>
        </div>
    )
}
