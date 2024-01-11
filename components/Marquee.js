import Image from 'next/image'
import React from 'react'

export default function Marquee() {
    return (
        <div className='relative '>
            <div className='overflow-hidden '>
                {/* definitely not optimal solution but it makes the trick */}
                <div className='flex py-2 md:py-5 scale-[.70] md:scale-100'>
                    {[1, 2].map((item, k) =>
                        <div key={item} className='marquee flex items-center flex-shrink-0 h-[180px]'>
                            <Image priority className='mx-12 max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-0.svg'} alt='titleImg' width={217 * 2} height={167 * 2} quality={100} />
                            <Image priority className='mx-12 max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-1.svg'} alt='titleImg' width={172 * 2} height={167 * 2} quality={100} />
                            <Image priority className='mx-12 relative -top-[11px] max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-2.svg'} alt='titleImg' width={166 * 2} height={167 * 2} quality={100} />
                            <Image priority className='mx-12  max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-3.svg'} alt='titleImg' width={298.56} height={180} quality={100} />
                            <Image priority className='mx-12  max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-4.svg'} alt='titleImg' width={242.517} height={180} quality={100} />
                            <Image priority className='mx-12  max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-5.svg'} alt='titleImg' width={242.517} height={180} quality={100} />
                            <Image priority className='mx-12  max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-6.svg'} alt='titleImg' width={201.55} height={198} quality={100} />
                            <Image priority className='mx-12  max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-7.svg'} alt='titleImg' width={239.28} height={180} quality={100} />
                            <Image priority className='mx-12  max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-8.svg'} alt='titleImg' width={345.98} height={180} quality={100} />
                            <Image priority className='mx-12  max-h-[180px] w-auto opacity-60 hover:opacity-100 duration-300 hover-div' src={'/marquee/marquee-item-9.svg'} alt='titleImg' width={251.133} height={180} quality={100} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

