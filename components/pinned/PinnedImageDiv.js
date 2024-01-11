import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function PinnedImageDiv({ client, type, p, img, video, translateXLeft }) {
    const videoRef = useRef()
    const [isMouseOver, setIsMouseOver] = useState(false)

    useEffect(() => {
        if (isMouseOver) videoRef.current.play();
        else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isMouseOver])

    // mrbeast-video.mp4
    return (
        <div onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} className={`pinnedImagesDiv hover-div ${client !== 'Mr Beast' && 'mt-40 sm:mt-[200px]'} relative z-50 mx-auto ${translateXLeft && 'sm:translate-x-[-22%]'} ${client !== 'DYNABOARD' && 'sm:mb-56'} `}>
            <div className='relative h-full'>
                <Image className='absolute inset-0 object-cover w-full h-full' src={`/pinnedSection/${img}`} alt='titleImg' width={1024} height={682} quality={100} />
                <div className={`absolute inset-0 object-cover w-full h-full opacity-0 grid place-content-center duration-300 ${isMouseOver && "opacity-100"}`}>
                    <video
                        ref={videoRef}
                        className={`absolute inset-0 object-cover w-full h-full ${!isMouseOver && "hidden"}`}
                        // autoPlay
                        loop
                        muted
                        src={`/pinnedSection/${video}`}
                    />
                    <div className='hover-div backdrop-blur-sm mb-10 round-button uppercase bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border-2 border-[#efefef] hover:border-[#ff4d00]'>
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
