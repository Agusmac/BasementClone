import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#000e] w-full lg:min-h-screen relative z-20 pt-[4.166vw] pb-[max(22px,2.1vw)] px-[max(16px,1.5625vw)] uppercase flex flex-col'>
            <div className='flex tracking-[-.02em] leading-[1.2] py-[max(12px,2.0833333333vw)] text-[max(16px,1.25vw)]'>
                <div className="flex-1 flex">
                    <p className='mr-[max(24px,4.9vw)] whitespace-nowrap'>v 1.0.0.1</p>
                    <p>Basement — A Digital Studio MAKING COOL SHIT THAT PERFORMS</p>
                </div>
                <div className=" text-end justify-end hidden md:block">
                    <p>©2024</p>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#efefef]'></div>
            <div className='py-[max(30px,3.33vw)] md:flex items-center flex-1 relative'>

                <h2 className='text-[max(40px,7.9vw)] basement leading-[86%] tracking-[-.03em] relative z-10 whitespace-nowrap'>
                    Any <br /> project <br /> in mind?<br />
                    <span className='text-[#ff4d00] underlined relative max-w-max whitespace-normal'>Get in touch</span>
                </h2>
                <img className='absolute w-[93vw] left-[30vw] hidden md:block' src="/footer-img-1.svg" alt="" />
                <img className='w-[max(375px,217.333vw)] relative max-w-none mt-[-20.833vw] left-0 md:hidden' src="/footer-img-mobile.svg" alt="" />

            </div>
            <div className='w-full h-[1px] bg-[#efefef]'></div>

            <div className='flex justify-between flex-col sm:flex-row gap-10 leading-[1.2] pt-[max(16px,2.0833333333vw)] text-[max(16px,1.25vw)]'>
                <div className="flex-1">
                    <p>Social Media</p>
                    <a className='relative underlined-white'>Twitter</a>
                    <span> — </span>
                    <a className='relative underlined-white'>Instagram</a>
                    <span> — </span>
                    <a className='relative underlined-white'>GITHUB</a>
                    <span> — </span>
                    <a className='relative underlined-white'>Twitch</a>
                </div>
                <div className="">
                    <p className=''>Get in touch</p>
                    <p className='relative underlined-white'>hello@basement.studio</p>
                </div>
                <div className="flex-1 text-end hidden md:block">
                    <p className=''>© basement.studio LLC 2024</p>
                    <p>all rights reserved</p>
                </div>
            </div>

        </div>
    )
}
