'use client';
import Image from 'next/image'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function LastSlider() {

    const parentRef = useRef();
    const titleRef = useRef();
    const imageRef = useRef();

    const [sliderImg, setSliderImg] = useState('slider-img-1.jpg')
    const [startSlide, setStartSlide] = useState(0)
    const [abstractImg, setAbstractImg] = useState(1)
    function changeImg(img) {

        if (sliderImg !== img && startSlide === 0) {
            for (let j = 0; j < 3; j++) {
                for (let i = 1; i <= 11; i++) {
                    setTimeout(() => {
                        console.log(i)
                        setAbstractImg(i);
                    }, 75 * (i + j * 10)); 
                }
            }
            setStartSlide(1);

            setTimeout(() => {
                setSliderImg(img);

                setTimeout(() => {
                    setStartSlide(2);
                }, 200 * 4); 

                setTimeout(() => {
                    setStartSlide(0);
                }, 200 * 5); 
            }, 1000);
        }
    }

    useLayoutEffect(() => {
        const isMobile = window.innerWidth <= 1024;

        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            const title = titleRef.current;
            const imager = imageRef.current;

            const params = {
                trigger: title,

                start: 'top 120%',
                end: 'bottom -75%',
                scrub: true,
            }
            const tl = gsap.timeline({ scrollTrigger: params });

            tl
                .to(imager, { y: '-125' }, 0)
            // IMPORTANT !!!
            // the 0 is to specify 0 delay, making them both run same time

        }

    }, [])


    return (
        // 
        <div ref={parentRef} className='mt-[max(100px,17vw)] md:mt-[max(75px,9vw)] lg:mt-[max(100px,17vw)] px-4 sm:px-[1.56vw] lg:pr-0 sticky top-0 lg:top-[128px] '>

            <div className='lg:absolute -top-32 left-0 z-10 mix-blend-difference pl-[1.56vw]'>
                <div ref={titleRef} className='max-w-max relative mb-[3.25vw] '>
                    <h2 className='basement awards-title leading-none tracking-[-.04em]'>Who we are</h2>
                    <p className='text-xl sm:text-2xl sm:text-right'>(The fam)</p>
                </div>

                <p className='text-[max(26px,1.66vw)] lg:max-w-[41.66vw] mb-12 tracking-[-.02em] leading-[1.19]'>
                    Our studio is only as special as the people that comprise it: designers, developers, and creatives driven by the desire to build non-standard & meaningful experiences.
                </p>
                <div className='hidden hover-div sm:block backdrop-blur-sm mb-10 round-button uppercase bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border-2 border-[#efefef] hover:border-[#ff4d00]'>
                    <p className=''><span className="text-[#ff4d00] mr-5">→</span>The peeps</p>
                </div>
            </div>

            <div className='absolute bottom-[5%] left-0 uppercase hidden lg:flex pl-[1.56vw] gap-[4vw] font-medium tracking-[-.02em] leading-loose'>
                <div className=" ">
                    <p>Typology</p>
                    <p>Status</p>
                    <p>Year</p>
                </div>
                <div className='text-[#747474]'>
                    <p>PUBLIC, CULTURE</p>
                    <p>Completed</p>
                    <p>2024</p>
                </div>
            </div>

            {/* <div className='sm:hidden mb-10 round-button bg-[rgba(0,0,0,0.2)] w-fit rounded-[99%] whitespace-nowrap border border-[#efefef] '>
                <p className=''><span className="text-[#ff4d00] mr-2">→</span>ABOUT US</p>
            </div> */}

            <div className='lg:w-[64vw] relative lg:ml-auto mr-0'>
                <div className='relative lg:w-[64vw] min-h-[393px] h-[42.6vw] overflow-hidden grid place-content-center mb-[200px] lg:mb-0'>
                    <Image ref={imageRef} priority className='lg:scale-[1.20] absolute object-cover w-full h-full inset-0 lg:top-20 ' src={`/last-slider/${sliderImg}`} alt='titleImg' width={2454 / 2} height={1632 / 2} quality={100} />
                    <div className={`absolute inset-0 grid place-content-center ${startSlide !== 0 && 'duration-300'} ease-[cubic-bezier(0.165,0.84,0.44,1)]  bg-[#ff4d00] ${startSlide === 2 ? '-top-full bottom-full' : startSlide === 1 ? 'top-0' : 'top-full'}`}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                            <img key={item} className={`abstractImg absolute inset-0 w-full h-full ${abstractImg !==item && "hidden" }`} src={`/abstract/${item}.svg`} alt="" />
                        ))}
                    </div>
                </div>

                <div className='flex items-center justify-center font-mono gap-3 text-xs sm:text-base text-[#efefef] sm:gap-5 absolute sm:right-[4.25vw] -bottom-[20vw] sm:-bottom-[88px] lg:-top-[3.5vw] lg:bottom-auto '>

                    {[1, 2, 3, 4].map((item, index) => {
                        const imgString = item === 1 ? `slider-img-1.jpg` : `slider-img-${item}.webp`
                        return (
                            <div key={index} onClick={() => changeImg(`${imgString}`)} className='flex-1 hover-div'>
                                <p>00{item}</p>
                                <div className={`relative  group `}>
                                    <Image className='group-hover:brightness-125 duration-300 w-[96px] h-[64px]' src={`/last-slider/${imgString}`} alt='titleImg' width={96} height={64} />
                                    <div className={`absolute inset-0 duration-200 w-full h-full object-cover ${sliderImg === imgString && 'bg-[#ff4d00]'}`}></div>
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