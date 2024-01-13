'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from 'next/image';
import PinnedImageDiv from './PinnedImageDiv';

export default function PinnedText() {
  const pinRef = useRef();
  const parentRef = useRef();
  const firstTitleRef = useRef();
  const secondTitleRef = useRef();
  const [currentDiv, setCurrentDiv] = useState(1)

  useEffect(() => {
    console.log(currentDiv);
  }, [currentDiv])

  useEffect(() => {
    if (window.innerWidth > 641) {
      gsap.registerPlugin(ScrollTrigger);
      const pinnedElement = pinRef.current;
      const parent = parentRef.current;
      const firstTitle = firstTitleRef.current
      const secondTitle = secondTitleRef.current

      const params = {
        trigger: parent,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        // markers: true,
      }

      const tl = gsap.timeline({ scrollTrigger: params });
      tl.to(firstTitle, { x: '-1000', ease: 'none' })
        .to(secondTitle, { x: '1000', ease: 'none' }, 0)
    }

  }, []);
  return (

    <div ref={parentRef} className='px-4'>
      <div ref={pinRef} className='relative sm:pb-32 sm:sticky top-36 sm:top-0 mb-[14rem] sm:mb-0 pinnedText basement whitespace-nowrap pt-[88px] sm:pt-[124px] md:pt-36 lg:pt-[105px] tracking-[-0.04em] leading-[1.10]'>
        <h2 ref={firstTitleRef} className='hidden sm:block'>Showcase / Showcase / Showcase / Showcase / Showcase / Showcase / Showcase / Showcase / Showcase / Showcase / </h2>
        <h2 ref={secondTitleRef} className='hidden sm:block relative -left-[200%] lg:-left-full text-[#303030]'>Mr Beast / Vercel / Ranboo / Dynaboard / Mr Beast / Vercel / Ranboo / Dynaboard / Mr Beast / Vercel / Ranboo / Dynaboard / Mr Beast / Vercel / Ranboo / Dynaboard / </h2>

        <div className='flex sm:hidden items-center justify-center'>
          <p className='marquee3 pr-8'>Showcase / Showcase / Showcase / Showcase /</p>
          <p className='marquee3 pr-8'>Showcase / Showcase / Showcase / Showcase /</p>
          <p className='marquee3 pr-8'>Showcase / Showcase / Showcase / Showcase /</p>
        </div>
        <div className='flex sm:hidden items-center justify-center text-[#303030]'>
          <p className='marquee pr-8'>Mr Beast / Vercel / Ranboo / Dynaboard /</p>
          <p className='marquee pr-8'>Mr Beast / Vercel / Ranboo / Dynaboard /</p>
          <p className='marquee pr-8'>Mr Beast / Vercel / Ranboo / Dynaboard /</p>
        </div>
      </div>


      <div className='relative mt-40 sm:mt-0 md:mt-0 lg:mt-10 2xl:mt-[30px] pb-[200px] sm:pb-0'>

        {/* there are many weird fixes in here bc the of
         some weird behaviour of the sticky property */}
        <div className='hidden md:block sticky top-[40vh] ml-auto left-full max-w-[480px] w-[30vw] lg:w-[25vw] pinnedSticker'>
          <div className='relative translate-y-full'>
            <div className='flex gap-[1vw] justify-end pl-5'>
              <div><p>2K22</p></div>
              <div className='h-[1px] mt-[0.95vw] w-[3.6vw] bg-[#ff4d00]'></div>
              <div className='relative min-w-[20vw] lg:min-w-[17vw]'>
              {/* <p>There&apos;s a new beast coming out of the basement.</p> */}
                <p className={`absolute top-0 changingTextPinned duration-300 opacity-0 ${currentDiv===1 && "opacity-100"}`}>There&apos;s a new beast coming out of the basement.</p>
                 <p className={`absolute top-0 changingTextPinned duration-300 opacity-0 ${currentDiv===2 && "opacity-100"}`}>Let&apos;s dive into how our expertise played a key role in contributing to Vercel wins, driving brand growth worldwide.</p>
                 <p className={`absolute top-0 changingTextPinned duration-300 opacity-0 ${currentDiv===3 && "opacity-100"}`}>Reimaging the shopping experience for one of the cool kids and taking it to a whole new level.</p>
                 <p className={`absolute top-0 changingTextPinned duration-300 opacity-0 ${currentDiv===4 && "opacity-100"}`}>Ushering in the new face of collaborative development with an exceptional web presence.</p>
               
              </div>
            </div>
          </div>
        </div>

        <PinnedImageDiv n={1} client={'Mr Beast'} type={'E-Commerce'} img={'mrbeast-img.jpg'} setCurrentDiv={setCurrentDiv} video={'mrbeast-video.mp4'} p={`There's a new beast coming out of the basement.`} />
        <PinnedImageDiv n={2} client={'VERCEL'} type={'BRANDING'} img={'vercel.jpg'} setCurrentDiv={setCurrentDiv} video={'vercel.mp4'} translateXLeft p={`Let's dive into how our expertise played a key role in contributing to Vercel wins, driving brand growth worldwide.`} />
        <PinnedImageDiv n={3} client={'RANBOO'} type={'E-Commerce'} img={'ranboo.jpeg'} setCurrentDiv={setCurrentDiv} video={'ranboo.mp4'} p={`Reimaging the shopping experience for one of the cool kids and taking it to a whole new level.`} />
        <PinnedImageDiv n={4} client={'DYNABOARD'} type={'WEBSITE'} img={'dynaboard.jpg'} setCurrentDiv={setCurrentDiv} video={'dynaboard.mp4'} translateXLeft p={`Ushering in the new face of collaborative development with an exceptional web presence.`} />
      </div>
    </div>
  );
}
// const params2 = {
//   trigger: parent,
//   start: 'top top',
//   end: 'bottom bottom',
//   scrub: true,
//   pin: true,
//   // markers: true,
// }
// const t2 = gsap.timeline({ scrollTrigger: params2 });
// t2.to(pinnedElement, {})