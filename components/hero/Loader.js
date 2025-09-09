import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

// this is the best working version of the loader,
//  should set HeroModelReady with this instead

function Loader() {
    const { progress } = useProgress()
    const  prog = useProgress()
    useEffect(() => {
        console.log(progress,prog)
    }, [progress,prog])


    return null
}
export default Loader