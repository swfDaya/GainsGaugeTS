import './TFD_ScrollerWeight.css'

import { useState, useEffect, useRef } from 'react'
import TFD_ScrollerWeightEach from './TFD_ScrollerWeightEach'


const TFD_ScrollerWeight = () => {

    const [ inViewElements, setInViewElements ] = useState<number[]>([])
    const [centerElement, setCenterElement] = useState<number>(-1)
    const scrollerWeightRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        setCenterElement(inViewElements[Math.floor(inViewElements.length / 2)])
        }, [inViewElements])

    useEffect(() => {
        setTimeout(() => {
            scrollerWeightRef.current[25]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 1000)

    }, [])

    return (
        <div
        className = 'home__body__center__ex__scroller__base__reps__control__container'
        >
            {
                Array.from({length: 202}).map((_, index) => (
                    <div
                    className='to__center'
                    key={index}
                    ref={(el) => (scrollerWeightRef.current[index] = el)}
                    >
                        <TFD_ScrollerWeightEach
                        key={index}
                        value={index*0.25}
                        setInViewElements={setInViewElements}
                        centerElement={centerElement}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default TFD_ScrollerWeight
