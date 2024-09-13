import './TFD_ScrollerReps.css'
import TFD_ScrollerRepsEach from './TFD_ScrollerRepsEach'

import { useState, useEffect, useRef } from 'react'


const TFD_ScrollerReps = () => {

    const [ inViewElements, setInViewElements ] = useState<number[]>([])
    const [centerElement, setCenterElement] = useState<number>(-1)
    const scrollerRepsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        setCenterElement(inViewElements[Math.floor(inViewElements.length / 2)])
    }, [inViewElements])

    useEffect(() => {
        setTimeout(() => {
            scrollerRepsRef.current[10]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 500)

    }, [])

    return (
        <div
        className = 'home__body__center__ex__scroller__base__reps__control__container'
        >
            {Array.from({ length: 52 }).map((_, index) => (
                <div
                key={index}
                className='to__center'
                ref={(el) => (scrollerRepsRef.current[index] = el)}
                >
                    <TFD_ScrollerRepsEach
                    key={index}
                    value={index}
                    setInViewElements={setInViewElements}
                    centerElement={centerElement}
                />
                </div>
            ))}
        </div>
    )
}

export default TFD_ScrollerReps
