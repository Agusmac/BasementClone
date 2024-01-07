'use client';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import PinnedImageDiv from './PinnedImageDiv';

export default function PinnedText() {
  const pinRef = useRef();
  const parentRef = useRef();
  const firstTitleRef = useRef();
  const secondTitleRef = useRef();

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
      {/* sticky top-0 */}
      {/* mb-24 sm:mb-0 */}
      {/* sm:top-36 */}
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
              <div><p>There&apos;s a new beast coming out of the basement.</p></div>
            </div>
          </div>
        </div>

        <PinnedImageDiv client={'Mr Beast'} type={'E-Commerce'} img={'mrbeast-img.jpg'} p={`There's a new beast coming out of the basement.`} />
        <PinnedImageDiv client={'VERCEL'} type={'BRANDING'} img={'vercel.jpg'} translateXLeft p={`Let's dive into how our expertise played a key role in contributing to Vercel wins, driving brand growth worldwide.`} />
        <PinnedImageDiv client={'RANBOO'} type={'E-Commerce'} img={'ranboo.jpeg'} p={`Reimaging the shopping experience for one of the cool kids and taking it to a whole new level.`} />
        <PinnedImageDiv client={'DYNABOARD'} type={'WEBSITE'} img={'dynaboard.jpg'} translateXLeft p={`Ushering in the new face of collaborative development with an exceptional web presence.`} />
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