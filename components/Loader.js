import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Loader({ heroModelReady }) {
    const [finish, setFinish] = useState(false)

    useEffect(() => {
        if(heroModelReady){
            setTimeout(() => {
                setFinish(true)
            }, 500);
        }

    }, [heroModelReady])

    return (
        <div className={`hidden md:block ${finish && "-translate-y-full"} fixed inset-0 w-full h-screen bg-black z-[9999] uppercase duration-300 `}>
            <p className='text-[3vw] lg:text-[1.25vw] absolute bottom-[10vw] lg:bottom-[1.875vw] leading-[1.19] tracking-[-.02em] mx-auto w-full  text-center'>A Digital Studio MAKING COOL SHIT THAT PERFORMS</p>
        </div>
    )
}
