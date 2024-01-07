'use client';
import Image from 'next/image'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function LastSlider() {

    const parentRef = useRef();
    const titleRef = useRef();
    const imageRef = useRef();

    const [sliderImg, setSliderImg] = useState('slider-img-2.webp')
    const [startSlide, setStartSlide] = useState(0)

    function changeImg(img) {
        if (sliderImg !== img && startSlide === 0) {
            setStartSlide(1);

            setTimeout(() => {
                setSliderImg(img);

                setTimeout(() => {
                    setStartSlide(2);
                }, 200);
                setTimeout(() => {
                    setStartSlide(0)
                }, 400);

            }, 1000);
        }
    }

    useLayoutEffect(() => {
        const isMobile = window.innerWidth <= 1024;

        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            // const parent = parentRef.current;
            const title = titleRef.current;
            const imager = imageRef.current;

            const params = {
                trigger: title,
                // markers: true,
                start: 'top 120%',
                end: 'bottom -75%',
                scrub: true,
            }
            const tl = gsap.timeline({ scrollTrigger: params });

            tl
                // .to(title, { y: '-65' })
                .to(imager, { y: '-99' }, 0)
            // IMPORTANT !!!
            // the 0 is to specify 0 delay, making them both run same time

        }

    }, [])


    return (
        // 
        <div ref={parentRef} className='relative mt-[max(100px,17vw)] px-4 sm:px-[1.56vw] mb-96 '>

            <div className='lg:absolute -top-32 left-0 z-10 mix-blend-difference pl-[1.56vw]'>
                <div ref={titleRef} className='max-w-max relative mb-[3.25vw] '>
                    <h2 className='basement awards-title leading-none'>Who we are</h2>
                    <p className='text-xl sm:text-2xl sm:text-right'>(The fam)</p>
                </div>

                <p className='text-[max(26px,1.66vw)] lg:max-w-[41.66vw] mb-12'>
                    Our studio is only as special as the people that comprise it: designers, developers, and creatives driven by the desire to build non-standard & meaningful experiences.
                </p>
                <div className='hidden cursor-pointer sm:block backdrop-blur-sm mb-10 round-button uppercase bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border-2 border-[#efefef]'>
                    <p className=''><span className="text-[#ff4d00] mr-5">→</span>The peeps</p>
                </div>
            </div>




            {/* <div className='sm:hidden mb-10 round-button bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border border-[#efefef] '>
                <p className=''><span className="text-[#ff4d00] mr-2">→</span>ABOUT US</p>
            </div> */}

            <div className='lg:w-[64vw] relative lg:ml-auto mr-0'>
                <div className='relative lg:w-[64vw] min-h-[393px] h-[42.6vw] overflow-hidden grid place-content-center'>
                    <Image ref={imageRef} priority className='lg:scale-[1.20] absolute object-cover w-full h-full inset-0 lg:top-20 ' src={`/slider-1/${sliderImg}`} alt='titleImg' width={2454 / 2} height={1632 / 2} quality={100} />
                    <div className={`absolute inset-0 ${startSlide !== 0 && 'duration-300'} ease-[cubic-bezier(0.165,0.84,0.44,1)]  bg-[#ff4d00] ${startSlide === 2 ? '-top-full bottom-full' : startSlide === 1 ? 'top-0' : 'top-full'}`}></div>
                </div>

                {/* probably should just map this  */}
                <div className='flex items-center justify-center font-mono gap-3 text-xs sm:text-base text-[#efefef] sm:gap-5 absolute sm:right-10 -bottom-[20vw] sm:-bottom-[88px] lg:-top-[3.5vw] lg:bottom-auto '>

                    {[1, 2, 3, 4].map((item, index) => {
                        const imgString = item === 1 ? `slider-img-1.jpg` : `slider-img-${item}.webp`
                        return (
                            <div key={index} onClick={() => changeImg(`${imgString}`)} className='flex-1 '>
                                <p>00{item}</p>
                                <div className={`relative ${sliderImg !== imgString && 'cursor-pointer'} group`}>
                                    <Image className='group-hover:brightness-125 duration-300' src={`/slider-1/${imgString}`} alt='titleImg' width={96} height={64} />
                                    <div className={`absolute inset-0 duration-200 ${sliderImg === imgString && 'bg-[#ff4d00]'}`}></div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}
{/* <div className='hidden cursor-pointer sm:block absolute backdrop-blur-sm -right-5 bottom-1/2 mb-10 round-button bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border-2 border-[#efefef]'>
<p className=''><span className="text-[#ff4d00] mr-5">→</span>ABOUT US</p>
</div> */}