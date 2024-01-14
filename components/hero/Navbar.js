import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <div className='fixed top-0 z-30 w-full h-[15.733vw] md:h-[10.322vw] lg:h-[4.166vw] bg-[rgba(0,0,0,.5)] backdrop-blur-md border-b border-white'>
            <div className='fixed h-[15.733vw] md:h-[10.322vw] lg:h-[4.166vw] text-[#efefef] text-xs sm:text-[3.2vw] md:text-[2.258vw] lg:text-[0.833vw] top-0 z-30 w-full  flex items-center justify-between px-[4.266vw] lg:px-[1.56vw] uppercase font-medium leading-[1.1875] tracking-[-0.02em]'>
                <div className=''>
                    <p className=''>The light that comes <br />from downstairs</p>
                </div>
                <div className='hidden lg:flex items-center justify-center leading-[1.19] relative right-[2vw]'>
                    <p className='relative '>Circa</p>
                    <Image alt='illustration' className='max-w-[4.79vw] h-auto' src={'/header-logo.svg'} width={92} height={50} quality={100} />
                    <p className='relative '>2019</p>
                </div>
                <div className='flex hover-div items-center justify-end leading-[1.19] gap-[10px] text-base sm:text-[4.266vw] md:text-[2.58vw] lg:text-[0.833vw] group '>
                    <p className='group-hover:text-[red] relative lg:-top-[6px] lg:self-end font-normal'>Menu</p>
                    <Image alt='menu' className='fill-[red] group-hover:fill-[red] lg:max-w-[32px] xl:max-w-[37px] h-auto' src={'/menu.svg'} width={37.3} height={37.3} quality={100} />
                </div>
            </div>
        </div>
    )
}
