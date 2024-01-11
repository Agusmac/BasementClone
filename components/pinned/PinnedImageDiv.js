import Image from 'next/image'
import React from 'react'

export default function PinnedImageDiv({client,type,p,img,translateXLeft}) {
    return (
        <div className={`pinnedImagesDiv hover-div ${client !=='Mr Beast' && 'mt-40 sm:mt-[200px]'} relative z-50 mx-auto ${translateXLeft && 'sm:translate-x-[-22%]'} ${client !=='DYNABOARD' && 'sm:mb-56'} `}>
            <div className='relative h-full'>
                <Image className='absolute inset-0 object-cover w-full h-full' src={`/pinnedSection/${img}`} alt='titleImg' width={1024} height={682} quality={100} />
            </div>
            <div className='flex justify-between uppercase mt-3'>
                <p>{client}</p>
                <p><span className='text-[#747474] mr-2'>Type </span> {type}</p>
            </div>
            <p className='text-base md:hidden leading-[1.19] mt-2'>{p}</p>
        </div>
    )
}
