'use client';
import Image from 'next/image'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Slider() {

    const parentRef = useRef();
    const titleRef = useRef();
    const imageRef = useRef();

    const [sliderImg, setSliderImg] = useState('slider-img-1.jpg')
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
        const isMobile = window.innerWidth <= 641;

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
                .to(title, { y: '-65' })
                .to(imager, { y: '-99' }, 0)
            // IMPORTANT !!!
            // the 0 is to specify 0 delay, making them both run same time

        }

    }, [])


    return (
        // 
        <div ref={parentRef} className='relative z-10 sm:mt-32 px-4 sm:px-[1.56vw] leading-[1.196] tracking-[-0.005em] '>
            <h2 ref={titleRef} className='hidden sm:block text-[2.9166vw] mb-[2vw] lg:mb-3 mix-blend-difference z-20 relative mx-auto  '>
                We&apos;re a boutique studio with a committed team working on selected projects  <br />
                for startups and companies, bringing what they envision to life through: <br />
                <span className='ml-auto max-w-[47vw] absolute right-0'>branding, visual design & development of the highest quality.</span>
            </h2>
            <h2 className='sm:hidden text-[26px] mb-5'>
                We&apos;re a boutique studio with a committed team working on selected projects
                for startups and companies, bringing what they envision to life through:
                branding, visual design & development of the highest quality.
            </h2>
            <div className='sm:hidden mb-10 round-button bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border border-[#efefef] '>
                <p className=''><span className="text-[#ff4d00] mr-2">→</span>ABOUT US</p>
            </div>

            <div className='sm:w-[64vw] relative'>
                <div className='relative sm:w-[64vw] min-h-[393px] h-[42.6vw] overflow-hidden grid place-content-center'>
                    <Image ref={imageRef} priority className='scale-[1.20] absolute object-cover w-full h-full inset-0 sm:top-20 ' src={`/slider-1/${sliderImg}`} alt='titleImg' width={2454 / 2} height={1632 / 2} quality={100} />
                    <div className={`absolute inset-0 ${startSlide !== 0 && 'duration-300'} ease-[cubic-bezier(0.165,0.84,0.44,1)]  bg-[#ff4d00] ${startSlide === 2 ? '-top-full bottom-full' : startSlide === 1 ? 'top-0' : 'top-full'}`}></div>
                </div>


                <div className='hidden cursor-pointer sm:block absolute backdrop-blur-sm -right-5 bottom-1/2 mb-10 round-button bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border-2 border-[#efefef]'>
                    <p className=''><span className="text-[#ff4d00] mr-5">→</span>ABOUT US</p>
                </div>

                {/* probably should just map this  */}
                <div className='flex items-center justify-center font-mono gap-3 text-xs sm:text-base text-[#efefef] sm:gap-5 absolute sm:-right-40 -bottom-[88px] sm:bottom-[17%]'>

                    {[1, 2, 3, 4, 5].map((item, index) => {
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
// timeline.to([title, imager], {
//     y: ['-40', '-99'],
//   });
// timeline.to([imager, title], {
//     y: ['-99', '0'],
//   });
// timeline.to(imager, {
//     y: '-99',
// });