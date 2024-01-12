import React, { useEffect, useRef, useState } from 'react'
import RotatingModel from './RotatingModel'

const awardsData = [
    {
        title: "Awwwards SOTD",
        client: "basement chronicles",
        date: "November 8, 2023",
    },
    {
        title: "Awwwards Developer Site",
        client: "basement chronicles",
        date: "November 8, 2023",
    },
    {
        title: "Awwwards Honors",
        client: "basement chronicles",
        date: "November 8, 2023",
    },
    {
        title: "FWA",
        client: "basement chronicles",
        date: "October 28, 2023",
    },
    {
        title: "Webby Awards",
        client: "Mr Beast",
        date: "May 25, 2023",
    },
    {
        title: "Awwwards SOTD",
        client: "Basement Foundry",
        date: "January 9, 2023",
    },
    {
        title: "Awwwards Developer Site",
        client: "Basement Foundry",
        date: "January 9, 2023",
    },
    {
        title: "Awwwards SOTD",
        client: "Mr Beast",
        date: "September 8, 2022",
    },
    {
        title: "Awwwards Developer Site",
        client: "Mr Beast",
        date: "September 8, 2022",
    },
    {
        title: "Awwwards Honorable Mention",
        client: "Mr Beast",
        date: "August 5, 2022",
    },
    {
        title: "Awwwards SOTD",
        client: "basement studio",
        date: "June 15, 2022",
    },
    {
        title: "Awwwards Developer Site",
        client: "basement studio",
        date: "June 15, 2022",
    },
    {
        title: "Awwwards Honorable Mention",
        client: "basement studio",
        date: "May 24, 2022",
    },
    {
        title: "Awwwards SOTD",
        client: "Ranboo",
        date: "December 6, 2021",
    },
    {
        title: "Awwwards Developer Site",
        client: "Ranboo",
        date: "December 6, 2021",
    },
    {
        title: "Awwwards Mobile Excellence",
        client: "Ranboo",
        date: "November 10, 2021",
    },
    {
        title: "Awwwards Honorable Mention",
        client: "Ranboo",
        date: "November 10, 2021"
    },
    // /////////////////////
    // //////////////////////
    {
        title: "Awwwards Mobile Excellence",
        client: "basement grotesque",
        date: "August 27, 2021",
    },
    {
        title: "Awwwards Honorable Mention",
        client: "basement grotesque",
        date: "August 27, 2021",
    },
    {
        title: "Awwwards SOTD",
        client: "Bad Boys",
        date: "January 15, 2021",
    },
    {
        title: "Awwwards Developer Site",
        client: "Bad Boys",
        date: "January 15, 2021",
    },
    {
        title: "Awwwards Honorable Mention",
        client: "Bad Boys",
        date: "December 21, 2020",
    },
    {
        title: "Awwwards Mobile Excellence",
        client: "Bad Boys",
        date: "December 21, 2020",
    },
    {
        title: "Awwwards SOTD",
        client: "Boost",
        date: "November 16, 2020",
    },
    {
        title: "Awwwards Developer Site",
        client: "Boost",
        date: "November 16, 2020",
    },
    {
        title: "Awwwards Mobile Excellence",
        client: "Boost",
        date: "October 29, 2020",
    },
    {
        title: "Awwwards Honorable Mention",
        client: "Boost",
        date: "October 29, 2020",
    },
]
// const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
export default function AwardsDiv({ setAwardVisible, setCurrentAward }) {

    const parentDiv = useRef();
    const mediumParentDiv = useRef();
    const [screenResolution, setscreenResolution] = useState(null);
    useEffect(() => {
        setscreenResolution(window.innerWidth)
    }, [])


    return (
        <>
            {/* lg:hidden */}
            {screenResolution > 641 && screenResolution < 1025 &&
                <div ref={mediumParentDiv} className='h-[22vw] w-[22vw] mx-auto lg:hidden relative md:-top-[20vw] lg:-top-[15vw] z-20 xl:top-0'>
                    <RotatingModel mediumParentDiv={mediumParentDiv} screenResolution />
                </div>
            }
            <div ref={parentDiv} className=' flex relative md:-top-[20vw] lg:-top-[15vw] xl:top-0 z-20'>

                {screenResolution > 1024 &&
                    <div className='h-[22vw] w-[22vw] hidden lg:block flex-shrink-0 sticky top-[88px] sm:top-[124px] md:top-36 lg:top-[88px]'>
                        <RotatingModel parentDiv={parentDiv} />
                    </div>
                }

                {/* */}
                <div className='bg-[black] w-full sm:pt-0 lg:pt-12 lg:pb-24 px-[max(16px,1.5625vw)] lg:px-0 lg:pl-[3vw]'>
                    <div className='max-w-max mb-[max(45px,3vw)]'>
                        <h2 className='basement awards-title leading-none'>AWARDS</h2>
                        <p className='text-xl sm:text-2xl sm:text-right'>(RECOGNITIONS)</p>
                    </div>


                    <div onMouseEnter={() => setAwardVisible(true)} onMouseLeave={() => setAwardVisible(false)} className='lg:pr-[max(16px,1.5625vw)] w-full '>
                        {awardsData.map((item, i) => (
                            <div onMouseEnter={() => setCurrentAward(i+1)} key={i} className={`flex hover-div relative box-content mt-[-1px] hover:z-10 items-center border-t border-b border-[#787878] text-[#787878] hover:border-[#efefef] hover:text-[#efefef] py-[.9375vw]`}>
                                <p className='text-[max(16px,1.875vw)] flex-1'>{item.title}</p>
                                <div className='flex-1 flex items-center text-end lg:text-start justify-end lg:justify-start text-[max(16px,1.25vw)]'>
                                    <div className='flex-1 uppercase lg:normal-case'>{item.client}</div>
                                    <div className='flex-1 hidden lg:block'>{item.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
